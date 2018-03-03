//flexslider

$('.flexslider').flexslider({ 
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
$(document).on("scroll",function(){
	if($(document).scrollTop()>200){ 
		$(".navbar").addClass("small");
		}
	else{
		$(".navbar").removeClass("small");
		}
});