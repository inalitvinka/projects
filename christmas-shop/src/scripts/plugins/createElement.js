const createElement = (tag, css, data, text) => {
  const element = document.createElement(tag);
  if (css) element.className = css;
  if (data) element.setAttribute(data, name);
  if (text) element.textContent = text;
  return element;
}
export default createElement;
