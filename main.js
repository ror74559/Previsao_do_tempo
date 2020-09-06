import forecast from './functions/forecast.js'

import generalInfo from './functions/generalInfo.js'

generalInfo()


let btn = document.querySelector('#btnLocForecast')

btn.addEventListener('click', forecast)

//









