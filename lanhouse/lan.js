//entrada 

const frm = document.querySelector("form")
const resp = document.querySelector("h2")

// processamento 

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const novoValor = Math.ceil(tempo / 15)
    const total = (valor * novoValor)

    resp.innerText = `Valor a pagar: R$ ${total}`

    e.preventDefault()

})