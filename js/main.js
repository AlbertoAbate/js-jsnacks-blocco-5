$(document).ready( function(){
  // JSnack 1
  // Creare un array di oggetti
  // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore con handlebars.

var biciclette = [
  {
    nome: "bianchi",
    peso: 11
  },
  {
    nome: "coppi",
    peso: 9
  },
  {
    nome: "atlas",
    peso: 13
  }
];

// bici con peso minore
var biciclettaLeggera = biciclette[0];

for (var i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciclettaLeggera.peso) {
    biciclettaLeggera = biciclette[i];
  }
}
// console.log(biciclettaLeggera);
// javascript compile, necessario per stampare a schermo
var source = document.getElementById("bike-template").innerHTML;
var template = Handlebars.compile(source);


// Stampare a schermo la bici con peso minore
var dati = { nome: biciclettaLeggera.nome, peso: biciclettaLeggera.peso };
var html = template(dati);

$(".lista-bici").append(html);
}); //fine document
