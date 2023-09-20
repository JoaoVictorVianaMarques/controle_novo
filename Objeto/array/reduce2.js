const alunos = [
    {nome: 'João', nota: 7.1, bolsista: true },
    {nome: 'Maria',  nota: 4.1,  bolsista: false },
    {nome: 'Joaquim',  nota: 5.6, bolsista: true },
    {nome: 'Roberto', nota: 9.9, bolsista: false }
]
// Desafio 1: Todos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))