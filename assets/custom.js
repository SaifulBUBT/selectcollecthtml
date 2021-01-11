(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 2000);
			return false;
        });

        //wow js
        new WOW().init();

				//humberg menu
				$("#toggle").click(function() {
					$(this).toggleClass("open");
					$("#menu").toggleClass("opened");
				});
				$(".special_class").click(function() {
					$('#toggle').removeClass("open");
					$("#menu").removeClass("opened");
				});



				//smooth scroll section
				$(".sc-menu ul a").on("click", function (e) {
					e.preventDefault();
					const href = $(this).attr("href");
					$("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
				});

				//lightbox popup plugin
				$('.venobox').venobox(); 

		});
		

		
		// show hide join now pop up
		const joinPopup = document.querySelector(".join-now-popup");
		const close = document.querySelector(".popup-close");
		window.addEventListener("load",function(){
	 
		 showPopup();

		})
	
		function showPopup(){
					const timeLimit = 8 // seconds;
					let i=0;
					const timer = setInterval(function(){
					 i++;
					 if(i == timeLimit){
						clearInterval(timer);
						joinPopup.classList.add("show");
					 } 
					 console.log(i)
					},1000);
		}
	
	
		close.addEventListener("click",function(){
			joinPopup.classList.remove("show");
		})
	
		window.addEventListener("click",function(){
	 
			joinPopup.classList.remove("show");

		 })
	 
}(jQuery));	