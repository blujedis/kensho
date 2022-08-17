import { escape } from 'svelte/internal';

export const JS_BLOCK = `<!DOCTYPE html>
<html lang="en">
  <head><script src="scripts/kensho.umd.js" /></head>
  <body>
    <form>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
    <script>
      const { register, store } = Kensho.useKensho({
        initialValues: {
          name: 'Milton Waddams',
          email: 'milton@basement.com'
        },
        onSubmit(values) {
          console.log(values);
        },
        onError(errors) {
          console.log(errors);
        }
      });
      register(document.querySelector('form'));
      store.subscribe((values) => {
      // update DOM elements etc.
      });
    </script>
  </body>
</html>`;

export const REACT_BLOCK = `import useKensho from '@kensho/adapter-react';
export default function myForm() {
  const { register, store } = useKensho({
    initialValues: {
      name: 'Milton Waddams',
      email: 'milton@basement.com'
    },
    onSubmit(values) {
      console.log(values);
    },
    onError(errors) {
      console.log(errors);
    }
  });
  return (
    <form ref={register}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}`;

export const SVELTE_BLOCK = `<script lang="ts">
import useKensho from '@kensho/adapter-svelte';
const { register, store } = useKensho({
  initialValues: {
    name: 'Milton Waddams',
    email: 'milton@basement.com'
  },
  onSubmit(values) {
    console.log(values);
  },
  onError(errors) {
    console.log(errors);
  }
});
</script>
<form use:register>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
`;
