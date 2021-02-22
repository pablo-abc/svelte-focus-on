import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  BodyScrollOptions,
} from 'body-scroll-lock';
import focusLock from 'dom-focus-lock';
import { hideOthers } from 'aria-hidden';

export interface SvelteFocusOnOptions extends BodyScrollOptions {}

export function focusOn(element: HTMLElement, options?: SvelteFocusOnOptions) {
  focusLock.on(element);
  disableBodyScroll(element, options);
  const undo = hideOthers(element);

  return {
    destroy() {
      focusLock.off(element);
      clearAllBodyScrollLocks;
      undo();
    },
  };
}
