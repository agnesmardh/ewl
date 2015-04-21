app.controller("EAController", function() {
		var EA=this;
		EA.EAtext = "Enabling Atoms";
		
		EA.animate = function (){
		 	if (EA.EAtext == "Tom Agnes Albin") {	
				EA.EAtext = "Enabling Atoms";
			} else {
				EA.EAtext = "Tom Agnes Albin";
			};
		};
	});
