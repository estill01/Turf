$(document).ready(function () {

// ===============
// = iPhone loop =
// ===============

	function iphoneLoop () {
		var x = 1;
		var max = 6;
	
		setInterval(function () {
			$("#iphone-" + x).fadeOut(500);
			x++;
			if (x > max) {
				x = 1;
			};
			$("#iphone-" + x).delay(1000).fadeIn(500);
		}, 6000);
	};

	iphoneLoop();
	
	
// ==============================
// = Clouds and planes and such =
// ==============================
	function cloudFloat () {
		setInterval(function () {
			$(".clouds").animate({
				left: '+= 2000'
			}, 2000);
		}, 3000);		
	};
	
	cloudFloat();
	


	
	
	
	
});