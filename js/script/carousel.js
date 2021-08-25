var back = document.querySelector('#btn_left'),
    next = document.querySelector('#btn_right'),
    display = 1;

var imgs_container = document.querySelectorAll('.img_container');



function rollCarousel(action){ //Number: 1-> back 2-> next
    if(action==1){
        for (let index = 0; index < imgs_container.length; index++) {
            if (imgs_container[index].classList.contains('left')) {
                imgs_container[index].classList.remove('left');
                imgs_container[index].classList.add('center');

                switch (index) {
                    case 0:
                        var ref_i_pos1 = index + 1,
                            ref_i_pos2 = index + 2,
                            ref_i_neg = 4;
                        break;
                    case 3:
                        var ref_i_pos1 = 4,
                            ref_i_pos2 = 0,
                            ref_i_neg  = index - 1;
                        break;
                    case 4:
                        var ref_i_pos1 = 0,
                            ref_i_pos2 = 1,
                            ref_i_neg  = index - 1;
                        break;
                
                    default:
                    var ref_i_pos1 = index + 1,
                        ref_i_pos2 = index + 2,
                        ref_i_neg  = index - 1;
                        break;
                }

                imgs_container[ref_i_neg].classList.remove('hide');
                imgs_container[ref_i_neg].classList.add('left');
                
                imgs_container[ref_i_pos1].classList.remove('center');
                imgs_container[ref_i_pos1].classList.add('right');

                imgs_container[ref_i_pos2].classList.remove('right');
                imgs_container[ref_i_pos2].classList.add('hide');

                break;
            }
        }
    }
    else{
        for (let index = 1; index < imgs_container.length; index++) {
            if (imgs_container[index].classList.contains('right')) {
                imgs_container[index].classList.remove('right');
                imgs_container[index].classList.add('center');

                switch (index) {
                    case 4:
                        var ref_i_neg1 = index - 1,
                            ref_i_neg2 = index - 2,
                            ref_i_pos = 0;
                        break;
                    case 0:
                        var ref_i_neg1 = 4,
                            ref_i_neg2 = 3,
                            ref_i_pos  = index + 1;
                        break;
                    case 1:
                        var ref_i_neg1 = 0,
                            ref_i_neg2 = 4,
                            ref_i_pos  = index + 1;
                        break;
                
                    default:
                    var ref_i_neg1 = index - 1,
                        ref_i_neg2 = index - 2,
                        ref_i_pos  = index + 1;
                        break;
                }

                imgs_container[ref_i_pos].classList.remove('hide');
                imgs_container[ref_i_pos].classList.add('right');
                
                imgs_container[ref_i_neg1].classList.remove('center');
                imgs_container[ref_i_neg1].classList.add('left');

                imgs_container[ref_i_neg2].classList.remove('left');
                imgs_container[ref_i_neg2].classList.add('hide');

                break;
            }
        }
    }
}











back.addEventListener('click', ()=>{
    rollCarousel(1);
});
next.addEventListener('click', ()=>{
    rollCarousel(2);
})



