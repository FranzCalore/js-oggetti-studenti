/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS: Usiamo il DOM per stampare e chiedere le informazioni all'utente! */


// Passo uno: Creo un oggetto studente

let studenteEsempio = {
    nome: "Pinco",
    cognome: "Pallo",
    eta: "14",
};

// Passo due: Stampo le proprietà dell'oggetto

for (qualita in studenteEsempio) {
    console.log(qualita);
}

// Passo tre: Creo l'array

let classe = []

classe.push(studenteEsempio);

// Passo quattro: Ciclo gli studenti

for (studente of classe) {
    console.log(studente.nome, studente.cognome);
}

// Passo cinque: Chiedo all'utente di inserire i prompt di un nuovo studente

function nuovoAlunno() {
    inputNome = document.getElementById("nomeAlunno").value;
    inputCognome = document.getElementById("cognomeAlunno").value;
    inputEta = document.getElementById("etaAlunno").value;

    let nuovoStudente = {
        nome: inputNome,
        cognome: inputCognome,
        eta: inputEta,
    };
    classe.push(nuovoStudente)
    console.log(nuovoStudente.nome, nuovoStudente.cognome, nuovoStudente.eta);
    document.getElementById("cardStudenti").innerHTML += `
<div class="col-12 col-md-6 col-lg-3 m-2 bg-white pt-3">
  <img src="./img/userimg.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nuovoStudente.nome} ${nuovoStudente.cognome}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${nuovoStudente.eta}</li>
  </ul>
</div>`
}
