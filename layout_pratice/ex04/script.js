$(function(){

	//document is ready
	$(document).ready(function(){
		moving=0
		$(".chapter-menu-button").click(function(){
			if(moving==0){
				$(".chapter-menu").animate({"left": "0px"})
				moving=1
			}else if(moving==1){
				$(".chapter-menu").animate({"left": "-125px"})
				moving=0
			}else{

			}
		})
	});

	var bodyTop = 0;

	var winWidth = $(window).width(),
		winHeight = $(window).height(),
		curPos = $(window).scrollTop();

	$(function () {
	  $(window).scroll(function () {
	    getScrollTop();
	  });
	});


	function getScrollTop(){
		if (typeof window.pageYOffset != "undefined") {
		    bodyTop = window.pageYOffset;
		} else if (typeof document.compatMode != "undefined"
		             && document.compatMode != "BackCompat") {
		  bodyTop = document.documentElement.scrollTop;

		} else if (typeof document.body != "undefined") {
		  bodyTop = document.body.scrollTop;
		}
		if(bodyTop > 0){
		 	$('.nav-icon').addClass('nav-icon-active');
		  	$('.nav-menu').addClass('nav-menu-active');
		}else{
		  	$('.nav-icon').removeClass('nav-icon-active');
		  	$('.nav-menu').removeClass('nav-menu-active');
		}
	}

	
	

});