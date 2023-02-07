console.log("CAROSELLO IMMAGINI");
let immagini = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg",
  "../img/img5.jpg",
];
console.log(immagini);
const frecciaDxElement = document.getElementById("freccia-destra");
const frecciaSnElement = document.getElementById("freccia-sinistra");
console.log(frecciaDxElement, frecciaSnElement);
let indiceFotoSelected = 0;
console.log(indiceFotoSelected);
// scorri foto al click destro
const fotoElements = document.getElementsByClassName("foto");
console.log(fotoElements);
// FRECCIA DX

frecciaDxElement.addEventListener("click", function () {
  let fotoAttuale = fotoElements[indiceFotoSelected];
  fotoAttuale.classList.remove("selected");
  indiceFotoSelected++;
  let prossimaFoto = fotoElements[indiceFotoSelected];
  prossimaFoto.classList.add("selected");
  console.log("prossima foto", indiceFotoSelected);
  // CHIUSURA CLICK DX
});
// FRECCIA SN

frecciaSnElement.addEventListener("click", function () {
  let fotoAttuale = fotoElements[indiceFotoSelected];
  fotoAttuale.classList.remove("selected");
  indiceFotoSelected--;
  let prossimaFoto = fotoElements[indiceFotoSelected];
  prossimaFoto.classList.add("selected");
  console.log("prossima foto", indiceFotoSelected);
  // CHIUSURA CLICK SN
});
