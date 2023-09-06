const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velPermitida = Number(frm.inVelocidade.value)
    const velCondutor = Number(frm.inCondutor.value)

    const multa = velPermitida * 1.2;

    if (velCondutor < velPermitida) {
        resp.innerText = "Situação: Sem multa"
    }

    else if (velCondutor <= multa) {
        resp.innerText = "Situação: Multa Leve"
    }

    else {
        resp.innerText = "Situação: Multa grave"
    }
});