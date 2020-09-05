				
export default function showHour(){

					let date = new Date()

					let hour = date.getHours().toString()

					let min = date.getMinutes().toString()

					if(min < 10){

						min = '0'+ min
					}

					if(hour < 10){

						hours = '0'+ hours

					}

					return `${hour}:${min}`

				}