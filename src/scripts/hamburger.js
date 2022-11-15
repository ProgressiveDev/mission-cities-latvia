const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link,i) => {
    link.addEventListener('click',() => {
        navLinks.forEach((l) => {
            l.classList.remove('active')
        })
        link.classList.add('active')
        hamburger.checked = false;
        nav.classList.remove('mobile')
    })
})

hamburger.addEventListener('change',() => {
    hamburger.checked ? nav.classList.add('mobile') : nav.classList.remove('mobile');
})


const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].boundingClientRect.y < 0) {
            document.getElementById('nav').classList.add('sticky')
        } else {
            document.getElementById('nav').classList.remove('sticky')
        }
    },
    {
        threshold: 1
    }
);
observer.observe(document.querySelector('#hero'));