/*Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.*/

function runCallbacks(callbacks) {
callbacks.forEach(callback => {
  callback()
  
});
}
function firstCallback() {
  console.log("sono");
}
function secondCallback() {
  console.log("molto");
}

function thirdCallback() {
  console.log("confuso")
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);