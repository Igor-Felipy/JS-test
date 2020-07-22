//console.log('Estou aprendendo!');
// 1.For

//for(let i = 0;i<5;i++){
//    console.log('Estou Aprendendo',i);
//}

//for(let i = 5; i >= 1; i--){
//    if(i%2 !== 0){
//        console.log(i);
//    }
//}








// 2.while
//let i = 5;

//while(i>=1){
//    if(i%2!==0){
//        console.log(i);
//    }
//}








// 3.Do while
//i = 0;
//do{
//    console.log('digitando');
//    i++;
//}while(i<10)








// 4.For In
const pessoa = {
    nome: 'Felipy',
    idade: 20
};


for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for(let indice in cores){
    console.log(indice, cores[indice])
}











// 5.For Of
for(let cor of cores){
    console.log(cor);
}