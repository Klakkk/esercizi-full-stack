/*In questo esercizio dato un array di studenti:
Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.*/

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];



/*FIND 
voti(studenti) {
  const studenti = studenti.find(studenti => studenti.voto. >=90)
  
  return studenti;
};

FOR EACH
studenti.forEach(nome => console.log(nome));*/ 

/*REDUCE
function calculateAverageAge(studenti) {
  const average= studenti.reduce((a,user) => a + user.voto, +0);  
  const avg = average / studenti.length;
  return (avg);
};
const average = calculateAverageAge(studenti);
console.log(average);
console.log(studenti);
 */    


/*  MAP

const studentiMaiuscolo = studenti.map(studente => {
  return {
    nome: studente.nome.toUpperCase(),
  };
});

console.log(studentiMaiuscolo);*/ 

/*FILTER 

function voti(studenti) {
  const studentiVoti = studenti.filter(studenti >= 85);
  return studentiVoti;
  
};*/