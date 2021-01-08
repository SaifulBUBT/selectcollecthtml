(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
    
        
        $(".about_contents").owlCarousel({
    		loop:true,
    		dots:false,
    		nav:true,
    	    autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fa fa-angle-left'></i>", 
          			"<i Class='fa fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items:4,
			  }
			}

    	});
    	
        $(".product_gallery").owlCarousel({
    		loop:true,
    		dots:false,
    		nav:true,
    	    autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fa fa-angle-left'></i>", 
          			"<i Class='fa fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items:4,
			  }
			}

    	});
        
        
        

    });


 

}(jQuery));	