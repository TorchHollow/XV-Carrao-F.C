/*Função do menu mobile*/

function descerMenu() {
    let x = document.getElementById("meuTitulo");
    if (x.className === "titulo") {
        x.className += " responsive";
    } else {
        x.className = "titulo";
    }
}

//Galeria de imagem

let imagemCheiaBox = document.getElementById("imagemCheiaBox")
let imagemCheia = document.getElementById("imagemCheia")

function abrirImagemCheia(ima) {
    imagemCheiaBox.style.display = "flex"
    imagemCheia.src = ima
}

function fecharImagemCheia() {
    imagemCheiaBox.style.display = "none"
}


