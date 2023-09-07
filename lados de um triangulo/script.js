const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const primeiroLado = Number(frm.inLADO1.value)
    const segundoLado = Number(frm.inLADO2.value)
    const terceiroLado = Number(frm.inLADO3.value)

    if (primeiroLado == segundoLado && segundoLado == terceiroLado) {
        resp1.innerText = "Lados podem formar um Triangulo"
        resp2.innerText = "Tipo: Equilatero (3 lados iguais)"
    }

    else if (primeiroLado == terceiroLado) {
        resp1.innerText = "Lados podem formar um Triangulo"
        resp2.innerText = "Tipo: Isóceles (2 lados iguais)"
    }

    else {
        resp1.innerText = "Lados podem formar um Triangulo"
        resp2.innerText = "Tipo: Escaleno (3 valores diferentes)"
    }
})
