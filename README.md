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

In order to be able to hide all elements from accessible tools you'll nned your dialog to be a _sibling_ of everything else you want to hide. For this you'll most likely need a *portal*. [`svelte-portal`](https://github.com/romkor/svelte-portal) is a great package for this.

```html
<script>
  import { useFocusOn } from 'svelte-focus-on';
  import { portal } from 'svelte-portal';

  const focusOn = useFocusOn();
</script>

<div class="modal" use:focusOn use:portal>
  <!-- ... -->
</div>
```


## Why

I mostly made this package because I found myself using a similar action in different sites. There's not much going on in the source code, but feel free to use it if it fits your needs and/or open an issue if you feel something's missing.

## Dependencies

Most of the work of this packages is leveraged from:

- *[dom-focus-lock](https://github.com/theKashey/dom-focus-lock)*: Focus trap.
- *[aria-hidden](https://github.com/theKashey/aria-hidden)*: Hides everything from accessibility tools except the specified element.
- *[body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)*: Disables scrolling for the body.
