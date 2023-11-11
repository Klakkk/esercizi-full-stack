//Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
//Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...numeri) {
   
    const numeriPari = numeri.filter(numero => numero % 2 === 0);
    return numeriPari;
};
 const numeriPari =filterOutOdds (1,2,3,4,5,6,7,8,9,10);
 console.log(numeriPari);
