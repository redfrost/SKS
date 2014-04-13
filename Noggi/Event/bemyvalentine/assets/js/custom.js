// Preloader - Hide content until the page is fully loaded
    $(document).ready(function() {
        $(window).load(function() {
          // When the page has loaded
            $("#preloader").fadeOut(); // fade out preloader
            $("#master-wrap").fadeTo("slow", 1); // fade in content
	    });
    });



// Smooth Scroll
    $(document).ready(function() {
      $('a.brand').smoothScroll({offset: -73});
      $('.nav a').smoothScroll({offset: -73});
	    $('.back-top a').smoothScroll({offset: 0});
	    $('a.smooth-scroll').smoothScroll({offset: 500});
	});



// Scroll fade
jQuery(document).ready(function () {
    var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
        ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
        ,fading = $('.no-touch .scroll-fade');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0;

        if( offset<=fadeStart ){
            opacity=1;

        }else if ( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }

        fading.css('opacity',opacity);
    });
});




// Fancybox Control
    		$(document).ready(function() {
    		
    			$("a.fancybox").fancybox({
    				'titlePosition'		: 'outside',
    				'overlayColor'		: '#000',
    				'overlayOpacity'	: 0.9
    			});

			    $("a[rel=fancybox_gallery]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				    }
			    });

                $(document).ready(function() {
                $('.fancybox.video').fancybox({
                    'overlayColor'		: '#000',
    				'overlayOpacity'	: 0.6,
                    'padding': 0, //optional
                    'width': 960, //or whatever
                    'height': 540, //or whatever
                    'type': 'iframe'
                    });
                }); //ready

			});


// Add your own