/*Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."*/



function dice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("lancio dadi in corso...")
    setTimeout(() => {
        console.log(`dado 1 ${dice1}, dado 2 ${dice2}`);

    }, 2000);
};
dice()
