const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = parseInt(frm.inNumero.value)
    let soma = 0;
    let lista = []

    for(let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            soma += i;
            lista.push(i);
        }
    }

    if (soma === numero) {
        resp.innerText = `${numero} é um numero perfeito`
    } else {
        resp.innerText = `${numero} não é um numero perfeito`
    }


    const listadaSoma = lista.join(" + ")
    resp2.innerText = `Soma dos divisores: ${listadaSoma} = ${numero} `

})

