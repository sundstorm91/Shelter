
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



/* pagination attempt */

const containerP = document.querySelector('.container-proba')
const proba = [
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

/* 16 */
  ]

  let currentPage = 1;
  let rows = 8;

  function renderList (rowPerPage, page) {
    console.log(`page-${page}, rows-${rowPerPage}`)
    page--;
    const start = rowPerPage * page;
    console.log(`start - ${start}`)
    const end  = start + rowPerPage;
    console.log(`end-  ${end}`)
    const paginatedData = proba.slice(start, end)
    console.log(paginatedData)
    console.log(proba.slice(0, 3))
    /* чтобы предыдущая удалялась */
    containerP.innerHTML = '';

    /* парсим */
    paginatedData.forEach((item) => {
      containerP.insertAdjacentHTML('afterbegin', `<div class="${item["@class"]}">
      <img src="${item.img['@src']}" alt="freddie-logo" class="${item.img['@class']}">
  <span class="${item.span['@class']}">${item.span[`#text`]}</span>
  <button class="${item.button['@class']}">${item.button['#text']}</button>
  </div>`)
    })

/* ! */



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
  }



  renderList(rows, currentPage)
  console.log(`currentPage = ${currentPage}`)


  const arrowLeft = document.querySelector('.arrow__left')
  const arrowRight = document.querySelector('.arrow__right')
  const paginationPage = document.querySelector('.pagination-page')
  const doubleLeft = document.querySelector('.arrow__left_double')
  const doubleRight = document.querySelector('.arrow__right_double')

  let pageCount = Math.ceil(proba.length / rows)
  console.log(pageCount)

  arrowRight.addEventListener('click', () => {

    if (currentPage < pageCount) {currentPage += 1}

    paginationPage.innerHTML = currentPage
    renderList(rows, currentPage)
    console.log(`currentPage = ${currentPage}`)
  })

  arrowLeft.addEventListener('click', () => {
    if (currentPage !== 1) {currentPage -= 1}

    paginationPage.innerHTML = currentPage
    renderList(rows, currentPage)
    console.log(`currentPage = ${currentPage}`)
  })

  doubleLeft.addEventListener('click', ()=> {
      currentPage = 1
      paginationPage.innerHTML = currentPage

      renderList(rows, currentPage)
  })

  doubleRight.addEventListener('click', ()=> {
    currentPage = pageCount
    paginationPage.innerHTML = currentPage

      renderList(rows, currentPage)
  })


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




/* proba */

function rend (rowPerPage, page) {
  console.log(`page-${page}, rows-${rowPerPage}`)
  page--;
  const start = rowPerPage * page;
  console.log(`start - ${start}`)
  const end  = start + rowPerPage;
  console.log(`end-  ${end}`)
  const paginatedData = proba.slice(start, end)
  console.log(paginatedData)
  console.log(proba.slice(0, 3))
  /* чтобы предыдущая удалялась */
  document.querySelector('.container-example').innerHTML = '';

  /* парсим */
  paginatedData.forEach((item) => {
    document.querySelector('.container-example').insertAdjacentHTML('afterbegin', `<div class="${item["@class"]}">
    <img src="${item.img['@src']}" alt="freddie-logo" class="${item.img['@class']}">
<span class="${item.span['@class']}">${item.span[`#text`]}</span>
<button class="${item.button['@class']}">${item.button['#text']}</button>
</div>`)
  })
}


const ulTag = document.querySelector('.pagination__example')
 let pagW = 1;
 let totalPages = 4;



function element (totalPages, pagW) {
  let activeLi = '';
  let liTag = '';

  let beforePages = pagW - 1;/* 5 - 1 = 4 */
  let afterPages = pagW + 1;/* 5 + 1 = 6 */

  /* + prev */
  if (pagW > 1) {/* если значение больше единицы то показываем предыдущую кнопку */
      liTag += `<li class="btn" onclick="element(totalPages, ${pagW - 1})">&lt;Prev</li>`
      console.log('123')
      rend(totalPages, pagW)
  }

  if(pagW > 2) {
    liTag += `<li class="n" onclick="element(totalPages, ${(totalPages+1) - totalPages})"><span>1</span></li>`
    if (pagW > 3) {
      liTag += `<li class="d"><span>...</span></li>`
    }
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {

    if (pageLength > totalPages) {
      console.log('245')
      continue;
    }


    if (pageLength == 0) {
      pageLength = pageLength + 1
    }




    if(pagW == pageLength) {/* если текущая страница = длинне строки, то тогда activeLI назначаем эктив */
      activeLi = 'active'
    } else {
      activeLi = '';
    }

      liTag += `<li class="n ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`
      /* console.log(liTag) */
  }

  if(pagW < totalPages - 1) {/*  */
    if (pagW < totalPages - 2) {
        liTag += `<li class="d"><span>...</span></li>`
      }


      liTag += `<li class="n" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`

  }

  /* +next */
  if (pagW < totalPages) {/* если текущая страница меньше последней страницы парсим next */
    liTag += `<li class="btn" onclick="element(totalPages, ${pagW + 1})">Next&gt;</li>`
  }

    ulTag.innerHTML = liTag
}


element(totalPages, pagW)
rend(totalPages, pagW)
