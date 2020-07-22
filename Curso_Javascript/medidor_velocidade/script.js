verificarVelocidade(84)
function verificarVelocidade(v){
    if(v<=70){
        console.log('Continue assim!');
    }
    else if(v>70){
        let m = (v - 70) / 5;
        console.log('Pontos: ' + Math.floor(m))
        if (m> 12 ){
            console.log('Carteira suspendida')
        }
    }
    else{
        console.log('Erro!')
    }
}