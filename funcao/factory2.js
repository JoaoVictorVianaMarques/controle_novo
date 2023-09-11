function criarProduto(Nome_produto,preco_produto){
    return{
    Nome_produto,
    preco_produto,
    desconto: 0.1
    }
}
console.log(criarProduto('Iphone 14', 14100))

console.log(criarProduto('Notebook Samsung', 5100))