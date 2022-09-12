import { css, unsafeCSS } from 'lit';
import { theme } from '../theme/theme.js';

export default css`
  :host {
    display: block;
    box-sizing: border-box;
    color: var(--neutral-600, ${unsafeCSS(theme.colors['--neutral-600'])});
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  button {
    -moz-osx-font-smoothing: inherit;
    -webkit-font-smoothing: inherit;
    -webkit-appearance: button;
    appearance: button;
    background-color: transparent;
    border-style: none;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    height: inherit;
    letter-spacing: inherit;
    line-height: normal;
    margin: 0;
    overflow: visible;
    padding: 0;
    text-align: inherit;
    text-decoration: none;
    text-shadow: inherit;
    text-transform: inherit;
    width: auto;
    word-spacing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: normal 700 2.2rem/1 ${unsafeCSS(theme.fonts.main)};
    word-spacing: 0.125rem;
    text-transform: uppercase;
    margin: 1rem 0 1.5rem 0;
  }

  button {
    font: inherit;
    color: var(--neutral-300, ${unsafeCSS(theme.colors['--neutral-300'])});
    background-color: var(--blue-300, ${unsafeCSS(theme.colors['--blue-300'])});
    padding: 0.5em 1.5em;
  }

  button:hover {
    background-color: var(--blue-400, ${unsafeCSS(theme.colors['--blue-400'])});
  }
  div {
    font-weight: 700;
    letter-spacing: 0.031rem;
    color: var(--red-700, ${unsafeCSS(theme.colors['--red-700'])});
    border-top: 0.063rem solid var(--neutral-500, ${unsafeCSS(theme.colors['--neutral-500'])});
    padding: 0.5em 0;
    margin-top: 1rem;
  }

  ::slotted(span) {
    color: var(--green-700, ${unsafeCSS(theme.colors['--green-700'])});
  }

  @media (min-width: 768px) {
    :host {
      color: var(--blue-400, ${unsafeCSS(theme.colors['--blue-400'])});
    }
  }
`;
