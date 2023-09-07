const primeiroPreco = 1.00;
const segundoPreco = 1.75;
const terceiroPreco = 3.00;

const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const trocodoPreco = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valor = Number(frm.inParquimetro.value)


    if (valor <= segundoPreco) {
        resp.innerText = "Tempo: 30min"
        const resultadoTroco = valor - primeiroPreco
        trocodoPreco.innerText = `Troco R$: ${resultadoTroco}`
    }

    else if (valor <= terceiroPreco) {
        resp.innerText = "Tempo: 60min"
        const resultadoTroco = valor - segundoPreco
        trocodoPreco.innerText = `Troco R$: ${resultadoTroco}`

    }

    else {
        resp.innerText = "Tempo: 120min"
        const resultadoTroco = valor - terceiroPreco
        trocodoPreco.innerText = `Troco R$: ${resultadoTroco}`
    }

})
