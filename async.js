//La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!

//Implementa la funzioneottieniDatiutilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.
function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

// ipmlementa la funzione asincrona "ottieniDati"

async function ottieniDati() {
  try {
    const data = await caricamentoDati("Questi sono i dati ottenuti dalla fonte asincrona.");
    console.log("Questi sono i dati ottenuti dalla fonte asincrona.")
    
  } catch (error) {
    console.log("oh no qualcosa è andato storto")
    
  }
}
ottieniDati()

//funziona, ma non so se è giusto, ho omesso tutti i ragionamenti, perche alla fine erano solo 3 righe di codice 