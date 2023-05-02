// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const contagem = {};

  for (const num of numeros) {
    if (num < 0 || num > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contagem[num] = (contagem[num] || 0) + 1;
    if (contagem[num] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const ddd = numeros.slice(0, 2).join('');
  const primeiraParte = numeros.slice(2, 7).join('');
  const segundaParte = numeros.slice(7).join('');

  return `(${ddd}) ${primeiraParte}-${segundaParte}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
