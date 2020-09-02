import geoLocation from './geoLocation.js'

import todayForecast from '../modules/todayForecast.js'




export default async function api (){

			let latPosition = geoLocation()

			const resp = await fetch(`https://api.hgbrasil.com/weather?key=68cdf5e3&${latPosition}&user_ip=remote`)

			const data = await resp.json()

			todayForecast(data.results)
				 
			}
		