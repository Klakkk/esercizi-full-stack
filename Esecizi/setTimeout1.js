//Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.

function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();
  
  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}
setInterval(visualizzaOrologio, 1000) //corretto in Pair con Emilio

//questo mostro l'ho creato prima del pair, ma sono troppo orgolioso per eliminarlo, quindi lo lascio come commento 

/*let counterHours = 0;

const ore = setInterval((getHours) => {
    counterHours ++;
    console.log(`hours: ${counterHours}`);
  if(counterHours >= 60){
    return conterhours++};
}, 360000);

let counterMinutes = 0;

const minutes = setInterval((getMinutes) => {
    counterMinutes ++;
    console.log(`minutes: ${counterMinutes}`);
    if (counterSeconds >= 60){
      return counterminutes++};
    
}, 60000);

let counterSeconds = 0;

const seconds = setInterval((getSeconds) => {
  counterSeconds ++;
  console.log(`seconds: ${counterSeconds}`);
  
}, 1000);

const orarioCorrente = (ore, minutes, seconds);
console.log(orarioCorrente)
console.log(`Ora attuale: 11:14  ${counterHours}:${counterMinutes}:${counterSeconds}`);*/