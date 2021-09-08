var modalContainer = document.querySelector('#modal_container');
var modalData = {
    'tec': [
        'Conhecimento Técnico',
        //text
    ],
    'com': [
        'Habilidades Interpessoais',
        //text
    ],
};

async function fetchingText(fileName) {
    fetch('/html/modal/mod_' + fileName + '.txt')
        .then(response => response.text())
        .then(data => {
            modalData[fileName][1] = data;
        });
}

var keys = Object.keys(modalData);
for (let i = 0; i < keys.length; i++) {
    fetchingText(keys[i]);
}

export function showModal(modalCode){
    modalContainer.querySelector('h1').innerHTML = modalData[modalCode][0];
    modalContainer.querySelector('p').innerHTML = modalData[modalCode][1];
    
    modalContainer.style.display = "block";
    setTimeout(() => {
        modalContainer.dataset.show = "on";
    }, 10);
    document.body.style.overflow = "hidden";
}
function closeModal(){
    modalContainer.dataset.show = "off";
    setTimeout(() => {
        modalContainer.style.display = "none";
        document.body.style.overflow = "auto";
    }, 600);
}

modalContainer.addEventListener('click', event =>{
        closeModal();
})