import geoLocation from '../modules/geoLocation.js'

import todayForecast from '../modules/todayForecast.js'




export default async function forecast (){
					let btn = document.querySelector('#btnLocForecast')

					let content1 = document.querySelector("#content1")

					btn.style.display = 'none'

					content1.innerHTML = '<div class="spinner-border"></div>'

					try{

					let latPosition = await geoLocation()

					const resp = await fetch(`https://api.hgbrasil.com/weather?key=b9d387b9&${latPosition}&user_ip=remote`)

					const data = await resp.json()

					todayForecast(data.results)

					} catch(error){

						let content1 = document.querySelector("#content1")

						 content1.innerHTML = 'Não foi possível obter os dados da sua localização'

					}
						 
				}
				