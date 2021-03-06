import '@styles/main.css';
import '@styles/color-sheme.css';
import '@styles/index.css';
import '@styles/reset.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import {cleanForm} from '@blocks/form/__button/__button'
import {addShadow} from '@blocks/logo/logo';
import {ChiefSlider} from '@blocks/slider/slider';
import {addGallery} from '@blocks/gallery/gallery';
import {onNaviconClickHandler} from '@blocks/navicon/navicon';


cleanForm();
addShadow();
const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
console.log('supportTouch is ' + supportsTouch);
const header = document.querySelector('.header');
const navicon = document.querySelector('.navicon');
navicon.addEventListener('click', onNaviconClickHandler);

// if(supportsTouch){
//     showHeader();
// }else{
//     header.addEventListener('mouseover', onHeaderHoverHandler);
// }

// function onHeaderHoverHandler() {
//     header.classList.add('header__hover');
// }

// function showHeader(){
//     header.classList.add('header__hover');
// }

addGallery();

const slider = new ChiefSlider('.slider', {
    loop: true
  });

const logo = document.getElementsByClassName('logo');
for(let i =0; i<logo.length; i++){
  logo[i].addEventListener('click', onLogoClickHandler);
}

function onLogoClickHandler() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}