var header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if (self.pageYOffset > header.offsetHeight && header.dataset.move != "on"){
        header.dataset.move = "on";
    }
    else if(self.pageYOffset == 0 && header.dataset.move == "on"){
        header.dataset.move = "off"
    }

})
