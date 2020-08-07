$(document).ready(function(){

  // test js
  $('#jq').html('hello! sazal')

  $(".owl-carousel").owlCarousel({
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	smartSpeed: 800,
	  	loop: true,
	  	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }

	  });


  	// top button js
	$('.top').click(function(){
       $("html, body").animate({
          scrollTop: 0
        }, 1000);
     });

	$('.top').hide();


	$(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<500) {
                $('.top').fadeOut();
            } else {
                $('.top').fadeIn();
            }



            // Menu Fixed
            if(ourWindow>100) {
            	$('body').addClass('fixed');
            } else {
            	$('body').removeClass('fixed');
            }
       });




		 $('.navbar-nav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});





       $('.navbar-nav a[href^="#"]').click(function(e){
       		e.preventDefault();

       		var target = this.hash;

       		$('html, body').animate({
       			scrollTop: $(target).offset().top - 75
       		}, 500);


       });




});