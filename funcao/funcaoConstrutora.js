function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let VelocidadeAtual = 0

     //metodo publico
  this.acelerar = function () {
    if (VelocidadeAtual + delta <= velocidadeMaxima){
        VelocidadeAtual += delta
    } else {
        VelocidadeAtual = velocidadeMaxima

        }
    }
      //metodo publico
  this.getVelocidadeAtual =  function () {
    return VelocidadeAtual
    }

 }

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro (350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof Ferrari)