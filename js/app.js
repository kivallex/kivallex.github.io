		$(document).ready(function(){
			$('.parallax').parallax();
		});

		// these variables and functions are for Drawing slideshow
		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n){
			showSlides(slideIndex += n);
		}
		function currentSlide(n){
			showSlides(slideIndex = n);
		}
		function showSlides() {
			var i;
			// variables for drawing image slideshow
			var slides = document.getElementsByClassName("slider");
			var dots = document.getElementsByClassName("dot");

			// statements for drawing image slideshow
			if(i > slides.length) {slideIndex = 1}
			if(i < 1) {slideIndex = slides.length}
			for(i = 0; i < slides.length; i++){
				slides[i].style.display = "none";
			}
			for(i = 0; i < dots.length; i++){
				dots[i].className = dots[i].className.replace(" active", "");
			}

			// for drawing slideshow
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";
		}

		// these variables and functions are for VideoEditing slideshow
		var vidSlideIndex = 1;
		vidShowSlides(vidSlideIndex);

		function vidPlusSlides(n){
			// showSlides(slideIndex += n);
			vidShowSlides(vidSlideIndex += n);
		}
		function vidCurrentSlide(n){
			// showSlides(slideIndex = n);
			vidShowSlides(vidSlideIndex = n);
		}
		function vidShowSlides(){
			var i;
			// variables for video slideshow
			var vidSlides = document.getElementsByClassName("vid-slider");
			var vidDots = document.getElementsByClassName("vid-dot");

			// statements for video slideshow
			if(i > vidSlides.length) {vidSlideIndex = 1}
			if(i < 1) {vidSlideIndex = vidSlides.length}
			for(i = 0; i < vidSlides.length; i++){
				vidSlides[i].style.display = "none";
			}
			for(i = 0; i < vidDots.length; i++){
				vidDots[i].className = vidDots[i].className.replace(" active", "");
			}

			// for video slideshow
			vidSlides[vidSlideIndex-1].style.display = "block";
			vidDots[vidSlideIndex-1].className += " active";
		}

		// these variables and functions are for Photography slideshow
		var photoSlideIndex = 1;
		photoShowSlides(photoSlideIndex);

		function photoPlusSlides(n){
			// showSlides(slideIndex += n);
			photoShowSlides(photoSlideIndex += n);
		}
		function photoCurrentSlide(n){
			// showSlides(slideIndex = n);
			photoShowSlides(photoSlideIndex = n);
		}
		function photoShowSlides(){
			var i;
			// variables for video slideshow
			var photoSlides = document.getElementsByClassName("photo-slider");
			var photoDots = document.getElementsByClassName("photo-dot");

			// statements for video slideshow
			if(i > photoSlides.length) {photoSlideIndex = 1}
			if(i < 1) {photoSlideIndex = photoSlides.length}
			for(i = 0; i < photoSlides.length; i++){
				photoSlides[i].style.display = "none";
			}
			for(i = 0; i < photoDots.length; i++){
				photoDots[i].className = photoDots[i].className.replace(" active", "");
			}

			// for video slideshow
			photoSlides[photoSlideIndex-1].style.display = "block";
			photoDots[photoSlideIndex-1].className += " active";
		}

		// these variables and functions are for Survival Shooter Game slideshow
		var survivalSlideIndex = 1;
		survivalShowSlides(survivalSlideIndex);

		function survivalPlusSlides(n){
			// showSlides(slideIndex += n);
			survivalShowSlides(survivalSlideIndex += n);
		}
		function survivalCurrentSlide(n){
			// showSlides(slideIndex = n);
			survivalShowSlides(survivalSlideIndex = n);
		}
		function survivalShowSlides(){
			var i;
			// variables for video slideshow
			var survivalSlides = document.getElementsByClassName("survival-slider");
			var survivalDots = document.getElementsByClassName("survival-dot");

			// statements for video slideshow
			if(i > survivalSlides.length) {survivalSlideIndex = 1}
			if(i < 1) {survivalSlideIndex = survivalSlides.length}
			for(i = 0; i < survivalSlides.length; i++){
				survivalSlides[i].style.display = "none";
			}
			for(i = 0; i < survivalDots.length; i++){
				survivalDots[i].className = survivalDots[i].className.replace(" active", "");
			}

			// for video slideshow
			survivalSlides[survivalSlideIndex-1].style.display = "block";
			survivalDots[survivalSlideIndex-1].className += " active";
		}

		// these variables and functions are for Web Development slideshow
		var webSlideIndex = 1;
		webShowSlides(webSlideIndex);

		function webPlusSlides(n){
			webShowSlides(webSlideIndex += n);
		}
		function webCurrentSlide(n){
			webShowSlides(webSlideIndex = n);
		}
		function webShowSlides(){
			var i;
			// variables for video slideshow
			var webSlides = document.getElementsByClassName("web-slider");
			var webDots = document.getElementsByClassName("web-dot");

			// statements for video slideshow
			if(i > webSlides.length) {webSlideIndex = 1}
			if(i < 1) {webSlideIndex = webSlides.length}
			for(i = 0; i < webSlides.length; i++){
				webSlides[i].style.display = "none";
			}
			for(i = 0; i < webDots.length; i++){
				webDots[i].className = webDots[i].className.replace(" active", "");
			}

			// for video slideshow
			webSlides[webSlideIndex-1].style.display = "block";
			webDots[webSlideIndex-1].className += " active";
		}
