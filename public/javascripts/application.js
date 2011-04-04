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
		},0);
		
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
	
	
// ==================
// = Button actions =
// ==================	
	$("#blog").click(function(){
		$(window.location).attr('href', 'http://turfgeography.tumblr.com');
	});
	
	$("#email").click(function(){
		$(window.location).attr('href', 'mailto:piechart@mac.com?Subject=Turf!');
	});
	
	$("#twitter").click(function(){
		$(window.location).attr('href', 'http://twitter.com/turfhq')
	});

	// $("#now-hiring").click(function(){
	// 	$(window).scrollTo
	// });

	$("#email-right").click(function(){
		$(window.location).attr('href', 'mailto:piechart@mac.com?Subject=Turf!');
	});


// ==============
// = Win bounce =
// ==============
	// function winBounce () {
	// 	setInterval(function () {
	// 		$("#win").animate({
	// 			up: '+=50'
	// 		}, 1000, nil).delay(200);
	// 
	// 		$("#win").animate({
	// 			down: "+=50"
	// 			
	// 		}, 1000, nil);
	// 	},500);
	// };	
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