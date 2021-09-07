var header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if (self.pageYOffset > header.offsetHeight && header.dataset.move != "on"){
        header.className = 'header-fixed';
        setTimeout(() => {
            header.dataset.move = "on";
        }, 10);
    }
    else if(self.pageYOffset == 0 && header.dataset.move == "on"){
        header.dataset.move = "off"
        setTimeout(() => {
            header.className = 'header-static';
        }, 400);
    }

})
