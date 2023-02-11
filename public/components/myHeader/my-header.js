export default class MyHeader extends HTMLElement {
  constructor() {
    super();
    const header = document.createElement('header'),
      h1 = document.createElement('h1'),
      titre = this.getAttribute('titre');
    h1.textContent = titre;
    this.appendChild(header);
    header.appendChild(h1);
  }
}
customElements.define('my-header', MyHeader);