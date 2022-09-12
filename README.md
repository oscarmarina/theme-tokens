# Define reusable design tokens - [Lit](https://lit.dev/)

Lit provide a perfect API, [adoptStyles](https://lit.dev/docs/api/styles/#adoptStyles) & [css](https://lit.dev/docs/api/styles/#css) for Built-in support Theming and managing tokens for a design system.

The last step in the Built-in theme support creation is to [provide the CSS variables to be able to inherit, lit.dev theming](https://lit.dev/docs/components/styles/#theming)

> But the function `adoptStyles` does not preserve any existing StyleSheets added via adoptedStyleSheets.
>
> - [preserveExisting option to adoptStyles](https://github.com/lit/lit/pull/3061)

---

## Example: - Themable component

- [adoptStyles with concat()](https://github.com/oscarmarina/theme-tokens/blob/main/src/setDocumentStyles.js#L16)

#### `setDocumentStyles` function calls `adoptStyles` using `document node` instead of `shadow root`

```js
const renderDocumentRoot = supportsAdoptingStyleSheets ? document : document.head;

export const setDocumentStyles = styles => {
  adoptStyles(renderDocumentRoot, [styles]);
};
```

---

### 1. From tokens to CSS variables

```js
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
```

#### 2. Styles are injected in document, adoptedStyleSheets, or inside `<style>` tags in the document's `<head>`

```js
/* Two call (setDocumentStyles) preserves any existing StyleSheets added via adoptedStyleSheets */

setDocumentStyles(css`
  ${unsafeCSS(theme.fontFace.root)}
`);

setDocumentStyles(css`
  ${unsafeCSS(THEME)}
`);
```

#### 3. Themable component

ThemeTokens-styles.js

```js
// CSS var fallback from the same theme just a source of truth
import { css, unsafeCSS } from 'lit';
import { theme } from '../theme/theme.js';

export default css`
  :host {
    display: block;
    color: var(--neutral-600, ${unsafeCSS(theme.colors['--neutral-600'])});
  }
`;
```

![lit-adoptStyles-theme](https://raw.githubusercontent.com/oscarmarina/theme-tokens/main/lit-adoptStyles-theme.png)

```html
<html lang="en">
  <head>
    <title>Demo theme-tokens</title>
    <style>
      :root {
        --red-300: #e57373;
        --red-400: #ef5350;
        --red-500: #f44336;
        --red-600: #e53935;
        --red-700: #c04545;

        --green-300: #aed581;
        --green-400: #9ccc65;
        --green-500: #8bc34a;
        --green-600: #7cb342;
        --green-700: #689f38;

        --blue-300: #0081f1;
        --blue-400: #006adc;
        --blue-500: #10243e;
        --blue-600: #0f1b2d;
        --blue-700: #0f1720;

        --neutral-300: #fcfcfc;
        --neutral-400: #ededed;
        --neutral-500: #dbdbdb;
        --neutral-600: #323232;
        --neutral-700: #171717;

        font: normal medium/1.25 sans-serif;
      }
    </style>
  </head>
  ...
</html>
```

---

## Demo an Repo

- [stackblitz](https://stackblitz.com/github/oscarmarina/theme-tokens)

- [GitHub](https://github.com/oscarmarina/theme-tokens)

```js
npm i && npm start
```

Scripts:

```js
"start": "npm run vite",
"dev:vite": "vite build",
"preview:vite": "vite preview",
```

> [Web Component with Lit - Scaffolding](https://github.com/oscarmarina/create-wc)
