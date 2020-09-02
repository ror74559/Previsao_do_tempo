let content = document.querySelector("#content")

let date = new Date()

export default function todayForecast(forecast){
				let hours = date.getHours()
				let min = date.getMinutes()
				let hora = []

				function mins(){
					if(min < 10){
						min = '0'+ min.toString()
					}
					if(hours < 10){
						hours = '0'+ hours.toString()
					}
					return [hours,min]
				}

				hora = mins()

					console.log(forecast)

					 content.innerHTML = `
						 <div class = "row d-flex justify-content-center align-items-center forecastWeeks">
							  <div class = "col-sm-12 col-md-12 col-xl-12 " id = "mainDesc">
							  	  <h3>${forecast.forecast[0].weekday}, ${forecast.date}</h3>
								  <div>
								  		<h5>${forecast.city}</h5>
								  </div>
								  <div>
								  		<h1>${forecast.temp}°C</h1>
								  </div>
								  <div>
								  		<h4>${forecast.description}</h4>
								  		<h5>${hora[0]}:${hora[1]}</h5>
								  </div>
							  </div>

						 </div>
					

						 

						 <div class = "row d-flex justify-content-center align-items-center">

							 <div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">

								 		
								 		<p>${forecast.forecast[1].weekday}, ${forecast.forecast[1].date}</p>
								 		<p>Max: ${forecast.forecast[1].max}</p>
								 		<p>Min: ${forecast.forecast[1].min}</p>
								 		<p>${forecast.forecast[1].description}</p>


							 </div>
							 <div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">

								 		
								 		<p>${forecast.forecast[2].weekday}, ${forecast.forecast[0].date}</p>
								 		<p>Max: ${forecast.forecast[2].max}</p>
								 		<p>Min: ${forecast.forecast[2].min}</p>
								 		<p>${forecast.forecast[2].description}</p>

							 </div>
							 <div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">

								 		
								 		<p>${forecast.forecast[3].weekday}, ${forecast.forecast[0].date}</p>
								 		<p>Max: ${forecast.forecast[3].max}</p>
								 		<p>Min: ${forecast.forecast[3].min}</p>
								 		<p>${forecast.forecast[3].description}</p>

							 </div>
							 <div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">

								 		
								 		<p>${forecast.forecast[4].weekday}, ${forecast.forecast[0].date}</p>
								 		<p>Max: ${forecast.forecast[4].max}</p>
								 		<p>Min: ${forecast.forecast[4].min}</p>
								 		<p>${forecast.forecast[4].description}</p>

							 </div>
							 <div class = "col-sm-12 col-md-2 col-xl-2 forecastWeeks">

								 		
								 		<p>${forecast.forecast[5].weekday}, ${forecast.forecast[0].date}</p>
								 		<p>Max: ${forecast.forecast[5].max}</p>
								 		<p>Min: ${forecast.forecast[5].min}</p>
								 		<p>${forecast.forecast[5].description}</p>

							 </div>
							 

						 </div>



					 `

				}