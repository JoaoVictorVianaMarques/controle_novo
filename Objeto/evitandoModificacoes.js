//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 456.99, tag:'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'João Victot', idade: 18}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes