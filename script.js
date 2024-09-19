const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('section');
let currentIndex = 0;

function setPositionByIndex() {
    const translateValue = currentIndex * -window.innerWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
}

function handleScroll(event) {
    const delta = event.deltaY || event.detail || event.wheelDelta;

    if (delta > 0) {
        // Scrolling down
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            setPositionByIndex();
        }
    } else {
        // Scrolling up
        if (currentIndex > 0) {
            currentIndex--;
            setPositionByIndex();
        }
    }
}

// Listen for scroll events
window.addEventListener('wheel', handleScroll, { passive: true });
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        // Scroll down or right
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            setPositionByIndex();
        }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        // Scroll up or left
        if (currentIndex > 0) {
            currentIndex--;
            setPositionByIndex();
        }
    }
});

// Set the initial position on load
window.onload = setPositionByIndex;

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


window.onscroll = function() {
    const scrollProgress = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollProgress + "%";
};

