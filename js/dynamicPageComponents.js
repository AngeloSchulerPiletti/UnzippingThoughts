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
    makeRequest(page_index).then(value =>{
        document.querySelector('main').innerHTML = value;
        settingPageXMetaElements(page_index);
        settingPageXTitle(page_index);
        showingTargetPage();
    });
}




function settingPageXMetaElements(page_index) {
    var pageMetaPlace = document.querySelector('.page_meta');
    let script = document.createElement('script'),
        style = document.createElement('link');

    script.setAttribute('src', 'js/per_page/page' + page_index + '.js');
    script.setAttribute('type', 'module');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'css/per_page/page' + page_index + '.css');
    pageMetaPlace.appendChild(style);
    pageMetaPlace.appendChild(script);

    if (page_index == 0) {
        setParticles(pageMetaPlace);

        let script = document.createElement('script'),
            style = document.createElement('link');

        script.setAttribute('src', 'js/script/carousel.js');
        script.setAttribute('type', 'module');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'css/per_page/specific_features/carousel.css');
        pageMetaPlace.appendChild(style);
        pageMetaPlace.appendChild(script);

    }
}




var titles = {
    'page0': "UnzippingThoughts",
    'page1': "Page 1",
    'page2': "Page 2",
    'page3': "Page 3",
};
function settingPageXTitle(page_index) {
    document.querySelector('title').innerHTML = titles['page' + page_index];
}



function showingTargetPage() {
    setTimeout(() => {
        document.querySelector('.page_content').dataset.anim = "on";
    }, 100);
}


function setParticles(placeToInsert) {
    var particles_js = document.createElement('script');

    // app_js.setAttribute('src', '/js/script/particles-js/app.js');
    particles_js.setAttribute('src', '/js/script/particles-js/particles.js');

    placeToInsert.appendChild(particles_js);
    // placeToInsert.appendChild(app_js);
}




/*+-------------------------------------------+
  |                 FIRST LOAD                |
  +-------------------------------------------+ */
window.addEventListener('DOMContentLoaded', function(){
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