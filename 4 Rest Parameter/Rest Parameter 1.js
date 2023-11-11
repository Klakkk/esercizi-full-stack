//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma(...number){
    return number.reduce((a, number) => a+number, 0);   
};
const mySum = somma(5, 6, 8 ,9, 10);

console.log(mySum);

