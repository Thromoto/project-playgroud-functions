// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimaPalavra = array[array.length - 1];
  let primeiraPalavra = array[0];
  return ultimaPalavra + ", " + primeiraPalavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0];
  for (let index = 0; index < array.length; index += 1){
    if(maiorNum < array[index]){
      maiorNum = array[index];
    }
  }
  let total = 0;
  for (let index = 0; index < array.length; index += 1){
    if (maiorNum === array[index]){
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let fugir = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    fugir = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    fugir = 'cat2';
  }
  return fugir;
}


// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
