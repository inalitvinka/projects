const modalCounter = () => {
    const sizeTabs = document.querySelectorAll('.modal-tab__size');
    const addTabs = document.querySelectorAll('.modal-tab__add ');
    const TOTAL = document.querySelector('[data-total]');
    let init = +TOTAL.dataset.total;
    const getTotal = () => [...document.querySelectorAll('.modal-tab__active')].reduce((acc, item) => acc + +item.dataset.addprice, init);
    sizeTabs.forEach((item, index) => item.addEventListener('click', event => {
        sizeTabs.forEach(item => {
            item.classList.remove('modal-tab__active');
        })
        item.classList.add('modal-tab__active');
        TOTAL.innerHTML = `$${getTotal().toFixed(2)}`;
    }))
    addTabs.forEach(item => item.addEventListener('click', event => {
        item.classList.toggle('modal-tab__active');
        TOTAL.innerHTML = `$${getTotal().toFixed(2)}`;
    }))
}

export default modalCounter;