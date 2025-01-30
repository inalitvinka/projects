const slider = () => {
    const BTN_LEFT =  document.getElementById('btn-left');
    const BTN_RIGHT = document.getElementById('btn-right');
    const SLIDER = document.getElementById('slider-content');
    const PROGRESS_LINES = document.querySelectorAll('.slider-progress__line');
    const ITEMS = document.querySelectorAll('.slider-item');
    
    const initProgress = () => {
        SLIDER.addEventListener('contextmenu', event => event.preventDefault());
        PROGRESS_LINES[0].classList.add('slider-progress__activeline');
    }
    initProgress();

    const DELAY_TIME = 5000;
    let position = 0;
    const createSlider = () => {
        if (ITEMS) {
            ITEMS.forEach((_, index) => {
                let currentSlide = ITEMS[index];
                let activeProgressLine = PROGRESS_LINES[index];
                currentSlide.style.transform = `translateX(${-(position * ITEMS[0].offsetWidth)}px`;
                if (position === index) activeProgressLine.classList.add("slider-progress__activeline");
                else activeProgressLine.classList.remove("slider-progress__activeline");
            })
        }
    }
    const moveRight = () => {
        position = ++position;
        if (position === ITEMS.length) position = 0;
        createSlider();
        restartSlider();
    }
    const moveLeft = () => {
        position = (--position + ITEMS.length) % ITEMS.length;
        createSlider();
        restartSlider();
    }
    if (BTN_LEFT) BTN_LEFT.addEventListener('click', moveLeft);
    if (BTN_RIGHT) BTN_RIGHT.addEventListener('click', moveRight);

    // setInterval
    let interval;
    function startSlider() {
        interval = setInterval(() => moveRight(), DELAY_TIME);
    }
    function stopSlider() {
        clearInterval(interval);
    }
    function restartSlider() {
        clearInterval(interval);
        startSlider();
        startProgress();
    }
    function stopProgress() {
        PROGRESS_LINES[position].style.animationPlayState = 'paused';
    }
    function startProgress() {
        PROGRESS_LINES[position].style.animationPlayState = 'running';
    }
    if (SLIDER) SLIDER.addEventListener("mouseleave", () => {
        startSlider();
        startProgress();
    });
    if (SLIDER) SLIDER.addEventListener("mouseenter", () => {
        stopSlider();
        stopProgress();
    });
    startSlider();

    // TO SWIPE
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event) {
        event.preventDefault();
        touchStartX = event.touches[0].clientX;
      }
    
      function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
      }
    
      function handleSwipe() {
        const SWIPE_THRESHOLD = 50;
        if (touchEndX < touchStartX - SWIPE_THRESHOLD) {
            moveRight();
        } 
        if (touchEndX > touchStartX + SWIPE_THRESHOLD) {
            moveLeft();
        }
      }
    
      ITEMS.forEach(item => {
        item.addEventListener("touchstart", event => {
            handleTouchStart(event);
            stopSlider();
            stopProgress();
        });
        item.addEventListener("touchend", event => {
            handleTouchEnd(event);
            restartSlider()
            startProgress();
        });
      });
};
    
export default slider;