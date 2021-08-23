function loadPageX(page_index) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "html/pages/page"+page_index+".html", false);
    ajax.send();
    document.querySelector('main').innerHTML = ajax.responseText;
}


function settingPageXMetaElements(page_index){
    let pageMetaPlace = document.querySelector('.page_meta'),
        script = document.createElement('script'),
        style = document.createElement('link');

    script.setAttribute('src', 'js/per_page/page'+page_index+'.js');
    script.setAttribute('type', 'module');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'css/per_page/page'+page_index+'.css');
    pageMetaPlace.appendChild(style);
    pageMetaPlace.appendChild(script);
}




var titles = {
    'page0': "UnzippingThoughts",
    'page1': "Page 1",
    'page2': "Page 2",
    'page3': "Page 3",
};
function settingPageXTitle(page_index){
    document.querySelector('title').innerHTML = titles['page'+page_index];
}



function showingTargetPage() {
    setTimeout(() => {
        document.querySelector('.page_content').dataset.anim = "on";
    }, 100);
}





/*+-------------------------------------------+
  |                 FIRST LOAD                |
  +-------------------------------------------+ */
loadPageX(0);
settingPageXMetaElements(0);
settingPageXTitle(0);
showingTargetPage();


/*+-------------------------------------------+
  |             CREATE THE LINKS              |
  +-------------------------------------------+ */
var links = document.querySelectorAll('.nav_link');

for (let index = 0; index < links.length; index++) {
    links[index].addEventListener('click', function(){
        loadPageX(index);
        settingPageXMetaElements(index);
        settingPageXTitle(index);
        showingTargetPage();
    });
}