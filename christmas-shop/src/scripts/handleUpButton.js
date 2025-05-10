const handleUpButton = () => {
  const UP_BUTTON = document.getElementById('upbutton');
  const PIVOT_SCROLL = 300;
  const PIVOT_WIDTH = 768.9;
  const upBtnHandler = () => {
    if (document.documentElement.scrollTop >= PIVOT_SCROLL 
      && window.innerWidth <= PIVOT_WIDTH 
      && !document.querySelector('.nav').classList.contains('open')) {
      UP_BUTTON.style.display = 'block';
    } else {
      UP_BUTTON.style.display = 'none';
    }
  }
  window.addEventListener("resize", upBtnHandler)
  window.addEventListener('scroll', upBtnHandler)
}
export default handleUpButton;
