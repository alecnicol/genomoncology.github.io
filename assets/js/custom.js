//flexslider
$('#what_clients_say').flexslider({ 
	controlNav: false, 
	directionNav: false, 
	animation: "slide", 
	slideshowSpeed: 10000, 
	directionNav: true, 
	prevText: "Previous",
	nextText: "Next",
});

 
// full screen search form
 function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


// header bg opacity
var bannerHeight = $(".section-banner").height() - $(".navbar-fixed-top").height() * 2;
$(document).on("scroll",function(){
	if($(document).scrollTop()>bannerHeight){ 
		$(".navbar").addClass("small");
	}
	else{
		$(".navbar").removeClass("small");
	}
});


// showing CAPABILITY content
$( "a.plus-icon-wrap" ).click(function( event ) {
  event.preventDefault();
  $(this).hide().parent().next().show();
});


// masornary layout in CAPABILITY section
$('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
 //columnWidth: '.grid-sizer',
  percentPosition: true,
});


// Resouces page carousel
$(document).ready(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 273,
    itemMargin: 50,
    asNavFor: '#slider',
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    directionNav:false
  });
});

// magnatic popup
$(document).ready(function() {
    //youtube video
    $('.popup-youtube').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });
});