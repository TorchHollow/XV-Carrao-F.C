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

let contagemData = new Date("2023-09-13 21:30:00").getTime()

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


