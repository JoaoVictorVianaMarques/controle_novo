const alunos = [
    {nome: 'João', nota: 7.1, bolsista: true },
    {nome: 'Maria',  nota: 4.1,  bolsista: true },
    {nome: 'Joaquim',  nota: 5.6, bolsista: false },
    {nome: 'Roberto', nota: 9.9, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)