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

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(ultimaPalav, primeiraPalav) {
  for (let index = 0; index < array.length; index += 1) {
    if (index === (array.length - 1)) {
      ultimaPalav = array[index];
    }
  }
  return ultimaPalav;
}

console.log(concatName['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6

let num = [9, 1, 2, 3, 9, 5, 7];
let maiorNum = [];

function highestCount(maiorNum) {
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maiorNum) {
      maiorNum = num[index];
    }
  }
  return maiorNum;
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
  // seu código aqui
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
