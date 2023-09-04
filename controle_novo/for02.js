const notas = [4.1, 8.5, 6.2, 4.6, 6.3]
for(i in notas){
  console.log(i, notas[i])
}
const pessoa = {
   nome:'Maria',
   sobrenome:'Da Silva',
   idade:14,
   peso:64
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)