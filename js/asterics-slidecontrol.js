(function ($) {
	"use strict";
		
$( document ).ready(function() {
                var websocket = new WebSocket("ws://localhost:9081/bindModel/nexus.asterics/connector");

		var carousel;

                websocket.onmessage = function (evt) {
                    var connector = JSON.parse(evt.data);

		    switch(connector.inputs.b)
		    {
			    case 0:
				    var change = { "path": "outputs.outStrOne", "value": "" } 
				    websocket.send(JSON.stringify(change));

				    $(".carousel").on("click",
						    function (evt){
							carousel=$(this);
							var change = { "path": "outputs.outStrOne", "value": "CamMouseSlideControl.acs" } 
							websocket.send(JSON.stringify(change));
							evt.stopPropagation();
							return false;
						    });
				    break;
			    case 1:
				    switch(connector.inputs.a)
				    {
					    case 1:
						    carousel.carousel("prev");
						    break;
					    case 2:
						    carousel.carousel("next");
						    break;
					    default:
				    }
			    default:
				    $(".carousel").unbind("click");
				    break;
		    }

		};
});


}(jQuery));
