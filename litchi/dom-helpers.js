/**
 * Helper for all DOM node creation or selection,alway start and finish by lower case
 * @param {HTMLElement} tag 
 * @returns 
 */

export function dCrEl(tag) {
    return document.createElement(tag)
  }
    
  export function dGEBId(id) {
    return document.getElementById(id)
  }
    
  export function dQSr(tag) {
    return document.querySelector(tag)
  }
    
  export function dQSAl(tag) {
    return document.querySelectorAll(tag)
  }
    
  export function dGEBCNa(name) {
    return document.getElementsByClassName(name)
  }
  
  export function dGEBNa(name) {
    return document.getElementsByName(name)
  }
    
  export function isAdHl(from, where, tag) {
    return from.insertAdjacentHTML(where, tag)
  }
  export function dGEBTgNa(tag) {
    return document.getElementByTagName(tag)
  }
  /**
   * For get elements by class name from one point
   * @param {HTMLElement} from html tag from how start the html collection 
   * @param {String} className class of the element to select
   * @returns HTMLCollection
   */
  export function gtEBCNa(from, className) {
    return from.getElementsByClassName(className);
  }
  /**
   * Helper for add click event handler on an element
   * @param {Object} elmt elemnt where attached the event
   * @param {Function} cb the call back function
   */
  export function clickEvent(elmt, cb) {
    elmt.addEventListener('click', ()=>cb());
  }