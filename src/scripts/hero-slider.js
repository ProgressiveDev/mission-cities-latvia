const heroSlides = document.querySelectorAll('#hero [data-slide]');
const sliderControlNext = document.querySelectorAll('#hero [data-slider-next]');
const sliderControlPrev = document.querySelectorAll('#hero [data-slider-prev]');

const startingSlideIdx = 0;
let currentSlideIdx = startingSlideIdx;
const slideCount = heroSlides.length

heroSlides.forEach((slide,i) => {
    if (i !== startingSlideIdx) {
        slide.classList.add('hide')
    }
})

const getNextSlide = () => {
    if (currentSlideIdx === slideCount) {
        return heroSlides.item(slideCount - 1);
    }
    return heroSlides.item(currentSlideIdx + 1);
}

const getPrevSlide = () => {
    if (currentSlideIdx === 0) {
        return heroSlides.item(0);
    }
    return heroSlides.item(currentSlideIdx - 1);
}

const setNextSlide = () => {
    const currentSlide = heroSlides.item(currentSlideIdx);
    if (currentSlideIdx < slideCount - 1) {
        currentSlide.classList.add('hide');
        getNextSlide().classList.remove('hide');
        currentSlideIdx++;
    }
}

const setPrevSlide = () => {
    const currentSlide = heroSlides.item(currentSlideIdx);
    currentSlide.classList.add('hide');
    getPrevSlide().classList.remove('hide');
    if (currentSlideIdx > 0) {
        currentSlideIdx--;
    }
}

sliderControlNext.forEach(control => {
    control.addEventListener('click',() => {
        setNextSlide();
    })
})
sliderControlPrev.forEach(control => {
    control.addEventListener('click',() => {
        setPrevSlide();
    })
})