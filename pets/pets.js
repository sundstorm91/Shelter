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

/* pagination attempt */

const containerP = document.querySelector('.container-proba')

const proba = [
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
/* 30 */
  ]


console.log(proba)






  let currentPage = 1;
  let rows = 10;

  function renderList (rowPerPage, page) {
    const start = rowPerPage * page;
    const end  = start + rowPerPage;
    const paginatedData = proba.slice(start, end)
    containerP.innerHTML = '';
    page--;

    paginatedData.forEach((item) => {
      containerP.insertAdjacentHTML('afterbegin', `<div class="${item["@class"]}">
      <img src="${item.img['@src']}" alt="freddie-logo" class="${item.img['@class']}">
  <span class="${item.span['@class']}">${item.span[`#text`]}</span>
  <button class="${item.button['@class']}">${item.button['#text']}</button>
  </div>`)
    })
  }


  function displayPagination (arr, rowPerPage) {
    const paginationEl = document.querySelector('.pagination-proba')

    const pagesCount = Math.ceil(arr.length / rowPerPage)
    console.log(pagesCount)
    const ulEl = document.createElement('ul')
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = paginationButton (i + 1)
      ulEl.appendChild(liEl)
    }
    paginationEl.appendChild(ulEl)
  }


  function paginationButton (page) {
    const liEl = document.createElement('li')
    liEl.classList.add('pagination__item')
    liEl.innerText = page

    if (currentPage == page) {
      liEl.classList.add('pagination__item--active')
    }

    liEl.addEventListener('click', ()=>{
      currentPage = page
      renderList(rows, currentPage)

      let currentItemLi = document.querySelector('li.pagination__item--active')

      currentItemLi.classList.remove('pagination__item--active');

      liEl.classList.add('pagination__item--active');
    })
    return liEl
  }



  renderList(rows, currentPage)
  displayPagination(proba, rows)