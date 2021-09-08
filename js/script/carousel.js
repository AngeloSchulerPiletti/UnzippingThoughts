export function startCarousel() {

var imgs_container = document.querySelectorAll('.img_container');

console.log('started');

function rollCarousel(action) { //Number: 1-> back 2-> next
    if (action == 1) {
        for (let index = 0; index < imgs_container.length; index++) {
            if (imgs_container[index].classList.contains('left')) {
                imgs_container[index].classList.remove('left');
                imgs_container[index].classList.add('center');

                switch (index) {
                    case 0:
                        var ref_i_pos1 = index + 1,
                            ref_i_pos2 = index + 2,
                            ref_i_pos3 = index + 3,
                            ref_i_neg = 4;
                        break;
                    case 2:
                        var ref_i_pos1 = index + 1,
                            ref_i_pos2 = index + 2,
                            ref_i_pos3 = 0,
                            ref_i_neg = index - 1;
                        break;
                    case 3:
                        var ref_i_pos1 = 4,
                            ref_i_pos2 = 0,
                            ref_i_pos3 = 1,
                            ref_i_neg = index - 1;
                        break;
                    case 4:
                        var ref_i_pos1 = 0,
                            ref_i_pos2 = 1,
                            ref_i_pos3 = 2,
                            ref_i_neg = index - 1;
                        break;

                    default:
                        var ref_i_pos1 = index + 1,
                            ref_i_pos2 = index + 2,
                            ref_i_pos3 = index + 3,
                            ref_i_neg = index - 1;
                        break;
                }

                imgs_container[ref_i_neg].classList.remove('semileft');
                imgs_container[ref_i_neg].classList.add('left');

                imgs_container[ref_i_pos1].classList.remove('center');
                imgs_container[ref_i_pos1].classList.add('right');

                imgs_container[ref_i_pos2].classList.remove('right');
                imgs_container[ref_i_pos2].classList.add('semiright');

                imgs_container[ref_i_pos3].classList.remove('semiright');
                imgs_container[ref_i_pos3].classList.add('semileft');

                // imgs_container[ref_i_neg].style.transform = "perspective(50vw) translateX(-2vw) rotateY(-20deg) scale(0.9);";



                break;
            }
        }
    }
    else {
        for (let index = 0; index < imgs_container.length; index++) {
            if (imgs_container[index].classList.contains('right')) {
                imgs_container[index].classList.remove('right');
                imgs_container[index].classList.add('center');

                switch (index) {
                    case 4:
                        var ref_i_neg1 = index - 1,
                            ref_i_neg2 = index - 2,
                            ref_i_neg3 = index - 3,
                            ref_i_pos = 0;
                        break;
                    case 0:
                        var ref_i_neg1 = 4,
                            ref_i_neg2 = 3,
                            ref_i_neg3 = 2,
                            ref_i_pos = index + 1;
                        break;
                    case 1:
                        var ref_i_neg1 = 0,
                            ref_i_neg2 = 4,
                            ref_i_neg3 = 3,
                            ref_i_pos = index + 1;
                        break;
                    case 2:
                        var ref_i_neg1 = 1,
                            ref_i_neg2 = 0,
                            ref_i_neg3 = 4,
                            ref_i_pos = index + 1;
                        break;

                        break;

                    default:
                        var ref_i_neg1 = index - 1,
                            ref_i_neg2 = index - 2,
                            ref_i_neg3 = index - 3,
                            ref_i_pos = index + 1;
                        break;
                }

                imgs_container[ref_i_pos].classList.remove('semiright');
                imgs_container[ref_i_pos].classList.add('right');

                imgs_container[ref_i_neg1].classList.remove('center');
                imgs_container[ref_i_neg1].classList.add('left');

                imgs_container[ref_i_neg2].classList.remove('left');
                imgs_container[ref_i_neg2].classList.add('semileft');

                imgs_container[ref_i_neg3].classList.remove('semileft');
                imgs_container[ref_i_neg3].classList.add('semiright');

                break;
            }
        }
    }
}


var name_space = document.querySelector('#name_field'),
    link_space = document.querySelector('#link_field'),
    people = [
        ["Angelo Schuler Piletti", "https://www.linkedin.com/in/angelo-schuler-piletti/"],
        ["Guilherme Pacheco", "https://www.linkedin.com/in/gpachecofreitas/"],
        ["Rayssa Rodrigues", "https://www.linkedin.com/in/rayssa-rodrigues-da-silva/"],
        ["Vinícius Adamski Heller", "https://www.linkedin.com/in/vin%C3%ADcius-heller-52197a212/"],
        ["Thiago Quevedo dos Santos", "https://www.linkedin.com/in/thiagoquevedosantos/"]
    ],
    imgs = document.querySelectorAll('.img_container');

function setNameOnField() {
    imgs.forEach(img => {
        if (img.classList.contains('center')) {
            var indexOfImgOnCenter = img.id.match(/[0-9]{1}/)[0];
            name_space.innerHTML = people[indexOfImgOnCenter][0];
            link_space.setAttribute('href', people[indexOfImgOnCenter][1]);
        }
    });
}



var back = document.querySelector('#btn_left'),
    next = document.querySelector('#btn_right');

setNameOnField();

back.addEventListener('click', () => {
    rollCarousel(1);
    setNameOnField();
});
next.addEventListener('click', () => {
    rollCarousel(2);
    setNameOnField();
})


}