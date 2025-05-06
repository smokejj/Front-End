let nome1 = "";
let cidade = "";

let paragrafo = document.getElementById("demo");

fetch("./JSON/data.json")
.then(response => response.json())
.then(listPessoas =>{
    nome1 = listPessoas.pessoa[0].nome;
    cidade = listPessoas.pessoa[0].local.cidade;

    paragrafo.innerHTML = "Primeiro registro do array contém dados do <b>\"" + nome1 + "\" de </b>" + cidade + "</b>";
})

