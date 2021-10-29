// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
  let soma = num1 + num2;
  return soma;
}
add();
// descomente a linha seguinte para testar sua função
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado"
);

// comece a criar a sua função multiply na linha abaixo
function multiply(num3, num4) {
  let somar = 0;
  for (let counter = 1; counter <= num3; counter++) {
    somar = add(somar, num4);
  }
  return somar;
}
multiply();
// descomente a linha seguinte para testar sua função
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// comece a criar a sua função power na linha abaixo
function power(base, expoente) {
  let potencia = base;
  for (let counter = 1; counter < expoente; counter++) {
    potencia = multiply(base, potencia);
  }
  return potencia;
}
power();
// descomente a linha seguinte para testar sua função
console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// comece a criar a sua função factorial na linha abaixo
function factorial(numero) {
  let resultado = numero;
  for (let counter = 1; counter < numero; counter++) {
    resultado = multiply(resultado, counter);
  }
  return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
