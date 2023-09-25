//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
//quantidade especificada no parâmetro.

function simboloMais(quantidade){
    var resultado = ''

    for(let i = 0;
       i < quantidade;
       i++)
       resultado += '+'

    return resultado
}
 console.log(simboloMais(4))
 console.log(simboloMais(7))
