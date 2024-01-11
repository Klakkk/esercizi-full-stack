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
  return new Promise((resolve, reject) => {
    const userData = { id: 1, name: "John" };
    const data = true;
    if (data) {
      return resolve(`UserId: ${userData.id} \n UserName: ${userData.name}`);
    } else {
      return reject("Invalid Data");
    }
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    const userPosts = ["Post 1", "Post 2", "Post 3"];
    const data = true;
    if (data) {
      return resolve(
        `Results found: ${userPosts.length} \n UserPosts: ${userPosts}`
      );
    } else {
      return reject("ERROR");
    }
  });
}

fetchUserData()
  .then((userData) => {
    console.log("User Data:", userData);
    return fetchUserPosts(userData.id, userData.name);
  })
  .then((userPosts) => {
    console.log("User Posts:", userPosts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
