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


/* ======================================================= */

/* katrine */
document.querySelector('.button-katrine').addEventListener('click', function() {
    document.querySelector('.modal-katrine').classList.add('open');
})

document.querySelector('.exit__button-katrine').addEventListener('click', function () {
    document.querySelector('.modal-katrine').classList.remove('open')
})

/* jennifer */
document.querySelector('.button-jennifer').addEventListener('click', function() {
    document.querySelector('.modal-jennifer').classList.add('open');
})

document.querySelector('.exit__button-jennifer').addEventListener('click', function () {
    document.querySelector('.modal-jennifer').classList.remove('open');
})

/* woody */
document.querySelector('.button-woody').addEventListener('click', function() {
    document.querySelector('.modal-woody').classList.add('open');
})

document.querySelector('.exit__button-woody').addEventListener('click', function () {
    document.querySelector('.modal-woody').classList.remove('open');
})

/* sophia */
document.querySelector('.button-sophia').addEventListener('click', function() {
    document.querySelector('.modal-sophia').classList.add('open');
})

document.querySelector('.exit__button-sophia').addEventListener('click', function () {
    document.querySelector('.modal-sophia').classList.remove('open');
})

/* timmy */
document.querySelector('.button-timmy').addEventListener('click', function() {
    document.querySelector('.modal-timmy').classList.add('open');
})

document.querySelector('.exit__button-timmy').addEventListener('click', function () {
    document.querySelector('.modal-timmy').classList.remove('open');
})

/* charly */
document.querySelector('.button-charly').addEventListener('click', function() {
    document.querySelector('.modal-charly').classList.add('open');
})

document.querySelector('.exit__button-charly').addEventListener('click', function () {
    document.querySelector('.modal-charly').classList.remove('open');
})

/* sophia */
document.querySelector('.button-scarlett').addEventListener('click', function() {
    document.querySelector('.modal-scarlett').classList.add('open');
})

document.querySelector('.exit__button-scarlett').addEventListener('click', function () {
    document.querySelector('.modal-scarlett').classList.remove('open');
})

/* scarlett */
document.querySelector('.button-sophia').addEventListener('click', function() {
    document.querySelector('.modal-sophia').classList.add('open');
})

document.querySelector('.exit__button-sophia').addEventListener('click', function () {
    document.querySelector('.modal-sophia').classList.remove('open');
})

/* freddie*/
document.querySelector('.button-freddie').addEventListener('click', function() {
    document.querySelector('.modal-freddie').classList.add('open');
})

document.querySelector('.exit__button-freddie').addEventListener('click', function () {
    document.querySelector('.modal-freddie').classList.remove('open');
})





