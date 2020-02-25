


$(function(){
	$("form").submit(function(){
		var barValue = []; // String array

		/* Add four textbox data to barValue array. */
		barValue.push(  $("#first").val()  );
		barValue.push(  $("#second").val()  );
		barValue.push(  $("#third").val()  );
		barValue.push(  $("#forth").val()  );


		let root = document.documentElement;

		root.style.setProperty('--color1', "#00f");

		//var result1 = barValue[0] + "px";

		//document.documentElement.style.setProperty('--first', result1);

		//document.documentElement.style.setProperty('--color1', );

    	alert(typeof barValue[0]);
  	});

});

