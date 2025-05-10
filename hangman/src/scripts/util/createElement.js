const createElement = (tag, css, src, alt) => {
  const element = document.createElement(tag);
  if (css) element.className = css;
  if (src) element.src = src;
  if (alt) element.alt = alt;
  return element;
}
export default createElement;
