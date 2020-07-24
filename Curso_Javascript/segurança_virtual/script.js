function VerificarEntrada(){
    let names = ['igor','felipy'];
    Name = document.getElementById('nome');
    comp = Name.value;
    console.log(Name.value)


    if(names.includes(comp)){

        let a = document.getElementById('permissao');
        a.innerText = 'Você pode Entrar!'
    }
    else {
        console.log(comp)
        let a = document.getElementById('permissao');
        a.innerText = 'Você não pode Entrar!'
    }
}