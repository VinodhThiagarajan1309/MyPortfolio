$(document).ready(function(){
	var nav= $('.navbar-fixed-top');

	$(window).scroll(function(){

		var scroll =  $(window).scrollTop();
		if(scroll>=900){
			nav.addClass('effect');
		}else{
			nav.removeClass('effect');
		}
		console.log(scroll);
	});
});

smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});