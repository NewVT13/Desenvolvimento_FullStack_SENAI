var texto = "Contato Joana, CPF:506.967.532-23: A empresax, voces tem um funcionario ladrão que tentou burlar o sistema de segurança para que a empresax fosse difamada."
var cpfRegex = /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g;
/*
if (texto.includes("empresax") && texto.includes("ladrão") &&
    texto.includes("burlar")) {
    textoCorrigido = texto.replaceAll("empresax", "[Razão Social]").replaceAll("ladrão", "[Mau-caráter]").replaceAll("burlar", "[Adulterar]")
    console.log(textoCorrigido)
} else {
    console.log(texto)
}
*/

function corrigirTexto (texto) {
    if (texto.includes("empresax") && 
    texto.includes("ladrão") &&
    texto.includes("burlar")) {
    textoCorrigido = texto.replaceAll("empresax", "[Razão Social]")
    .replaceAll("ladrão", "[Mau-caráter]")
    .replaceAll("burlar", "[Adulterar]")

    return textoCorrigido
} else {
    return texto
}
}

console.log(corrigirTexto(texto.replaceAll(cpfRegex, "[CPF]")))