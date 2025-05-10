const showMenu = () => {
  const BURGER = document.querySelector('.header-burger');
  const NAV = document.querySelector('.nav');
  const NAV_LIST = document.querySelectorAll('.nav-link');
  const BODY = document.querySelector('body');

  let clickedLink;
  
  const toggleMenu = () => {
    NAV.classList.add('nav-start');
    if (!NAV.classList.contains('nav-open')) window.scrollTo({
      top: 0,
      left: 0,
    });
    NAV.classList.toggle('nav-open');
    BURGER.classList.toggle('open');
    BODY.classList.toggle('lock');
  }
  const clickOnTheLink = event => {
    if (event.animationName === 'burger-close' && clickedLink) {
      if (!clickedLink.classList.contains('li-active')) clickedLink.click();
    }
  }
  const clickHandler = (event, clickedElement) => {
    if (event.isTrusted) event.preventDefault();
    if (window.innerWidth <= 768) {
      toggleMenu();
      clickedLink = clickedElement;
    } else {
      clickedElement.click();
    }
  }
  BURGER.addEventListener('click', toggleMenu);
  document.addEventListener('click', event => {
    if (NAV.classList.contains('nav-open') && event.target.classList.contains('li-active')
      || NAV.classList.contains('nav-open') && !BURGER.contains(event.target) && !event.target.classList.contains('nav-list')) {
      toggleMenu();
    }
  });
  NAV_LIST.forEach(item => item.addEventListener('click', event => clickHandler(event, item)));
  NAV.addEventListener('animationend', event => clickOnTheLink(event));
  window.addEventListener("resize", () => {
    if (NAV.classList.contains('nav-open') && window.innerWidth > 768) {
      toggleMenu();
    }
  });
}
export default showMenu;
