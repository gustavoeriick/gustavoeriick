if (navigator.userAgent.match(/iP/i)) {
	$(window).bind('orientationchange', function(event) {
		$('meta[name="viewport"]').attr('content', 'initial-scale=1.0,maximum-scale=1.0, ' + ((window.orientation == 90 || window.orientation == -90 || window.orientation == 270) ? "height=device-width,width=device-height" : "height=device-height,width=device-width"));
	}).trigger('orientationchange');
}
$(document).ready(function(){
	$(".sidenav").sidenav();
});