import '@styles/main.css';
import '@styles/index.css';
import '@styles/reset.css';
import '@fonts/montserrat.css';
import '@fonts/fontawesome/all.min.css';
import '@fonts/iconfont/material-icons.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import {addShadow} from '@blocks/logo/logo'
import {ChiefSlider} from '@blocks/slider/slider'
import {addGallery} from '@blocks/gallery/gallery'
import {onNaviconClickHandler} from '@blocks/navicon/navicon'

addShadow();
const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
console.log('supportTouch is ' + supportsTouch);
const header = document.querySelector('.header');
const navicon = document.querySelector('.navicon');
navicon.addEventListener('click', onNaviconClickHandler);


if(supportsTouch){
    showHeader();
}else{
    header.addEventListener('mouseover', onHeaderHoverHandler);
}

function onHeaderHoverHandler() {
    header.classList.add('header__hover');
}

function showHeader(){
    header.classList.add('header__hover');
}

addGallery();

const slider = new ChiefSlider('.slider', {
    loop: true
  });