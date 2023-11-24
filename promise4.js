//-Crea una Promise che simula il recupero dei dati da un'API. 
//A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. 
//-Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
//-La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti 
//fallisce con il messaggio Error: Failed to fetch data

/* -creo una nuova promise 
nell'arrow della promise 
creo la variabile dove specifico math.random, 
creo un costrutto if else che se positivo richiami resolve
spero che funzioni*/


function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    let success = Math.floor(Math.random() * 0.9);
    if (success <= 0.5) {
      resolve().then(() => {
        console.log("Data retrieved successfully");
      })
    }
    else {
      reject().catch(() => {
        console.log("Error: Failed to fetch data")
      });
    }
  })
};

fetchDataFromAPI()