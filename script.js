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
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"
    setTimeout(mostrarSlides, 3000)
}

