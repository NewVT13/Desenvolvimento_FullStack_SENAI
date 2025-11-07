var texto = "A empresax, voces tem um funcionario ladrão que tentou burlar o sistema de segurança para que a empresax fosse difamada."

if (texto.includes("empresax") && texto.includes("ladrão") &&
    texto.includes("burlar")) {
    textoCorrigido = texto.replaceAll("empresax", "[Razão Social]").replaceAll("ladrão", "[Mau-caráter]").replaceAll("burlar", "[Adulterar]")
    console.log(textoCorrigido)
} else {
    console.log(texto)
}


