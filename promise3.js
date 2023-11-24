//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
//-Utilizzare setTimeout per simulare un'operazione asincrona.

/* creo una funzione, che ritorni una promise,
poi do resolve e reject alla promise
imposto il setTimeout
specifico quando resolve e quando reject
dopo il costrutto if aggiungo then e catch */

const func = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a <= 8){
                return resolve("okay ci sono fortissimo")
            } else{
                reject("FORTISSIMO LET'S GOOOOOOOOOOO, si, ovviamente è errore perché non specifico cosa sia 'a'")
            }
            
        }, 2000);

    })
}
const a = func(8).then((a) => {
    console.log(resolve());
}).catch((reject) => {
    console.log(reject);
})
    

