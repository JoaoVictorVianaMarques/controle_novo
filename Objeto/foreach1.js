const aprovados = ['Agatha', 'José', 'Ricardo', 'Clara']

aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)