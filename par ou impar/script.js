const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumber.value)
    let pares
    
    if (numero % 2) {
        resp.innerText = "Sua nota é impar"
    }
    else {
        resp.innerText = "Sua nota é par"
    }
    

})