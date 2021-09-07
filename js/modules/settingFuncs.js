export function setScript(placeToInsert, src, type = "application/javascript") {
    var script_js = document.createElement('script');
    script_js.setAttribute('src', '/js/' + src);
    script_js.setAttribute('type', type);
    placeToInsert.appendChild(script_js);
}
export function setStyle(placeToInsert, src, rel = "stylesheet") {
    var style_css = document.createElement('link');
    style_css.setAttribute('href', '/css/' + src);
    style_css.setAttribute('rel', rel);
    placeToInsert.appendChild(style_css);
}
export function setElement(placeToInsert, tag, inner = "", attributes = { "": "" }, eventListener = false) {
    var element = document.createElement(tag);
    element.innerHTML = inner;
    eventListener ? element.addEventListener('click', function(){
        scrollToSec(attributes['data-scroll']);
    }) : null;
    

    let attributes_keys = Object.keys(attributes),
        attributes_values = Object.values(attributes);
    let attributes_length = attributes_keys.length;
    for (let i = 0; i < attributes_length; i++) {
        element.setAttribute(attributes_keys[i], attributes_values[i]);
    }

    placeToInsert.appendChild(element);
}