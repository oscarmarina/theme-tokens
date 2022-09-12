/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import { supportsAdoptingStyleSheets /* adoptStyles */ } from 'lit';

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;

const renderDocumentRoot =
  /* c8 ignore next */
  supportsAdoptingStyleSheets ? document : document.head;

export const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    // https://github.com/lit/lit/issues/3010#issuecomment-1264113426
    renderRoot.adoptedStyleSheets = [
      ...renderRoot.adoptedStyleSheets,
      ...styles.map(s => (s instanceof CSSStyleSheet ? s : s.styleSheet)),
    ];
  } else {
    styles.forEach(s => {
      const style = document.createElement('style');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nonce = global['litNonce'];
      if (nonce !== undefined) {
        style.setAttribute('nonce', nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
  }
};

export const setDocumentStyles = styles => {
  adoptStyles(renderDocumentRoot, [styles]);
};
