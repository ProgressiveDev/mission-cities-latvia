const cookiesDom = () => document.getElementById('cookies');
const cookiesContent = () => document.querySelector('.cookies__text')

const sendButton = document.getElementById('send-email');
const form = document.querySelector('form');
const qs = (el) => document.querySelector(el);


form.addEventListener('submit',(e) => {
    console.log(e.target);
})
const xhr = new XMLHttpRequest();

sendButton.addEventListener('click',(e) => {
    e.preventDefault();
    cookiesDom().classList.add('hide')

    const formData = new FormData(form);

    xhr.open('POST','/api/send-email/index.php',true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 || xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
            cookiesDom().classList.remove('hide')
            cookiesContent().innerHTML = `Message sent.`
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
            cookiesDom().classList.remove('hide')
            cookiesContent().innerHTML = `Couldn't send your message. Please try again.`
        }
    }

    xhr.send(formData);
})