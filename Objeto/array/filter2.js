Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++ ) {
        if (callback(this[i], i, this)){
        newArray.push(this[i]) 
         }
     }

     return newArray
}




const produtos = [
    {nome: 'Headphone', preco: 199, fragil: true},
    {nome: 'Notebook', preco: 4100, fragil: true},
    {nome: 'MacBook', preco: 5600, fragil: true},
    {nome: 'Garrafa Pacco', preco: 299, fragil: false}

]

console.log(produtos.filter2(function(p){
    return true
}))
    const caro = produto => produto.preco >= 500
    const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))