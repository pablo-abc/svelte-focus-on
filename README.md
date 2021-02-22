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
  import { useFocusOn } from 'svelte-focus-on';

  const focusOn = useFocusOn();
</script>

<div class="modal" use:focusOn>
  <!-- ... -->
</div>
```


## Why

I mostly made this package because I found myself using a similar action in different sites. You can most likely do your own action using similar packages.

## Dependencies

Most of the work of this packages is leveraged from:

- *[dom-focus-lock](https://github.com/theKashey/dom-focus-lock)*: Focus trap.
- *[aria-hidden](https://github.com/theKashey/aria-hidden)*: Hides everything from accessibility tools except the specified element.
- *[body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)*: Disables scrolling for the body.
