

export default async function generalInfo(){


					try{

						let general = document.querySelector('#general')

						const resp = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=09676bdeb9a3ea1c3050b94e16b48cb0`)

						const data = await resp.json()

						general.innerHTML = `
											<div class = "col-sm-12 col-md-12 col-xl-12">
												<h1>Previsão do Tempo</h1>
												<h3>Informações Gerais:</h3>
												<p>${data[0].text}</p>
												<h2>Previsão Local</h2>
											</div>
											`
						}catch(error){

							let content1 = document.querySelector("#content1")

						 	content1.innerHTML = 'Não foi possível obter os dados da sua localização'
						}
				 
				}