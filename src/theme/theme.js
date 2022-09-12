import { css, unsafeCSS } from 'lit';
import {
  setDocumentStyles,
  setComponentSharedStyles,
} from '@blockquote-web-components/blockquote-base-style-helpers';
import { fontFace } from './theme-font-face.js';
import { tertiary0, tertiary1, tertiary2, neutral } from './theme-base.js';

setComponentSharedStyles(
  'theme-tokens-shared-styles',
  css`
    :host {
      background-color: #e7e7e7;
    }
  `,
);

export const theme = {
  colors: {
    ...tertiary0,
    ...tertiary1,
    ...tertiary2,
    ...neutral,
  },
  fontFace: {
    ...fontFace,
  },
  fonts: {
    main: 'Kaisei HarunoUmi, serif',
  },
};

const THEME = `
:root {
  --red-300: ${theme.colors['--red-300']};
  --red-400: ${theme.colors['--red-400']};
  --red-500: ${theme.colors['--red-500']};
  --red-600: ${theme.colors['--red-600']};
  --red-700: ${theme.colors['--red-700']};

  --green-300: ${theme.colors['--green-300']};
  --green-400: ${theme.colors['--green-400']};
  --green-500: ${theme.colors['--green-500']};
  --green-600: ${theme.colors['--green-600']};
  --green-700: ${theme.colors['--green-700']};

  --blue-300: ${theme.colors['--blue-300']};
  --blue-400: ${theme.colors['--blue-400']};
  --blue-500: ${theme.colors['--blue-500']};
  --blue-600: ${theme.colors['--blue-600']};
  --blue-700: ${theme.colors['--blue-700']};

  --neutral-300: ${theme.colors['--neutral-300']};
  --neutral-400: ${theme.colors['--neutral-400']};
  --neutral-500: ${theme.colors['--neutral-500']};
  --neutral-600: ${theme.colors['--neutral-600']};
  --neutral-700: ${theme.colors['--neutral-700']};

  font: normal medium/1.25 sans-serif;

}`;

/* Two call (setDocumentStyles) -> To preserve any existing StyleSheets added via adoptedStyleSheets, we can use concat to create a new array that includes the existing sheets as well as additional ones to add */
setDocumentStyles(css`
  ${unsafeCSS(theme.fontFace.main)}
`);

setDocumentStyles(css`
  ${unsafeCSS(THEME)}
`);
