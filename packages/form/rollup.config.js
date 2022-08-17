// const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const typescript2 = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const { join } = require('path');

const cwd = process.cwd();
const pkg = require(join(cwd, 'package.json'));

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/**
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author?.name || 'Blujedis'}
 * Released under the ${pkg.license || 'MIT'} License.
 */
`;

const common = {
  // banner,
  name: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
  sourcemap: true,
  exports: 'named',
};

const options = {

  input: './src/index.ts',

  output: [
    {
      ...common,
      file: './dist/index.js',
      format: 'commonjs',
    },
    {
      ...common,
      file: './dist/index.cjs',
      format: 'commonjs',
    },
    {
      ...common,
      file: './dist/index.mjs',
      format: 'esm',
    },
    {
      ...common,
      file: './dist/index.esm.js',
      format: 'esm',
    },
    {
      ...common,
      file: './dist/index.umd.js',
      format: 'umd',
    },
    {
      ...common,
      file: './dist/index.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    },

  ],

  plugins: [
    peerDepsExternal({ includeDependencies: false }),
    nodeResolve(),
    commonjs(),
    typescript2({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.cjs.json',
    }),

  ]

};

module.exports = options;