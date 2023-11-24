//Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
//-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
//-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
//-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

// nota pre esercizio. non so dove mettermi le mani. 
// documentazione online a me 
//okay penso di esserci. nuovo mostro in arrivo.

//creo una new promise nella prima funzione usando return
// imposto il setTimeout
// nel setTimeout dichiaro la costante id 1 john
//costrutto if else che mi dia true come risultato cosi da far attivare la seconda promise 
// cerco di capire come inserire then e catch per collegare le due promise 
// inserito il then dico alla funzione di stampare post1 2 3 
// spero che funzioni 

function fetchUserData() {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const id = {id: 1, name: "John"};
      if(id.id == 1){
        resolve(fetchUserPosts());
        } else {
          reject("error");
        }
    }, 1000)
  }).then((fetchUserPosts) => { 
    console.log(fetchUserData())
  })
  

  
 function fetchUserPosts(userId, userName) {
  const posts = "post1, post2, post3"
    if(fetchUserData == true){
    return id + posts
    } else{
      "error, id1 is not John"
    }

    
  }
};
  
fetchUserData().then((fetchUserPosts) => {
  if(fetchUserPosts == true){
    console.log(fetchUserPosts(), fetchUserData())
  } else {
    return "error"
  }
})

// pre primo console log, non so come ho fatto a creare sto mostro, non so se funzioni,
// ma in caso non funzionasse, lo consegnerò erratto, perche voglio effettivamente capire dove è l'errore
