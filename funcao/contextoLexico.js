const valor = 'Global'

function minhaFunction(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()