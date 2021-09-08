/* ============= IMPORTING MODULES ============ */
import { setElement } from "/js/modules/settingFuncs.js";
import { startCarousel } from "/js/script/carousel.js";

/* ----------------- DEV MODE ----------------- */
function callDevModule() {
    try {
        return import("/js/script/devMode.js");
    }
    catch (error) { console.log(error); }
}
/* ----------------- DEV MODE ----------------- */
/* ============= IMPORTING MODULES ============ */



/* ======================= FATORING FUNCTIONS =================== */
/* ------------------ starting particles ------------------------ */
function startParticles() {
    var particles_json = {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 0.8
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  };
  var params = JSON.parse(JSON.stringify(particles_json));
  window.particlesJS('particles-js', params);
}

/* ------------------ starting particles ------------------------ */
/* -------------------- link set onimgs ----------------*/
// function setLinksOnImgs(param, remove = false) {
//     let carousel_imgs = document.querySelectorAll('.img_container');
//     carousel_imgs.forEach(img => {
//         if (img.classList.contains('center')) {
//             img.addEventListener('click', loadPageX);
//             img.param = param;
//         }
//         else if (remove) {
//             img.removeEventListener('click', loadPageX);
//         }
//     });
// }
/* -------------------- link set onimgs ----------------*/
/* ----------------- link set on elements --------------*/
function settingEventListener(elements, index) {
    elements.forEach(element => {
        element.addEventListener('click', function () {
            loadPageX(index);
        })
    });
}
/* ----------------- link set on elements --------------*/
function stylesheetScoper(page_index){
    var cssLinks = document.querySelectorAll('.pagesCSS');
    cssLinks.forEach(element => {
        if (element.id == "page"+page_index+"_stylesheet") {
            element.disabled = false;
        }
        else {
            element.disabled = true;
        }
    });
    
}
/* -----------------  global pages funcs  --------------*/
function settingConfigurations(page_index) {
    cleanElement('header_nav');
    settingPageXTitle(page_index);
    showingTargetPage();
    stylesheetScoper(page_index);

    switch (page_index) {
        case 0:
            startParticles();
            startCarousel();
            setLinkOnPage0();
            setLinksOnHeader(["Apresentação", "Formação", "processo", "membros", "web", "case", "Feedback", "Parceiros"]);
            break;

        default:
            break;
    }
}
/* -----------------  global pages funcs  --------------*/
/* ======================= FATORING FUNCTIONS =================== */


/* =========================== LINK LOADS ======================== */
/* ----------------------- HEADER link loads --------------------- */
function setLinksOnHeader(titles) {
    var page_secs = document.querySelectorAll('.sec'),
        placeToInsert = document.querySelector('#header_nav'),
        sections_title = titles;

    for (let i = 0; i < page_secs.length; i++) {
        setElement(placeToInsert, 'button', sections_title[i], { "data-scroll": "sec" + (i + 1), "class": "nav_link" }, true);
    }
}
function cleanElement(elementID) {
    var element = document.querySelector('#'+elementID);
    element.innerHTML = "";
}
/* ----------------------- HEADER link loads --------------------- */
/* ----------------------- PAGE0 link loads --------------------- */
function setLinkOnPage0() {
    var contactus_btn = document.querySelectorAll('.contact_us');
    settingEventListener(contactus_btn, 1);
}
/* ----------------------- PAGE0 link loads --------------------- */
/* =========================== LINK LOADS ======================== */





/* ======================= REQUEST PROMISE ==================== */
function makeRequest(page_index) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "html/pages/page" + page_index + ".html");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
async function loadPageX(page_index) {
    if (!pagesNode[page_index]) {
        makeRequest(page_index).then(value => {
            pagesNode[page_index] = value;
            document.querySelector('main').innerHTML = pagesNode[page_index];
            settingConfigurations(page_index);
        });
    }
    else{
        document.querySelector('main').innerHTML = pagesNode[page_index];
        settingConfigurations(page_index);
    }
}
/* ======================= REQUEST PROMISE ==================== */



/* ======================= TITLE PAGE CONFG ==================== */
var titles = [
    "UnzippingThoughts",
    "Contato",
];
function settingPageXTitle(page_index) {
    document.querySelector('title').innerHTML = titles[page_index];
}
/* ======================= TITLE PAGE CONFG ==================== */




/* ========================= PAGE FADE IN ====================== */
function showingTargetPage() {
    setTimeout(() => {
        document.querySelector('.page_content').dataset.anim = "on";
    }, 100);
}
/* ========================= PAGE FADE IN ====================== */






/*+-------------------------------------------+
  |                 VARIABLES                 |
  +-------------------------------------------+ */
var pagesNode = []; //page0.hmtl, page1.html

/*+-------------------------------------------+
  |                 FIRST LOAD                |
  +-------------------------------------------+ */
// --------------- linking logo ---------------
var logo = document.querySelector('#header_logo');
settingEventListener([logo], 0);

callDevModule().then((rtrn) => {
    loadPageX(isNaN(rtrn.PAGE) ? 0 : rtrn.PAGE);
});


