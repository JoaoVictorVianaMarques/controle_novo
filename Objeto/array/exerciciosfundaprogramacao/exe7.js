//Crie uma função que receba quatro números como parâmetros(numero, minimo, maximo, inclusivo)e
//retorne se o parâmetro numero(o primeiro) está entre minimo e maximo. Quando o parâmetro
//inclusivo for true, tenha "entre" como inclusivo,ou seja,considerando se numero é igual a minimo 
//ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false,
//portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

function estaEntre (numero, minimo, maximo, inclusivo = false){
     if(inclusivo) return numero >= 160 && numero <= 500

     return numero > 160 && numero < 500



}

console.log(estaEntre(100))