// full screen search form
 function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}



// opacity(header bg)
var bannerHeight = $(".section-banner, .section-hero").height() - $(".navbar-fixed-top").height() * 2;
$(document).on("scroll",function(){
  if($(document).scrollTop()>bannerHeight){
    $(".navbar").addClass("small");
  }
  else{
    $(".navbar").removeClass("small");
  }
});





// masornary layout in CAPABILITY section
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
 //columnWidth: '.grid-sizer',
  percentPosition: true,
});

// showing CAPABILITY content
$( "a.plus-icon-wrap" ).click(function( event ) {
  event.preventDefault();
  $(this).hide().parent().next().show();
  $(this).closest(".box-content").css("margin-top", "0");
  $grid.masonry("reloadItems");
  $grid.masonry();
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



// Clients Logos on Home page
$('.clients-carousel').slick({
  prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/arrow_left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='../img/arrow_right.png'>",
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




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



$('.testimonials-area').slick({
  prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/arrow_left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='../img/arrow_right.png'>",
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});



// Clients Served
/*$(document).ready(function() {
  $('#clients_served').flexslider({
    animation: "slide",
    animationLoop: false,
    //itemWidth: 210,
    itemMargin: 3
  });
});*/


