
export default async function geoLocation (){
				try {
						let latlon = []
	      		       
						let data = await fetch('https://api.ipdata.co?api-key=43afdbebd4f6b6faf207ad2448c7bd7145554f82af33b24a2913b26c')

						let json = await data.json()

						latlon =`${json.latitude}&log=${json.longitude}`

						return latlon
						

					} catch(error){

						let content1 = document.querySelector("#content1")

						 content1.innerHTML = 'Não foi possível obter os dados da sua localização'
					} 


			   }

//43afdbebd4f6b6faf207ad2448c7bd7145554f82af33b24a2913b26c