// Crie uma função que retorna a string "Olá, " concatenada com um argumento text 
//(a ser passado para a função) e com ponto de exclamação "!" no final.
class pessoa{
    constructor(nome){
        this.nome = nome
    }

cumprimentar() {

   console.log(`Olá,meu nome é ${this.nome}`)

}
}
 const p1 = new pessoa('Joao!')
 p1.cumprimentar()

 const criarPessoa = nome => {
    return {
        cumprimentar: () => console.log(`Olá,meu nome é ${nome}`)
    }
 }
 const p2 = criarPessoa('Ana!')
 p2.cumprimentar()