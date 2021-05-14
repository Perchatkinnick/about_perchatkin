function addShadow(){
    $(function ($) {
        $(document).ready(function(){
            $('h1').mousemove(function(e){
                var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
                var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
                $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
            });
            $('h1').mouseout(function(e){
                $('h1').css('text-shadow', '1px 1px 2px #072929, 8px 6px 1px var(--light_primary-color)');
            });
        });
    })
}

export {addShadow}