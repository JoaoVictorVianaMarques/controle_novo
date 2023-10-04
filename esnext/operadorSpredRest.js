// operador...rest(juntar/spread(espelhar))
// usar rest com parâmetro de função


// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1452.90 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Paulo', 'Matheus']
const grupofinal = ['Maria',...grupoA,'Rafaela']
console.log(grupofinal)