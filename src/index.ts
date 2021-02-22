import {
  disableBodyScroll,
  enableBodyScroll,
  BodyScrollOptions,
} from 'body-scroll-lock';
import focusLock from 'dom-focus-lock';
import { hideOthers } from 'aria-hidden';

export { clearAllBodyScrollLocks } from 'body-scroll-lock';

export interface SvelteFocusOnOptions extends BodyScrollOptions {
  parent?: HTMLElement;
}

export function useFocusOn(options?: SvelteFocusOnOptions) {
  const { parent, ...bodyScrollOptions } = options ?? {};
  return function focusOn(element: HTMLElement) {
    focusLock.on(element);
    disableBodyScroll(element, bodyScrollOptions);
    const undo = hideOthers(element, parent);

    return {
      destroy() {
        focusLock.off(element);
        enableBodyScroll(element);
        undo();
      },
    };
  };
}
