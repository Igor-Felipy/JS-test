function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
const celular1 = criarCelular('Iphone',6.0,5000);
console.log(celular1)