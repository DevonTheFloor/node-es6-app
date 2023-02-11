export default class OnlyOne extends HTMLElement {
  constructor() {
    super();
    const div = document.createElement('div'),
      h2 = document.createElement('h2');
    h2.textContent = "Only in Index page for demonstrated the way to use webcomponent in node.js application in ES module type";
    this.appendChild(div);
    div.appendChild(h2);
  }
}
customElements.define('only-one', OnlyOne);