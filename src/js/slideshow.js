const ssSlider = document.querySelector('.ss');
const ssBtns = document.querySelectorAll('.ss-btn');
const ss = [...document.querySelectorAll('.ss')];
const indicators = [...document.querySelectorAll('.indicator')];
let isMoving;
let currentIndex = 1;

function showActiveIndicator() {
    indicators.forEach(ind => ind.classList.remove('active'));
    let activeIndicator;
    if (currentIndex === 0 || currentIndex === ss.length - 2) {
        activeIndicator = indicators.length - 1;
    } else if (currentIndex === ss.length - 1 || currentIndex === 1) {
        activeIndicator = 0;
    } else {
        activeIndicator = currentIndex - 1;
    }
    indicators[activeIndicator].classList.add('active');
}

function moveSlider() {
    ssSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    showActiveIndicator();
};

function handleReviewBtnClick(e) {
    if (isMoving) { return };
    isMoving = true;
    e.currentTarget.id === 'next'
        ? currentIndex++
        : currentIndex--;
    moveSlider();
}

function handleIndicatorClick(e) {
    if (isMoving) { return };
    isMoving = true;
    currentIndex = indicators.indexOf(e.target) + 1;
    moveSlider();
}

// Event Listeners
ssBtns.forEach(btn => {
    btn.addEventListener('click', handlessBtnClick);
})

indicators.forEach(ind => {
    ind.addEventListener('click', handleIndicatorClick);
})

ssSlider.addEventListener('transitionend', () => {
    isMoving = false;
    if (currentIndex === 0) {
        currentIndex = ss.length - 2;
        ssSlider.style.transitionDuration = '1ms';
        return moveSlider();
    }
    if (currentIndex === ss.length - 1) {
        currentIndex = 1;
        ssSlider.style.transitionDuration = '1ms';
        return moveSlider();
    }
    ssSlider.style.transitionDuration = '300ms';
})