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
//Veja que neste caso a diferença é que você utiliza o array na primeira posição e logo após você verifica nas condicionais qual o maior valor e armazena na variável maiorNUm.
//Em seguida é necessário contar quantas vezes este maior valor se repete, para isso você cria uma nova variável e verifica se a posição do array é igual ao maior valor e contabiliza.

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
function fizzBuzz(listaNumeros) {
  let resposta = [];
  for (let numero in listaNumeros) {
    if (listaNumeros[numero] % 3 === 0 && listaNumeros[numero] % 5 !== 0) {
      resposta.push('fizz');
    } else if (listaNumeros[numero] % 5 === 0 && listaNumeros[numero] % 3 !== 0) {
      resposta.push('buzz');
    } else if (listaNumeros[numero] % 3 === 0 && listaNumeros[numero] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;

}

// Desafio 9
function encode(frase) {
  let novaFrase = [];
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] === 'a'){
      novaFrase.push('1');
    } else if (frase[index] === 'e') {
      novaFrase.push('2');
    } else if (frase[index] === 'i') {
      novaFrase.push('3');
    } else if (frase[index] === 'o') {
      novaFrase.push('4');
    } else if (frase[index] === 'u') {
      novaFrase.push('5');
    } else {
      novaFrase.push(frase[index]);
    }
  }
  return novaFrase.join('');
}

function decode(frase) {
  let novaFrase = [];
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] === '1'){
      novaFrase.push('a');
    } else if (frase[index] === '2') {
      novaFrase.push('e');
    } else if (frase[index] === '3') {
      novaFrase.push('i');
    } else if (frase[index] === '4') {
      novaFrase.push('o');
    } else if (frase[index] === '5') {
      novaFrase.push('u');
    } else {
      novaFrase.push(frase[index]);
    }
  }
  return novaFrase.join('');
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
