var header = document.querySelector('header');
var logo = header.querySelector('#header_logo');

window.addEventListener('scroll', function () {
    if (header.querySelector('#header_nav').innerHTML != "") {
        if (self.pageYOffset > header.offsetHeight && header.dataset.move != "on") {
            logo.style.display = "none";
            header.dataset.move = "on";
        }
        else if (self.pageYOffset == 0 && header.dataset.move == "on") {
            logo.style.display = "block";
            header.dataset.move = "off"
        }
    }
    else{
        logo.style.display = "block";
        header.dataset.move = "off"
    }
})
