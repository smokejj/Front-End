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
const boxTipo2 = document.getElementById("boxTipo2"); 

let numeroPokedex = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const playCry = (url) => {
    const audio = new Audio(url);
    audio.play().catch(e => { });
};

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    if (!dataPokemon) return;

    imgPokemon.src = dataPokemon.sprites.other.showdown.front_default;
    nomePoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id;

     const tipo1 = dataPokemon.types[0].type.name;
     imgTipo1.src = `./imgType/icons/${tipo1}.svg`;
     tipoUm.innerHTML = tipo1;
     if (dataPokemon.types.length > 1) {
         const tipo2 = dataPokemon.types[1].type.name;
         imgTipo2.src = `./imgType/icons/${tipo2}.svg`;
         tipoDois.innerHTML = tipo2;
         boxTipo2.style.display = "inline"; 
     } else {
         imgTipo2.src = "";
         tipoDois.innerHTML = "";
         boxTipo2.style.display = "none"; 
     }
    habilidadePoke.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = (dataPokemon.weight / 10).toFixed(1) + " kg";
    alturaPoke.innerHTML = (dataPokemon.height / 10).toFixed(1) + " m";
    

    if (dataPokemon.cries && dataPokemon.cries.latest) {
        playCry(dataPokemon.cries.latest);
    }
}

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
    numeroPokedex = inputF.value
})

btnV.addEventListener("click", (event) => {
    if (numeroPokedex > 1) {
        numeroPokedex--
    }
    showPokemon(numeroPokedex);
})

btnP.addEventListener("click", (event) => {
    if (numeroPokedex < 1000) {
        numeroPokedex++
    }
    showPokemon(numeroPokedex);
})