import { buscarPokemon } from "./controllers/controller.js";
let root = document.getElementById("root")

async function render(){
    let pokemons = await buscarPokemon();
    console.log("Estoy en la funcion de busqueda: ", pokemons)
    let html = "";
    pokemons.forEach((pokemon) => {
        let mappPokemons = `<div class="card">
                                <span>${pokemon.nombre}</span>
                                <span>${pokemon.id}</span>
                                <img class="card-image" src="${pokemon.imagen}">
                            </div>` 
        html = root.innerHTML += mappPokemons;
    });

}
render();
//buscarPokemon();