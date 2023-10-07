const frm = document.querySelector("form");
const respClube = document.querySelector("span");
const respLista = document.querySelector("pre");
const addClube = document.querySelector("#inAdd");
const listarClubesButton = document.querySelector("#inLista"); 
const show = document.querySelector("#inMostrar")

let todosClubes = [];
let i = 0;


// adicionar clube 
addClube.addEventListener("click", (e) => {
    e.preventDefault();
    const clube = inClube.value

    todosClubes.push(clube);
    listarClubes();
});

function listarClubes() {
    let listClub = ""; 

    for (let i = 0; i < todosClubes.length; i++) {
        listClub += `${i + 1}. ${todosClubes[i]}\n`;
    }

    respLista.innerText = listClub;
}


listarClubesButton.addEventListener("click", listarClubes);

// mostrar tabela

show.addEventListener("click", (e) => {
    e.preventDefault();

    if (todosClubes.length % 2 === 0) {
        const pares = [];
        for (let i = 0; i < todosClubes.length; i += 2) {
            const par = [todosClubes[i], todosClubes[i + 1]];
            pares.push(par.join(" x "));
        }
        respLista.innerText = pares.join("\n");
    } else {
        alert("Adicione mais um clube para listar tabela!")
        addClube.focus();
    }
})

