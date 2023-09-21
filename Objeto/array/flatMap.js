const escola = [{
    nome: 'Turma J1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 6.3
    }]
    }, {
    nome: 'Turma J2',
    alunos: [{
        nome: 'Roberto',
        nota: 7.5
    }, {
        nome: 'Rafaela',
        nota: 5.5
    }]

       }]
    
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 6.3 ], [ 7.5, 5.5 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
 const notas2 = escola.flatMap(getNotasDaTurma)
 console.log(notas2)
    






