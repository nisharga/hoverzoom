
// (function ($) {
//     "use strict";
// });  
 
//    jQuery(window).load(function(){ 
       
// });
// )(jQuery));
// 

jQuery(document).ready(function($) { 
     var owl = $('.slider-area');
        owl.owlCarousel({
                items: 1,
                nav: false,
                dots: true,
                loop: true, 
                autoplay: true,
        });
     var owls = $('.logo-carousel');
        owls.owlCarousel({
                items: 5,
                margin: 30,
                nav: false,
                dots: true,
                loop: true, 
                autoplay: false,
        });
});      
     