export default class MyFooter extends HTMLElement {
  constructor() {
    super();
    const ul = document.createElement('ul'),
      li1 = document.createElement('li'),
      li2 = document.createElement('li'),
      li3 = document.createElement('li'),
      a1 = document.createElement('a'),
      ltext = this.getAttribute('ltext'),
      llink = this.getAttribute('llink');
    li1.textContent = "Cuicui";
    li2.textContent = "Face de chèvre";
    a1.textContent = ltext;
    a1.setAttribute('href', llink);
    this.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    li3.appendChild(a1)
  }
}
customElements.define('my-footer', MyFooter);