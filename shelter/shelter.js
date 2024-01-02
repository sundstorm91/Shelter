
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
    /* console.log(event._isClickWithInMenu) */
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

/* new carousel */
const arrayPets = [
    {
      "@class": "pets__card card__jennifer",
      "img": {
        "@src": "..//pets/assets/img/pets-jennifer.png",
        "@alt": "jennifer-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Jennifer"
      },
      "button": {
        "@class": "pets__button button-jennifer",
        "#text": "Learn more"
      }
    },

    {
      "@class": "pets__card card__katrine",
      "img": {
        "@src": "..//pets/assets/img/pets-katrine.png",
        "@alt": "katrine-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Katrine"
      },
      "button": {
        "@class": "pets__button button-katrine",
        "#text": "Learn more"
      }
    },
    {
      "@class": "pets__card card__woody",
      "img": {
        "@src": "..//pets/assets/img/pets-woody.png",
        "@alt": "woody-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Woody"
      },
      "button": {
        "@class": "pets__button button-woody",
        "#text": "Learn more"
      }
    },
    {
      "@class": "pets__card card__sophia",
      "img": {
        "@src": "..//pets/assets/img/sophia.png",
        "@alt": "sophia-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Sophia"
      },
      "button": {
        "@class": "pets__button button-sophia",
        "#text": "Learn more"
      }
    },

    {
      "@class": "pets__card card__charly",
      "img": {
        "@src": "..//pets/assets/img/pets-charly.png",
        "@alt": "charly-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Charly"
      },
      "button": {
        "@class": "pets__button button-charly",
        "#text": "Learn more"
      }
    },
    {
      "@class": "pets__card card__scarlett",
      "img": {
        "@src": "..//pets/assets/img/pets-scarlet.png",
        "@alt": "scarlett-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Scarlett"
      },
      "button": {
        "@class": "pets__button button-scarlett",
        "#text": "Learn more"
      }
    },
    {
      "@class": "pets__card card__timmy",
      "img": {
        "@src": "..//pets/assets/img/pets-timmy.png",
        "@alt": "timmy-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Timmy"
      },
      "button": {
        "@class": "pets__button button-timmy",
        "#text": "Learn more"
      }
    },
    {
      "@class": "pets__card card__freddie",
      "img": {
        "@src": "..//pets/assets/img/freddie.png",
        "@alt": "freddie-logo",
        "@class": "pets__logo"
      },
      "span": {
        "@class": "pets__name",
        "#text": "Freddie"
      },
      "button": {
        "@class": "pets__button button-freddie",
        "#text": "Learn more"
      }
    },
]

const carousel = document.querySelector('.carousel');

/* Учет отступов для каруселя */
const marginLeftCarousel = window.getComputedStyle(carousel).marginLeft
const calcWidth = parseInt(marginLeftCarousel)
/* end */

let firstCardWidth = carousel.querySelector('.pets__card').offsetWidth + calcWidth + 137; /* 137px расстояние /2 до следующей карточки */

console.log(firstCardWidth)
const wrapper = document.querySelector ('.carousel__wrapper');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

const carouselChild = [...carousel.children]


/* false, undef  undef undef undef */
let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth)

console.log(firstCardWidth)

carouselChild.slice(-cardPreview).reverse().forEach((card)=> {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
})

carouselChild.slice(0, cardPreview).forEach((card)=> {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML)
})


leftButton.addEventListener('click', () => {
    carousel.scrollLeft -= firstCardWidth

  if (carousel.scrollLeft == '0') {
    carousel.classList.add('no-transition')
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
  }

  carousel.classList.remove('no-transition')

})

console.log(carousel.scrollLeft)

rightButton.addEventListener('click', () => {
  console.log(carousel.scrollLeft)
    /* carousel.scrollLeft = carousel.scrollLeft + firstCardWidth; */
    carousel.scrollLeft += firstCardWidth
    if (Math.ceil(carousel.scrollLeft) > carousel.scrollWidth - carousel.offsetWidth - 511) {
      carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth
      }
      carousel.classList.remove('no-transition')
})


let autoPlay = () => setTimeout(function tick () {
  carousel.scrollLeft += firstCardWidth, 2000;
  autoPlay = setTimeout(tick, 2000)
          /* infinite scroll */
  if (Math.ceil(carousel.scrollLeft) > carousel.scrollWidth - carousel.offsetWidth - 511) {
    carousel.classList.add('no-transition')
      carousel.scrollLeft = carousel.offsetWidth
    }
    carousel.classList.remove('no-transition')

})


if (!wrapper.matches(':hover')){
    autoPlay()
}



wrapper.addEventListener('mouseenter', () => clearTimeout(autoPlay))
wrapper.addEventListener('mouseleave', autoPlay)


