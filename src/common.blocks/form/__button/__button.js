function cleanForm(){
    const form = document.querySelector('.form');
    window.onload = onButtonClickEventHandler;
}

function onButtonClickEventHandler(e){
    const nameElem = document.querySelector('.form__name');
    nameElem.value = '';
    const emailElem = document.querySelector('.form__email');
    emailElem.value = '';
    const messageElem = document.querySelector('.form__message');
    messageElem.value = '';
}

export {cleanForm}