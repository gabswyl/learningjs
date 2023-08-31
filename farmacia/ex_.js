//entrada

const frm = document.querySelector("form")
const resp1 = document.querySelector("h4")
const resp2 = document.querySelector("h3")

//processamento 

frm.addEventListener("submit", (e) => {
    const remedio = frm.inMedicamento.value
    const preco = Number(frm.inPrice.value)

    const produto = remedio
    const entrada =  preco * 2

    //saida

    resp1.innerText = `Promoção de: ${produto}`
    resp2.innerText = `Leve 2 por apenas: ${entrada}`

    e.preventDefault()
})




