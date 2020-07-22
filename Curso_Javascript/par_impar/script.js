exibirTipo(10)
function exibirTipo(n){
    for(let i = 0; i <= n; i++){
        (i%2 === 0) ? console.log(i + ' Par') : console.log(i + ' impar')
    }
}