faixa = [
    {faixa : '200 a 750', tooltip : 'até 750',minimo : 200,maximo : 750},
    {faixa : '751 a 1500', tooltip : 'até 1500',minimo : 751,maximo:1500},
    {faixa : '1501 a 2000', tooltip : 'até 2000',minimo : 1501,maximo : 2000}
]
// factory
function CriaFaixa(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

console.log(CriaFaixa('até 100',0,100))
console.log(faixa)