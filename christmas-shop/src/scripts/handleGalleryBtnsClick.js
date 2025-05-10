import createCardsGallery from "./createCardsGallery";

const handleGalleryBtnsClick = () => {
  const GALLERY_BTNS = document.querySelectorAll('.gifts-button');
  const GALLERY = document.getElementById('gallery');
  GALLERY_BTNS.forEach(item => {
    item.addEventListener('click', event => {
      GALLERY.classList.add("hidden");
      GALLERY_BTNS.forEach(item => {
        item.disabled = false;
      })
      item.disabled = true;
      setTimeout(() => GALLERY.classList.remove("hidden"), 1000);
      setTimeout(() => createCardsGallery(event.target.dataset.button), 500);
    })
  })
}
export default handleGalleryBtnsClick;
