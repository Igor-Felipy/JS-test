// Exercicio 43 - Igualdade de Objetos (Exercicio)

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function SaoIguais(endereco2,endereco1){
    // compara as propriedades
    e1 = endereco1;
    e2 = endereco2;
    if (typeof e1 === typeof e2){
        if(e1.cep === e2.cep && e1.cidade === e2.cidade && e1.rua === e2.rua){
            console.log('São iguais!!!');
        }
        else{
            console.log('São diferentes!!!')
        }
    }
    else{
        console.log('São diferentes!!!')
    }

}

function enderecoMemoriaIgual(endereco2,endereco1){
    // comaparando a referencia de objeto
    return endereco1 === endereco2;
}
console.log(enderecoMemoriaIgual(endereco2,endereco1))
SaoIguais(endereco2, endereco1);