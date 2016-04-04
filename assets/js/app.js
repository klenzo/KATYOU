$(function(){

	$('.toggle_menu').click(function() {
			console.log($('.nav ul').css('height'));
		if( $('.nav ul').css('height') == '0px'){
			$(this).removeClass('fa-bars').addClass('fa-times');
			$('.nav ul').animate({height: '100%'}, 100);
		}else{
			$(this).removeClass('fa-times').addClass('fa-bars');
			$('.nav ul').animate({height: 0}, 100);
		}
	});

});