const showMenu = () => {
    const body = document.body;
    const navList = document.querySelector('.nav');
    const link = document.querySelectorAll('.nav-link'); 
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.header-burger'); 
  
    const rotateBurger = () => burger.classList.toggle('open');
    const showNav = () => {
      navList.classList.toggle('open');
      body.classList.toggle('lock');
    };
    const closeNav = () => {
      navList.classList.remove('open');
      burger.classList.remove('open');
      body.classList.remove('lock');
    };
    burger.addEventListener('click', () => {
      showNav(); 
      rotateBurger();
    });
    link.forEach(item => item.addEventListener('click', closeNav));
    nav.addEventListener('click', closeNav);
  };

  export default showMenu;