console.log("CAROSELLO IMMAGINI");
// recupero foto
let immagini = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg",
  "../img/img5.jpg",
];

// RECUPERARE CAROSELLO DAL DOM
let carosello = document.getElementById("carosello");
console.log(carosello);

console.log(immagini);
const frecciaDxElement = document.getElementById("freccia-destra");
const frecciaSnElement = document.getElementById("freccia-sinistra");
console.log(frecciaDxElement, frecciaSnElement);

// indice foto attiva
let indiceFotoSelected = 0;

// recuperato le 2 frecce
console.log(indiceFotoSelected);
// scorri foto al click destro
const fotoElements = document.getElementsByClassName("foto");
console.log(fotoElements);

// FRECCIA DX
frecciaDxElement.addEventListener("click", function () {
  // if (indiceFotoSelected < lastIndex) {
  let lastIndex = fotoElements.length - 1;

  let fotoAttuale = fotoElements[indiceFotoSelected];
  fotoAttuale.classList.remove("selected");

  if (indiceFotoSelected < lastIndex) {
    indiceFotoSelected += 1;
  } else {
    indiceFotoSelected = 0;
  }

  let prossimaFoto = fotoElements[indiceFotoSelected];
  prossimaFoto.classList.add("selected");
  console.log("prossima foto", indiceFotoSelected);

  // }
  // CHIUSURA CLICK DX
});

// FRECCIA SN
frecciaSnElement.addEventListener("click", function () {
  // if (indiceFotoSelected > 0) {
  let lastIndex = fotoElements.length - 1;

  let fotoAttuale = fotoElements[indiceFotoSelected];
  fotoAttuale.classList.remove("selected");

  if (indiceFotoSelected > 0) {
    indiceFotoSelected--;
  } else {
    indiceFotoSelected = lastIndex;
    console.log(lastIndex);
  }

  // indiceFotoSelected -= 1;
  let prossimaFoto = fotoElements[indiceFotoSelected];
  prossimaFoto.classList.add("selected");
  console.log("foto precedente", indiceFotoSelected);
  // BLOCCO SCORRIMENTO SN
  // }
  // CHIUSURA CLICK SN
});
