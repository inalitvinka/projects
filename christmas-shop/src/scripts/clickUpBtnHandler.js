const clickUpButtonHandler = () => {
  document.getElementById('upbutton').addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  });   
}
export default clickUpButtonHandler;
