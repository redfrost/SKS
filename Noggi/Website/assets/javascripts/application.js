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
	$('.nav a').smoothScroll({offset: -73});
	$('a.scroll').smoothScroll({offset: -0});
	$('.back-top a').smoothScroll({offset: -100});
});


// Scrollspy offset
jQuery(document).ready(function () {
	$('[data-spy="scroll"]').scrollspy({ offset: 100 });
});


// Tooltip & Popover
jQuery(document).ready(function () {
	$("[data-toggle=tooltip]").tooltip();
	$("[data-toggle=popover]").popover();
});


// Carousel	Auto
jQuery(document).ready(function() {
	$('#myCarousel.slide').carousel({
		interval: 6000,
		cycle: true
	});
});
var $ = jQuery.noConflict();



// Top menu Affix
jQuery(document).ready(function () {
	$('.nav-standard').affix({
		offset: {
		top: 350,
		bottom:0
		}
	})
});



// Parallax BG
jQuery(document).ready(function() {
  $('.no-touch body').stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });
});


//Convert Address tags into a map link
jQuery(document).ready(function () {
	$('address').each(function () {
		var link = "<a href='http://maps.apple.com/?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
		$(this).html(link);
	});
});


//Convert Address into an embedded map
jQuery(document).ready(function(){
	$(".mapaddress").each(function(){
		var embed ="<iframe width='100%' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
		$(this).html(embed);
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
		'overlayColor'		: '#fff',
		'overlayOpacity'	: 0.5,
		'padding': 0, //optional
		'width': 960, //or whatever
		'height': 540, //or whatever
		'type': 'iframe'
		});
	}); //ready
});


// Add your own

//Scroll fade
jQuery(document).ready(function () {
    var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
        ,fadeUntil=160 // 200px scroll or more will equiv to 0 opacity
        ,fading = $('.navbar-brand');

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