//entrada

const frm = document.querySelector("form")
const resp = document.querySelector("#inText")
const resp1 = document.querySelector("#inText2")


//processamento 

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const price = frm.inPreco.value

    const nome = produto 
    const totaldoPreco = (price * 2) + 3

    //saida

    const resultado = totaldoPreco

    resp.innerText = `${nome} - Promoção: Leve 3 por R$ ${resultado}`
    resp1.innerText = `O 3° produto custa apenas por R$: 3,00`
    
    e.preventDefault()
})