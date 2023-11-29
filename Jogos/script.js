/*Função do menu mobile*/

function descerMenu() {
    let x = document.getElementById("meuTitulo");
    if (x.className === "titulo") {
        x.className += " responsive";
    } else {
        x.className = "titulo";
    }
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


