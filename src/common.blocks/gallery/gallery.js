function addGallery(){
    $(function ($) {
        $(document).ready(function(){
            $("a.photo").fancybox({
                loop: true,
                transitionEffect: 'zoom-in-out',
                animationEffect: 'zoom-in-out',
                smallBtn : 'auto',
                backFocus: false,
                animationDuration: 600,
                transitionDuration: 600,
                width: 1000,
                toolbar  : false,
                smallBtn : false,
                arrows   : false,
                idleTime : false,
                padding: [10, 20, 30, 40],
                afterLoad : function(instance, slide) {
                    $('<a title="Close" class="fancybox-item fancybox-close" href="javascript:;" data-fancybox-close></a><a title="Previous" class="fancybox-item fancybox-nav fancybox-prev" href="javascript:;" data-fancybox-prev><span></span></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next" href="javascript:;" data-fancybox-next><span></span></a>').appendTo( slide.$content );
                },                        
            });            
        });
    })
}

export {addGallery}