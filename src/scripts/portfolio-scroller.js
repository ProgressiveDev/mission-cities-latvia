const scrollersDomList = document.querySelectorAll('[data-scroller-container]')
const scrollers = [];

class Scroller {
    constructor(scroller,navControlNext,navControlPrev,scrollGap) {
        this.scroller = scroller;
        this.navControlNext = navControlNext;
        this.navControlPrev = navControlPrev;
        this.scrollGap = scrollGap
        this.setListeners()
    }

    setListeners() {
        this.navControlNext.addEventListener('click',() => {
            this.scroller.scrollLeft += this.scroller.querySelector('img').clientWidth * 2 + this.scrollGap
        })
        this.navControlPrev.addEventListener('click',() => {
            this.scroller.scrollLeft -= this.scroller.querySelector('img').clientWidth * 2 + this.scrollGap
        })
    }

}

scrollersDomList.forEach((scroller) => {
    scrollers.push(
        new Scroller(
            scroller.querySelector('[data-scroller]'),
            scroller.querySelector('[data-slider-next]'),
            scroller.querySelector('[data-slider-prev]'),
            104
        )
    )
})

