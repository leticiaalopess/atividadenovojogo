const readline = require('readline')
var cont = 1


console.log('Oiie, seja Bem-Vindo(a)')
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})


let numero =   Math.floor(Math.random() * 100 + 1)
function perguntarContinuação(){
    rl.question('Digite um numero: ', (resposta) => {


      
       switch(true){
       case (resposta == numero):
           console.log('Você acertou')
           console.log('Você tentou ' + cont + " vezes")
           rl.close()
           break
          
       case resposta != numero:
           if(cont < 15){
           switch(true){
               case (resposta < numero && resposta < 101):
                   console.log('Muito baixo')
                   cont++
                   break
               case (resposta > numero && resposta < 101):
                   console.log('Muito alto')
                   cont++
                   break
       default:
           console.log(' O numero tem que ser de 1 a 100')
           }
           perguntarContinuação()
       }else{
            console.log('Você atingiu as tentativas')
            rl.close()
   }
       }
})
}
perguntarContinuação()

