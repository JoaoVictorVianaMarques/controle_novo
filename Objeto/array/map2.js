const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 14.45 }',
    '{ "nome": "Kit de lapís", "preco": 41.45 }',
    '{ "nome": "Caneta", "preco": 6.45 }'

]

//Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)