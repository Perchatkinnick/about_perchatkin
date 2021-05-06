function onNaviconClickHandler(){
    const menu = document.querySelector('.menu');
    if(menu.style.visibility == 'visible'){
        menu.style.visibility = 'hidden';
    }else{
        menu.style.visibility = 'visible';
    }
    
}

export {onNaviconClickHandler};