
const { terser } = require('rollup-plugin-terser');
const typescript2 = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { join } = require('path');
const cwd = process.cwd();
const pkg = require(join(cwd, 'package.json'));

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author?.name || 'Blujedis'}
 * Released under the ${pkg.license || 'MIT'} License.
 */
`;

/**
 * Creates an output options object for Rollup.js.
 * 
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
// function buildOptions(options) {
//   return {
//     banner,
//     name: 'App',
//     exports: 'named',
//     sourcemap: true,
//     ...options,
//   };
// }

/**
 * Creates Rollup options.
 * 
 * @param {string} input
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const createOptions = (input, options) => {

  options = {
    banner,
    name: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
    sourcemap: true,
    exports: 'named',
    ...options
  };

  return {

    input,

    external: [
      'react',
      'react-dom',
    ],

    output: [
      {
        ...options,
        file: './dist/index.js',
        format: 'commonjs',
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      },
      {
        ...options,
        file: './dist/index.cjs',
        format: 'commonjs',
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      },
      {
        ...options,
        file: './dist/index.mjs',
        format: 'esm',
      },
      {
        ...options,
        file: './dist/index.esm.js',
        format: 'esm',
      },
      {
        ...options,
        file: './dist/index.umd.js',
        format: 'umd',
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      },
      {
        ...options,
        file: './dist/index.umd.min.js',
        format: 'umd',
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        plugins: [terser()],
      },

    ],

    plugins: [

      nodeResolve(),
      commonjs(),
      typescript2({
        clean: true,
        useTsconfigDeclarationDir: true,
        tsconfig: './tsconfig.cjs.json',
      }),

    ],

  };
};

module.exports = createOptions;