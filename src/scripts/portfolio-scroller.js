const scrollersDomList = document.querySelectorAll('[data-scroller-container]')
const scrollers = [];

class Scroller {
    constructor(scroller,navControlNext,navControlPrev,scrollGap,scrollerContainer) {
        this.scroller = scroller;
        this.navControlNext = navControlNext;
        this.navControlPrev = navControlPrev;
        this.scrollGap = scrollGap;
        this.cardCount = this.scroller.querySelectorAll('.card').length
        this.scrollerContainer = scrollerContainer;
        this.setListeners()
    }

    setListeners() {
        this.navControlPrev.style.opacity = '0.4'
        this.navControlNext.addEventListener('click',() => {
            this.navControlPrev.style.opacity = '1'
            this.scroller.scrollLeft += this.scroller.querySelector('img').clientWidth + this.scrollGap
            setTimeout(() => {
                console.log(this.getScrollProgress().toFixed(0));
                if (this.getScrollProgress() >= 95) {
                    this.navControlNext.style.opacity = '0.4'
                }
            },400)
        })
        this.navControlPrev.addEventListener('click',() => {
            this.navControlNext.style.opacity = '1';
            this.scroller.scrollLeft -= this.scroller.querySelector('img').clientWidth + this.scrollGap;
            setTimeout(() => {
                if (this.getScrollProgress() <= 0) {
                    this.navControlPrev.style.opacity = '0.4'
                }
            },400)

        })
    }
    getScrollProgress() {
        return 100 * this.scroller.scrollLeft / (this.scroller.scrollWidth - this.scroller.clientWidth)
    }
}

scrollersDomList.forEach((scroller) => {
    scrollers.push(
        new Scroller(
            scroller.querySelector('[data-scroller]'),
            scroller.querySelector('[data-slider-next]'),
            scroller.querySelector('[data-slider-prev]'),
            52,
            scroller
        )
    )
})

