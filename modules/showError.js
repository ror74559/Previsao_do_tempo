export default function showError(error) {

                  switch(error.code) {

                    case error.PERMISSION_DENIED:

                      console.log("Usuário rejeitou a solicitação de Geolocalização.")

                      break;

                    case error.POSITION_UNAVAILABLE:

                      console.log("Localização indisponível.")

                      break;

                    case error.TIMEOUT:

                      console.log("O tempo da requisição expirou.")

                      break;

                    case error.UNKNOWN_ERROR:

                      console.log("Algum erro desconhecido aconteceu.")

                      break;

                  }
                      
                }