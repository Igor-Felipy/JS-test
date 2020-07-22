// Operadores Aritmeticos
let salario = 100;

// +, -, *, /, **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// ++, --
let idade = 18;

console.log(idade++); // se o incremento for feito após a exibição da variavel ele aparecerá com o antigo valor
console.log(idade);
console.log(idade--);
console.log(idade);
console.log(++idade);// o incremento antes da variavel mostrara o resultado ja alterado







// Operadores Atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);







// Operadores de Igualdade

// igualdade estrita
console.log(1 === 1);
console.log('1' === 1);

// Igualdade solta
console.log(1 == 1); // compara os valores, se forem de tipos diferentes ele converte
console.log('1' == 1);




// Operador ternário
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);





// Operadores Lógicos
// Operador Lógicos e (&&)
console.log(true && true);
let maiorIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar)

// Operador Lógico ou (||)
console.log(false || true);
let maiorIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar)


// Operador não (!)
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);




// Operadores Bitwise
