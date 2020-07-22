

function maiorValor(a,b){
    if (a > b){
        return a;
    } 
    else if (b > a){
        return b;
    }
    else {
        return 'Erro!!'
    }

    // numero1 > numero2 ? numero1 : numero2; operador ternario torna a funcao mais simples
}

console.log(maiorValor(12,13))