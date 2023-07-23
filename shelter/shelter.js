document.addEventListener("DOMContentLoaded", function () {
    document.getElementById ("burger").addEventListener("click", function(){
        /* document.body.classList.toggle('_lock'); */
        document.querySelector('.header').classList.toggle('open')

    });
});

document.querySelector('.menu').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return
    /* ! */
    document.querySelector('.header').classList.remove('open')
    /* document.body.classList.remove('_lock') */
});


/* modal-content */

/* katrine */
document.querySelector('.button-katrine').addEventListener('click', function () {
    document.querySelector('.modal-katrine').classList.add('open')
})

document.querySelector('.exit__button-katrine').addEventListener('click', function () {
    document.querySelector('.modal-katrine').classList.remove('open');
})

/* jenn */
document.querySelector('.button-jennifer').addEventListener('click', function () {
    document.querySelector('.modal-jennifer').classList.add('open')
})

document.querySelector('.exit__button-jennifer').addEventListener('click', function () {
    document.querySelector('.modal-jennifer').classList.remove('open');
})

/* woody */
document.querySelector('.button-woody').addEventListener('click', function () {
    document.querySelector('.modal-woody').classList.add('open')
})

document.querySelector('.exit__button-woody').addEventListener('click', function () {
    document.querySelector('.modal-woody').classList.remove('open');
})