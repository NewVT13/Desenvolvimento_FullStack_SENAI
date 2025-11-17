const readlineSync = require('readline-sync');
function ordenarCrescente (a,b){
    return a - b
}

var idades = []
var contadorIdades = 1
var somaIdades = 0

for(contadorIdades; contadorIdades <= 10; contadorIdades++){
    var idade = readlineSync.questionInt("Digite a idade de nº" + contadorIdades + ": ")
    idades.push(idade)
    somaIdades = somaIdades + idade
}

idades.sort(ordenarCrescente)
var tamanhoArrayIdades = idades.length
console.log("A menor idade é : " + idades[0])
console.log("A maior idade é : " + idades[tamanhoArrayIdades -1])

var media = somaIdades / tamanhoArrayIdades
console.log("A media das idades e :" + media)

var contadorLoopMenorIdade = 0
var numeroDePessoasMenorIdade = 0
for (contadorLoopMenorIdade; contadorLoopMenorIdade < tamanhoArrayIdades; contadorLoopMenorIdade++){
    if(idades[contadorLoopMenorIdade] < 18) {
        numeroDePessoasMenorIdade++
    }
}