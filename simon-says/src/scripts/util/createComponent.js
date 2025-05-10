function createElement(options) {
  const { tag = 'div', classes = [], textContent = '', children = [], attribute = [] } = options;
  const element = document.createElement(tag);
  if (textContent) {
    element.textContent = textContent;
  }
  if (attribute.length) {
    const [key, value] = attribute;
    element.setAttribute(key, value)
  }
  if (classes.length) {
    element.classList.add(...classes);
  }
  if (children.length) {
    element.append(...children);
  }
  return element;
}
export default createElement
