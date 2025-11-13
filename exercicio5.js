const readlineSync = require('readline-sync');

var filaAtendimento = []

while (true) {
    
    console.log("1) Acrescentar pessoas na fila\n" + "2) Chamar um nome\n" + "3) Exibir fila de atendimento\n"
       + "4) Desistencia\n" + "5) Prioridade\n" + "6) Desligar o programa\n"
     )
    var numeroAtendimento = readlineSync.questionInt("Digite qual operacao deseja fazer?")
    if (numeroAtendimento == 1) {
        var nome = readlineSync.question("Qual é o nome da pessoa? ")
        filaAtendimento.push(nome)
        console.log(filaAtendimento)
    } else if (numeroAtendimento == 2){
        filaAtendimento.shift()
    }
    else if (numeroAtendimento == 3){
        console.log(filaAtendimento)
    }
    else if(numeroAtendimento == 4){
        filaAtendimento.pop()
    }
    else if(numeroAtendimento == 5) {
        var nome = readlineSync.question("Qual o nome do cliente prioridade? ")
        filaAtendimento.unshift(nome)
    }
    else if(numeroAtendimento == 6){
        break
    } else{
        console.log("Escolha uma opcao valida! ")
    }
}