$(document).ready( function(){

// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.
var calciatori = [
  {
    nome: 'messi',
    squadra: 'barca',
    nazione: 'argentina'
  },
  {
    nome: 'lukaku',
    squadra: 'inter',
    nazione: 'belgio'
  },
  {
    nome: 'mbappe',
    squadra: 'psg',
    nazione: 'francia'
  }
]

// creiamo una copia
var newCalciatori = [];

for (var i = 0; i < calciatori.length; i++) {
  var copiaCalciatori = {
    nome: calciatori[i].nome,
    squadra: calciatori[i].squadra,
    nazione: calciatori[i].squadra,
    position: generaPosizione()
  };

  newCalciatori.push(copiaCalciatori);
}

console.table(calciatori);
console.table(newCalciatori);


// generiamo una funzione per selezionare una posizione di una lettera dell'alfabeto
function generaPosizione() {
  var lettere = "abcdefghijklmnopqrstuvwxyz";

  var lettera = lettere[randomNumber(0, lettere.length - 1)];

  return lettera;
}
// funzione per generare un numero casuale
function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



  // JSnack 2
  // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  // Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
  // Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

// Array con nomi scelti da nomi
// var nomi = ["alberto", "filippo", "enzo", "luigi", "bruno"];
// var totale = nomi.length - 1;
// var min = parseInt( prompt("indica un numero tra 0 e " + totale) );
// var max = parseInt( prompt("indica un numero tra 0 e " + totale) );
//
// var newArray = [];
// for (var i = 0; i < nomi.length; i++) {
//   if (min <= i && max >= i) {
//     newArray.push(nomi[i]);
//   }
// }
//  console.log("array di partenza", nomi);
//  console.log(min);
//  console.log(max);
//  console.log(newArray);



//   // JSnack 1
//   // Creare un array di oggetti
//   // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//   // Stampare a schermo la bici con peso minore con handlebars.
//
// var biciclette = [
//   {
//     nome: "bianchi",
//     peso: 11
//   },
//   {
//     nome: "coppi",
//     peso: 9
//   },
//   {
//     nome: "atlas",
//     peso: 13
//   }
// ];
//
// // bici con peso minore
// var biciclettaLeggera = biciclette[0];
//
// for (var i = 1; i < biciclette.length; i++) {
//   if (biciclette[i].peso < biciclettaLeggera.peso) {
//     biciclettaLeggera = biciclette[i];
//   }
// }
// // console.log(biciclettaLeggera);
// // javascript compile, necessario per stampare a schermo
// var source = document.getElementById("bike-template").innerHTML;
// var template = Handlebars.compile(source);
//
//
// // Stampare a schermo la bici con peso minore
// var dati = { nome: biciclettaLeggera.nome, peso: biciclettaLeggera.peso };
// var html = template(dati);
//
// $(".lista-bici").append(html);
}); //fine document
