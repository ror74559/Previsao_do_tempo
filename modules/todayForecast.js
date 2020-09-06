import showHour from  './showHour.js'

let content1 = document.querySelector("#content1")

let content2 = document.querySelector("#content2")

export default function todayForecast(forecast){

					let hours = showHour()

					 content1.innerHTML = `
						 
							  <div class = "col-sm-12 col-md-12 col-xl-12 " id = "mainDesc">
							  	  <h3>${forecast.forecast[0].weekday}, ${forecast.date}</h3>
								  <div> <h5>${forecast.city}</h5> </div>
								  <div> <h1>${forecast.temp}°C</h1> </div>
								  <div> <h4>${forecast.description}</h4> <h5>${hours}</h5></div>
							  </div>`
					

					 for (let i = 1; i < 6; i++) {

					 	content2.innerHTML += `
					 			<div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">	
							 		<p>${forecast.forecast[i].weekday}, ${forecast.forecast[i].date}</p>
							 		<p>Max: ${forecast.forecast[i].max} °C</p>
							 		<p>Min: ${forecast.forecast[i].min} °C</p>
							 		<p>${forecast.forecast[i].description}</p>
								</div>`
					 }
				}