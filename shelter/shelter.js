
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById ("burger").addEventListener("click", function(){
        /* document.body.classList.toggle('_lock'); */
        document.querySelector('.header').classList.toggle('open')
    });
});

document.querySelector('.menu').addEventListener('click', event => {
    console.log(event._isClickWithInMenu)
    event._isClickWithInMenu = true;
});
document.getElementById('burger').addEventListener('click', event => {
    console.log(event._isClickWithInMenu)
    event._isClickWithInMenu = true;
});


document.body.addEventListener('click', event => {
    console.log(event._isClickWithInMenu)
    if (event._isClickWithInMenu) {
        return
    }
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

/* slider */


const slidePrev = document.querySelector('.arrow__left');
const slideNext = document.querySelector('.arrow__right');
let cardContainer = document.querySelector('.card__container');

let outSideValue = 0;
slidePrev.addEventListener('click', ()=> {
    slideNext.style.opacity = '1'
    slideNext.style.cursor = 'pointer'
    let localValue = 0

    if (localValue >= 0 && outSideValue >= 0) {
        localValue += 99
        outSideValue += localValue
        cardContainer.style.transform += `translateX(${localValue}%)`
        console.log('123')
        console.log(`prev ${outSideValue}`)
        slidePrev.style.opacity = '0'
        slidePrev.style.cursor = 'auto'

    } else if (outSideValue < 0){
        console.log('456')
        outSideValue += 106
        console.log(` else if - prev ${outSideValue}`)
        cardContainer.style.transform += "translateX(106%)"
    }

})

slideNext.addEventListener('click', ()=> {
    slidePrev.style.opacity = '1'
    slidePrev.style.cursor = 'pointer'
    let localValue = 0;
    if (localValue <= 0 && outSideValue <= 0) {
        cardContainer.style.transform += "translateX(-106%)"
        outSideValue -= 106
        slideNext.style.opacity = '0'
        slideNext.style.cursor = 'auto'
        console.log(`next ${outSideValue}`)
    } else if (outSideValue > 0) {
        outSideValue -= 99
        console.log(`else if next ${outSideValue}`)
        cardContainer.style.transform += "translateX(-99%)"
    }
})