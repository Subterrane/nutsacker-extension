
chrome.extension.onRequest.addListener(function(request, sender) {
	if (request.greeting == 'hello') {
		$('img').each( function( index, elem ) {

			var temp = $('<img><img/>').
				prop('src', chrome.extension.getURL('nutsack.png')).
				css('position','absolute').
				width($(elem).width()).
				height($(elem).height());
				
			$('body').append( temp );
				
			temp.offset($(elem).offset());
		});
	}
});