import sizeListener from "./sizeListener";
import createMenuPage from "./plugins/menu";

const TABS = document.querySelectorAll('div.menu-tab');
const MENU = document.getElementById('menu');
const changeMenu = () => {
    TABS.forEach(item => item.addEventListener('click', event => {
        document.getElementById('menu').classList.add("menu-hidden");
        TABS.forEach(item => {
            item.classList.remove('menu-tab__active');
        })
        item.classList.add('menu-tab__active');
        setTimeout(() => document.getElementById('menu').classList.remove("menu-hidden"), 1000);
        setTimeout(() => createMenuPage(event.target.dataset.tab), 500);
        setTimeout(() => sizeListener(), 1100);
    }))
}

export default changeMenu;