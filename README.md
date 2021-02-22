# Svelte Focus On

A solution to make your modal dialogs or full screen tasks WAI-ARIA compatible. Inspired heavily on [React Focus On](https://github.com/theKashey/react-focus-on).

## Installation

```sh
# npm
npm i -S svelte-focus-on

# yarn
yarn add svelte-focus-on
```

## Usage

Import the `focusOn` function from the package and use it as an action on your modal.

```html
<script>
  import { focusOn } from 'svelte-focus-on';
</script>

<div class="modal" use:focusOn>
  <!-- ... -->
</div>
```
