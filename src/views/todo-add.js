import { LitElement, html } from 'lit-element';

export class TodoAdd extends LitElement {
  render() {
    return html`
      <p>todo-add</p>
    `;
  }
}

customElements.define('todo-add', TodoAdd);
