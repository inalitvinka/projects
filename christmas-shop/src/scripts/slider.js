const slider = () => {
  const PREV = document.getElementById('left');
  const NEXT = document.getElementById('right');
  const WRAPPER = document.getElementById('slider-wrapper');
  const SLIDER = document.getElementById('slider');

  let counter = 0;
  let position = 0;
  const totalWidth = 1993;
  const pivotWidth = 768.9;
  const desktopMaxClicks = 3;
  const mobileMaxClicks = 6;
  const clicksCounter = () => window.innerWidth > pivotWidth ? desktopMaxClicks : mobileMaxClicks;
  const move = () => Math.floor((totalWidth - SLIDER.offsetWidth + (WRAPPER.offsetWidth - SLIDER.offsetWidth)) / clicksCounter());
  
  const checkButtons = () => {
    if (counter < clicksCounter()) NEXT.classList.remove('slider-button_inactive');
    if (counter === clicksCounter()) NEXT.classList.add('slider-button_inactive');
    if (counter > 0) PREV.classList.remove('slider-button_inactive');
    if (counter === 0) PREV.classList.add('slider-button_inactive');
  }
  const moveSlider = () => SLIDER.style.left = `${-position}px`;
  NEXT.addEventListener('click', () => {
    counter++;
    position += move();
    moveSlider();
    checkButtons();
  })
  PREV.addEventListener('click', () => {
    counter--;
    position -= move();
    moveSlider();
    checkButtons();
  })
  checkButtons();
  window.addEventListener("resize", () => {
    position = 0;
    counter = 0;
    moveSlider();
    checkButtons();
  });
}
export default slider;
