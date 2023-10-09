let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'João'])
})

function primeiroElemento(array) {
    return array[0]

}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'João'])
})

     .then(primeiroElemento)
     .then(primeiraLetra)
     .then(letraMinuscula)
     .then(console.log)