/*Função do menu mobile*/

function descerMenu() {
    let x = document.getElementById("meuTitulo");
    if (x.className === "titulo") {
        x.className += " responsive";
    } else {
        x.className = "titulo";
    }
}

/*Função do Slideshow*/

let slideIndex = 0
mostrarSlides()

function mostrarSlides() {
    let i
    let slides = document.getElementsByClassName("meuSlide")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(mostrarSlides, 3000)
}

/*Função do timer*/

let contagemData = new Date("2023-10-25 21:20:00").getTime()

let contagemFinal = setInterval(function () {

    let agora = new Date().getTime()

    let distancia = contagemData - agora

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24))
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000)

    document.getElementById("timer").innerHTML = dias + "d " + horas + "h "
        + minutos + "m " + segundos + "s "

    if (distancia < 0) {
        clearInterval(contagemFinal)
        document.getElementById("timer").innerHTML = "EXPIRADO"
    }
})

/*Função do slider dos produtos*/

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

/*Função das Tabs*/

function abrirAba(evt, nomeDaAba) {
    let i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" ativo", "")
    }

    document.getElementById(nomeDaAba).style.display = "block"
}
document.getElementById("defaultOpen").click()


