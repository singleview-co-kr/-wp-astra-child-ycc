jQuery( document ).ready( function( $ ) {
	$( document ).on( 'click', '.close-popup', function( event ) {
		elementorProFrontend.modules.popup.closePopup( {}, event );
	} );
} );