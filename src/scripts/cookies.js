const cookiesDom = () => document.getElementById('cookies');
const cookiesLink = () => document.querySelector('#cookies a');
const cookiesContent = () => document.querySelector('.cookies__text')

const handleCookieClick = () => {
    localStorage.setItem('cookiesDismissed',true)
    cookiesDom().classList.add('hide')
}

const cookiesInit = () => {
    if (localStorage.getItem('cookiesDismissed')) {
        cookiesDom().classList.add('hide')
    }
    cookiesContent().innerHTML = `This site uses cookies.
        Some of them are essential while others are
        used to serve you a customized experience.`
    cookiesLink().addEventListener('click',handleCookieClick)
}


document.addEventListener(
    'DOMContentLoaded',
    cookiesInit,
    false
);
