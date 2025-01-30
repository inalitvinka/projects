const LOADER = document.getElementById('loader'); 

export const showHiddenCards = () => document.querySelectorAll('div.gallery-card').forEach(item => item.style.display = "block");
export const removeLoader = () => LOADER.classList.remove('flex');