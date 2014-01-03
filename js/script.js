$(document).ready(function($) {
	function menuControl(el) {
		el.hasClass('active') ? el.removeClass('active') : el.addClass('active');
		$('nav#mainNav').is(':visible') ? $("nav#mainNav").fadeOut() : $("nav#mainNav").fadeIn();

		/*var dest;
		var state = false;
		$('nav#mainNav').is(':visible') ? dest = -440 : dest = -10;
		console.log(">> "+$('nav#mainNav').offset().top+" > "+dest);
		if (dest == -10) {
				$('nav#mainNav').fadeIn();
			} else {
				$('nav#mainNav').fadeOut();
			}
		$('nav#mainNav').animate({
			top: dest+"px",
			
		}, function() {
			console.log(">> "+$(this).offset().top+" > "+dest);
		});*/

	}
	$('#top .menuButton').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		menuControl($(this));
	});

	


});
$(document).click(function(e) {
	if ($("nav#mainNav").is(':visible')) {
		var isNav = $(e.target).parents().index($('.menuContainer'));
	    if (isNav === -1) {
	    	$('nav#mainNav').fadeOut();
	    }
	}
});


/*
<script type="text/javascript">
	function ClearViewState()
	{
		var viewState;
		for(i=0;i<document.forms.length;i++)
		{
			viewState = document.forms[i].__VIEWSTATE;
			if(viewState!=null)
			{
				viewState.name = "__VIEWSTATE_Disabled";
				viewState.value = "";
			}
		}
	}

	function SendRequest(action)
	{
	    if(document.getElementById("wpyEmail").value=='')
	    {
	        alert("Please enter your E-mail address");
	        document.getElementById("wpyEmail").focus();
	        return false;
	    }
		var obj = document.forms['aspnetForm']; //		
		obj.action = "http://feed.ne.cision.com/client/kongsberg/subscribe/subscribe.aspx";
		obj.elements['wpySubscribeAction'].value = action;
		ClearViewState();
		obj.submit();
	}

	function UnSubscribe()
	{
		SendRequest('end');
	}
	
	function Subscribe()
	{
		SendRequest('begin');
	}
</script>

*/