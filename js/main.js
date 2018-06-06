
$(document).ready(function(){


/* Scroll hire me button to contact page */
	$('.hire-me').click(function(){
		    $('html, body').animate({
        		scrollTop: $( $(this).attr('href') ).offset().top
    		}, 500);
    	return false;
	});

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function (e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

/* portfolio mixitup */

	$(window).load(function(){
    var $container = $('.grid-wrapper');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.grid-controls li a').click(function(){
        $('.grid-controls .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});


/* Magnific Popup */
$('.grid-wrapper').magnificPopup({
		  delegate: 'a', 
		  type: 'image',
		  gallery:{
			enabled:true
		  }
		});



/* Sticky menu */
$(".navbar").sticky({topSpacing: 0});


/* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"	
     });

/* Charts*/
    
$('.chart').waypoint(function() {
    $(this).easyPieChart({
    	   barColor: '#3498db',
    	   size: '150',
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
	 });
}, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});


/* VEGAS Home Slider */
	
		$.vegas('slideshow', {
			  backgrounds:[
				
				{ src:'img/slider/01.jpg', fade:1000 },
				{ src:'img/slider/02.jpg', fade:1000 },
				{ src:'img/slider/03.jpg', fade:1000 },
				{ src:'img/slider/04.jpg', fade:1000 }
			  ]
			})('overlay', {
			  src:'img/overlays/16.png'
			});
			$( "#vegas-next" ).click(function() {
			  $.vegas('next');
			});
			$( "#vegas-prev" ).click(function() {
			  $.vegas('previous');
		});


/*Contact form */
      $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    }); 



});
/*
     FILE ARCHIVED ON 09:44:44 Oct 07, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:59 Jun 06, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 5106.723 (3)
  esindex: 0.013
  captures_list: 5136.611
  CDXLines.iter: 17.304 (3)
  PetaboxLoader3.datanode: 3630.48 (4)
  exclusion.robots: 0.267
  exclusion.robots.policy: 0.248
  RedisCDXSource: 6.288
  PetaboxLoader3.resolve: 2019.233 (4)
  load_resource: 703.32
*/