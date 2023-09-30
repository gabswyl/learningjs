// pegue o valor do numero  e adicione-o no array 

// apos de ter adicionado no array 

// verifique se possui mais de 2 valores, se não houver 
// não poderá verfificar a ordem, será necessário colocar mais valores 

// se tiver mais de 2 valores, iremos fazer comparacao do primeiro array ao segundo pra ver se é ordem crescente
// se não, o sistema avisara que nao é uma ordem crescente 




const frm = document.querySelector("form");
const resp = document.querySelector("h2");
const atencao = document.querySelector("h3");
let lista = [];


function add() { // adiciona numeros no array 
    const valor = frm.inNumber.value;

    for (let i = 0; i < valor.length; i++) {
        lista.push(valor[i]);
    }

    resp.innerText = `Números: ${lista}`;
}

function verificarOrdem(lista) { // verifica ordem
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            return false;
        }
    }
    return true;
}

frm.addEventListener("submit", (e) => { // chamada do envio verificar ordem
    e.preventDefault();
    
    if (verificarOrdem(lista)) {
        atencao.innerText = `Os valores estão em ordem crescente`;
    } else {
        atencao.innerText = `Os valores não estão em ordem crescente`;
    }
});

function limparNumeros() { // limpa os elementos do array
    const resposta = lista
    lista = []

    resp.innerText = `Números: ${lista}`;

}