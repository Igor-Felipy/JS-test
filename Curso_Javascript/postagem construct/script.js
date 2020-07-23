function Postagem(t,m,a){
    this.titulo = t,
    this.mensagem = m,
    this.autor = a,
    this.visualizacao = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
post1 = new Postagem('a','b','c');
console.log(post1);