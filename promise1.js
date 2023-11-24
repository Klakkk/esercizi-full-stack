//Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
//La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

// uso return sulla nuova promise 
// metto nei parametri resolve e reject 
// arrow function
//uso il set timeout e dentro le sue greffe metto 
// dichiaro let come john anni 30 
// costrutto if else 
// se si resolve inserisco il messaggio di resolve
// se no gestisco l'errore con reject con messaggio di errore 
// imposto il tempo
// const con il nome della funzione e successivamente il valore della funzione ( come start )
// eseguo il la costante che contiene la funzione con il console log
// oppure imposto il console log con dentro l'esecuzione della funzione dadogli i valori 
// console.log con l'età
function fetchDataFromAPI() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let data = {name: "John", age: 30}
            if( data.age < 30 ){
                resolve("ok");
            } else{
                reject("error, data not found");
            }
            }, 1000)
    });
}

const dat = fetchDataFromAPI(20).then((data) =>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
});

//console.log(dat)
  
//ho preso la funzione, ho dichiarato new Promise(()) con dentro resolve e reject
// successivamente ho inserito il setTimeout(() =>{}) messo la 
// variabile data contenti i dati dello scorso esercizio e successivamante
// ho costruito un costrutto if else con dentro se data fosse stato 
// true, dovevo ottenere il resolve se invece fosse stato false 
// avrei dovuto ottenere error.
// impostato il timer del setTimeout ho creato una constante 
// che contenesse il la funzione con dentro l'eta scelta per ottenre 
// l'errore, e poi usato then in caso di successo così da riottenere data
// e catch così da ottenere l'errore come in questo caso, per poi
// chiudere tutto con un console log di dat ovvero la costante. 
// per poi rendermi conto che lasciando il console log di dat avrei 
// avuto anche il pending, quindi ho commentato tutto per evitarlo
// mamma mia se sono forte oh, una bestia 