$(document).ready(function() {

	/**
	 * Login click functionality that displays error message,
	 * displays popover and clears after 5s timout.
	 */
	$('#loginBtn').click(function(){
		var logValue = document.getElementById('userInput').value,
			passValue = document.getElementById('passInput').value;

		/** Checks if either input has a value to return true */
		if( logValue || passValue ) {
			$('#userErr').addClass('has-error').css('display', 'table-cell');
			$('#passErr').addClass('has-error').css('display', 'table-cell');
			$('#userInput').css('borderRadius', '0');
			$('#passInput').css('borderRadius', '0');
			$('#userLabel').addClass('has-error');
			$('#passLabel').addClass('has-error');			
			
			/** Generates popover */
			$('#userGlyph').popover({
				content: 'Username and Password you\'ve <br> provided are incorrect.',
				placement: 'top',
				html: true				
			});
			$('#userGlyph').popover("show");

			/** Finds popover element  to allow editing of style */
			var popUp = $('#userGlyph').attr('aria-describedby');
			popUp = document.getElementById(popUp);
			popUp.setAttribute('max-width', '392px');
			popUp.style.left = 0;
			popUp.children[0].style.left = '8%';

			/** Generates tooltip */
			$('#userErr').tooltip({
				title: 'Username Wrong',
				placement: 'left',
				trigger: 'click'
			});
			$('#userErr').tooltip("show");

			$('#passErr').tooltip({
				title: 'Password Wrong',
				placement: 'left',
				trigger: 'click'
			});
			$('#passErr').tooltip("show");

			/** Creates timout, 5s, then clears error messages */
			setTimeout(function(){
				$('#userGlyph').popover("hide");
				$('#userErr').tooltip("hide");
				$('#passErr').tooltip("hide");
				$('#userInput').val('');
				$('#passInput').val('');
				$('#userErr').removeClass('has-error').css('display', 'none');
				$('#passErr').removeClass('has-error').css('display', 'none');
			}, 5000)

		} 
	});

	/** Click function on error glyph to clear errors */
	$('#userErr').click(function(){
		$('#userGlyph').popover("hide");
		$('#userErr').tooltip("hide");
		$('#passErr').tooltip("hide");
		$('#userInput').val('');
		$('#passInput').val('');
		$('#userErr').removeClass('has-error').css('display', 'none');
		$('#passErr').removeClass('has-error').css('display', 'none');
	})
	/** Click function on error glyph to clear errors */
	$('#passErr').click(function(){
		$('#userGlyph').popover("hide");
		$('#userErr').tooltip("hide");
		$('#passErr').tooltip("hide");
		$('#userInput').val('');
		$('#passInput').val('');
		$('#userErr').removeClass('has-error').css('display', 'none');
		$('#passErr').removeClass('has-error').css('display', 'none');
	})

	/** Functionality to clear input fields if no value */
	$('#userInput').click(function(){
		$('#userInput').removeAttr('placeholder');
	});
	$('#passInput').click(function(){
		$('#passInput').removeAttr('placeholder');
	});
	$('#userInput').blur(function(){
		if(!$('#userInput').attr('value')) {
			$($('#userInput')).attr('placeholder', 'Username');
		};				
	});
	$('#passInput').blur(function(){
		if(!$('#passInput').attr('value')) {
			$($('#passInput')).attr('placeholder', 'Password');
		};				
	});	
});


