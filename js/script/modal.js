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

export function showModal(modalCode) {
    
}