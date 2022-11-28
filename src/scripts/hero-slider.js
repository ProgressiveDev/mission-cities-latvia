const hero = document.querySelector('#hero');
const heroSlides = document.querySelectorAll('.hero [data-slide]');
const sliderControlNext = document.querySelector('.hero [data-slider-next]');
const sliderControlPrev = document.querySelector('.hero [data-slider-prev]');
const slideWidth = heroSlides[0].clientWidth;
const slideMaxWidth = heroSlides.length * slideWidth;
let currentSlidePos = 0;

sliderControlPrev.style.opacity = '0.4'

const setSlideNext = () => {
    let newSliderScrollPos = currentSlidePos + slideWidth;
    if (newSliderScrollPos >= slideMaxWidth - slideWidth) {
        sliderControlNext.style.opacity = '0.4'
    }
    if (newSliderScrollPos >= slideMaxWidth) {
        return;

    }
    sliderControlPrev.style.opacity = '1'
    currentSlidePos = newSliderScrollPos;
    hero.scrollTo(currentSlidePos,0)
}

const setSlidePrev = () => {
    let newSliderScrollPos = currentSlidePos - slideWidth;
    if (newSliderScrollPos < slideWidth) {
        sliderControlPrev.style.opacity = '0.4'
    }
    if (newSliderScrollPos < 0) {
        return;
    }

    sliderControlNext.style.opacity = '1'
    currentSlidePos = newSliderScrollPos;
    hero.scrollTo(newSliderScrollPos,0);
}

sliderControlNext.addEventListener('click',() => {
    setSlideNext()
})
sliderControlPrev.addEventListener('click',() => {
    setSlidePrev()
})