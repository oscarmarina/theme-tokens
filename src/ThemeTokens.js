/* eslint-disable class-methods-use-this */
import { html, LitElement, css } from 'lit';
import { getComponentSharedStyles } from '@blockquote-web-components/blockquote-base-style-helpers';
import styles from './styles/ThemeTokens-styles.js';

const cardCSS = css`
  :host {
    padding: 0.5rem;
    width: calc(100% - 0.5rem);
    max-width: 40rem;
    border-radius: 0.5rem;
    box-shadow: rgb(93 93 93 / 22%) 0 6px 12px 3px;
  }
`;

export class ThemeTokens extends LitElement {
  static get is() {
    return 'theme-tokens';
  }

  static styles = [styles, getComponentSharedStyles('theme-tokens-shared-styles')];

  static finalizeStyles(getStyles) {
    return super.finalizeStyles([getStyles, cardCSS]);
  }

  static get properties() {
    return {
      /**
       * The heading to say "Hello" to.
       */
      heading: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.heading)}</h1>
      <button @click=${this._onClick}>Counter: ${this.counter}</button>
      <div><slot></slot></div>
    `;
  }

  _onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counter-changed', { detail: this.counter }));
  }

  /**
   * Formats a greeting
   * @param heading {string} The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
