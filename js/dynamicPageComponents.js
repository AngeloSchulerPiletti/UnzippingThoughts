/* ======================= FATORING FUNCTIONS =================== */
/* -------------------- link set onimgs ----------------*/
function setLinksOnImgs(param, remove=false) {
    let carousel_imgs = document.querySelectorAll('.img_container');
    carousel_imgs.forEach(img => {
        if (img.classList.contains('center')) {
            img.addEventListener('click', loadPageX);
            img.param = param;
        }
        else if(remove){
            img.removeEventListener('click', loadPageX);
        }
    });
}
/* -------------------- link set onimgs ----------------*/
/* ----------------- link set on elements --------------*/
function settingEventListener(element, index){
    element.addEventListener('click', function(){
        loadPageX(index);
    })
}
/* ----------------- link set on elements --------------*/
/* ======================= FATORING FUNCTIONS =================== */


/* =========================== LINK LOADS ======================== */
/* ----------------------- INICIO link loads --------------------- */
function setLinkOnInicio() {
    var carousel_btns = document.querySelectorAll('.arrow');

    setLinksOnImgs(1);

    carousel_btns.forEach(btn => {
        btn.addEventListener('click', function () {
            setTimeout(() => {
                setLinksOnImgs(1, true);
            }, 100);
        });
    });

    var tec_btn = document.querySelector('#tecnical_btn'),
        com_btn = document.querySelector('#comportamental_btn'),
        sobresite_btn = document.querySelector('#sobresite_btn'),
        contactus_btn = document.querySelector('#contact_us');

    settingEventListener(tec_btn, 2);
    settingEventListener(com_btn, 4);
    settingEventListener(sobresite_btn, 5);
    settingEventListener(contactus_btn, 3);
}
/* ----------------------- INICIO link loads --------------------- */
/* =========================== LINK LOADS ======================== */





/* ======================= REQUEST PROMISE ==================== */
function makeRequest(page_index) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "html/pages/page" + page_index + ".html");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
                // resolve('you got it!')
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
    var index = typeof page_index == 'object' ? page_index.target.param : page_index;

    makeRequest(index).then(value => {
        document.querySelector('main').innerHTML = value;
        settingPageXMetaElements(index);
        settingPageXTitle(index);
        showingTargetPage();

        switch (index) {
            case 0:
                setLinkOnInicio();
                break;

            default:
                break;
        }
    });
}
/* ======================= REQUEST PROMISE ==================== */



/* ======================= SETTING METADATA =================== */
function settingPageXMetaElements(page_index) {
    var pageMetaPlace = document.querySelector('.page_meta');

    setStyle(pageMetaPlace, 'per_page/page' + page_index + '.css');
    setScript(pageMetaPlace, 'per_page/page' + page_index + '.js', 'module');

    switch (page_index) {
        case 0:
            setScript(pageMetaPlace, 'script/particles-js/particles.js');
            setScript(pageMetaPlace, 'script/carousel.js');
            setStyle(pageMetaPlace, 'specific_features/carousel.css');
            setStyle(pageMetaPlace, 'specific_features/particlesjs.css');
            break;
        default:
            break;
    }
}
/* ======================= SETTING METADATA =================== */




/* ======================= TITLE PAGE CONFG ==================== */
var titles = [
    "UnzippingThoughts",
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Sobre o Site"
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




/* ===================== USEFUL SETTING FUNCS ================== */
function setScript(placeToInsert, src, type = "application/javascript") {
    var script_js = document.createElement('script');
    script_js.setAttribute('src', '/js/' + src);
    script_js.setAttribute('type', type);
    placeToInsert.appendChild(script_js);
}
function setStyle(placeToInsert, src, rel = "stylesheet") {
    var style_css = document.createElement('link');
    style_css.setAttribute('href', '/css/' + src);
    style_css.setAttribute('rel', rel);
    placeToInsert.appendChild(style_css);
}
/* ===================== USEFUL SETTING FUNCS ================== */









/*+-------------------------------------------+
  |                 FIRST LOAD                |
  +-------------------------------------------+ */
window.addEventListener('DOMContentLoaded', function () {
    loadPageX(0);
})


/*+-------------------------------------------+
  |             CREATE THE LINKS              |
  +-------------------------------------------+ */
var links = document.querySelectorAll('.nav_link');
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener('click', function () {
        loadPageX(index);
    });
}