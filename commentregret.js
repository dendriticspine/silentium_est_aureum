$(document).ready(function() {
	var replaced = $("body").html().replace(/comments/gi,'Regrets');
	$("body").html(replaced);
	$( "a:contains('Regrets')" ).hover(function() {
		$(this).attr('title', 'Think of all the ways in which your time could be better spent (e.g. learning how to write a simple Chrome extension)!'); 
	})
 });

