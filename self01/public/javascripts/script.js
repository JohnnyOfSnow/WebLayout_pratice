$(function(){
	$('.panel').hide();

	/** toggle(function 1, function 2, ...)
	 *
	 *	Execute sequence: function 1 -> function 2 -> ... -> function 1
	 */
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		// If menuBtn has not value:close, add value:close.
		$('#menuBtn').toggleClass('close');
	},
	function(){ // When the upper function have executed, it executes this function.
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});	

