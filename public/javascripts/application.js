$(document).ready(function () {

// =============
// = Flag flap =
// =============

	function flagFlap () {
		var x = 1;
		var max = 2;
		
		setInterval(function () {
			$("#flag-" + x).fadeOut(200);
			x++;
			if (x > max) {
				x = 1;
			};
			$("#flag-" + x).fadeIn(200);
		},200);
		
	};
	
	flagFlap();


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
	
// ==============
// = Win bounce =
// ==============
	// function winBounce () {
	// 	setInterval(function () {
	// 		$("#win").animate({
	// 			up: '+=50'
	// 		}, 1000, function () {
	// 			$("#win").animate({
	// 				bottom: '+=50'
	// 			}, 1000, function () {
	// 				winBounce();
	// 			});
	// 		});
	// 	}, 2000);
	// };

	// function winBounce () {
	// 	setInterval(function () {
	// 		$("#win").animate({
	// 			up: '+=50',
	// 			bottom: '+=50'
	// 		}, 1000 });
	// 	}, 1000);
	// };
	// 
	// 
	// winBounce();

// ==============================
// = Clouds and planes and such =
// ==============================
	// function cloudFloat () {
	// 	setInterval(function () {
	// 		$(".clouds").animate({
	// 			left: '+= 2000'
	// 		}, 2000);
	// 	}, 3000);		
	// };
	// 
	// cloudFloat();
	


	
	
	
	
});