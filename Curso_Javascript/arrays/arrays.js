// add element

const numeros = [1,2,3]

// inicio
numeros.unshift(0);
console.log(numeros);
// meio 
numeros.splice(1,0,'a');
console.log(numeros);
// final
numeros.push(5);
console.log(numeros);




// finding element
console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(1));
console.log(numeros.includes(2));




// finding reference type
const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'b';
});

console.log(marca)

// arrow functions
marcas.find((marca) => marca.nome === 'b');
//mesma funcao mas menor


// rm element

//final 
numeros.pop();
console.log(numeros);

// inicio
numeros.shift();
console.log(numeros);

// meio
numeros.splice(2,1)
console.log(numeros);


// esvaziar arrays

//solucao1
numeros.length = 0;
console.log(numeros);









// cortar e combinar
const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
console.log(combinado);

//dividir
const cort = combinado.slice(1,3);
console.log(cort);



//spread
const comb = [...primeiro,...segundo];
console.log(comb);

// clonar
const copp = [...primeiro];
console.log(copp);



// combinar 
const frase = 'ola mundo !';
const n1 = frase.split(' ');
const n = n1.join('.');
console.log(n);