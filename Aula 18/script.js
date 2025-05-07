let imgPokemon = document.querySelector("#imgPoke");
let formPoke = document.querySelector("#form");
let inputF = document.querySelector("#input");
let idPoke = document.querySelector("#idPokemon");
let nomePoke = document.querySelector("#nomePokemon");
let tipoUm = document.querySelector("#tipo1");
let tipoDois = document.querySelector("#tipo2");
let habilidadePoke = document.querySelector("#habilidade");
let pesoPoke = document.querySelector("#peso");
let alturaPoke = document.querySelector("#altura");
let btnV = document.querySelector("#btnVoltar");
let btnP = document.querySelector("#btnProximo");

let numeroPokedex = 1;


const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    if (!dataPokemon) return;

    imgPokemon.src = dataPokemon.sprites.front_default;
    nomePoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id;
    tipoUm.innerHTML = dataPokemon.types[0].type.name;
    tipoDois.innerHTML = dataPokemon.types[1] ? dataPokemon.types[1].type.name : "";
    habilidadePoke.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = (dataPokemon.weight / 10).toFixed(1) + " kg";
    alturaPoke.innerHTML = (dataPokemon.height / 10).toFixed(1) + " m";
}

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
});

btnV.addEventListener("click", () => {
    if (numeroPokedex > 1) {
        numeroPokedex--;
        showPokemon(numeroPokedex);
    }
});

btnP.addEventListener("click", () => {
    if (numeroPokedex < 1000) {
        numeroPokedex++;
        showPokemon(numeroPokedex);
    }
});

