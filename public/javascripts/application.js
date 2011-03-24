$(document).ready(function () {


// IPHONE LOOP
	function iphoneLoop () {
		var x = 1;
		var max = 6;
	
		setInterval(function () {
			$("iphone-" + x).fadeOut(500);
			x++;
			if (x > max) {
				x = 1;
			};
			$("iphone-" + x).delay(1000).fadeIn(500);
		}, 2000);
	};

	iphoneLoop();
});