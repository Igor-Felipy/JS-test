let endereco = {
    rua : 'a',
    cidade : 'b',
    CEP : 'c'  
};

function exibirEndereço(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereço(endereco);