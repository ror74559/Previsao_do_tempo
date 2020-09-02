import showPosition from '../modules/showPosition.js'

import showError from '../modules/showError.js'

export default function geoLocation (){

					if (navigator.geolocation){

					    navigator.geolocation.getCurrentPosition(showPosition,showError);

				    }else{

					  console.log("Geolocation is not supported by this browser.");

				  	}

			   }
			     
   



