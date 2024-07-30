export function createElement(tag, attributes = {}, innerHTML = '') {
  const element = document.createElement(tag);
  for (let attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  element.innerHTML = innerHTML;
  return element;
}
