import { buscarPokemon, buscarPokemonPorNombre } from "./controller/controller.js";
let root = document.getElementById("root");

async function mostrarPokemones() {
  let arrayDePokemones = await buscarPokemon();
  let html = "";
  arrayDePokemones.forEach((pokemon) => {
    let cardPokemon = `<div class='card'>
                              <span>${pokemon.nombre}</span>
                              <img class='card-image' src='${pokemon.imagen}'/>
                              <span>${pokemon.id}</span>
                              <span>${pokemon.tipos[0].type.name}</span>
                          </div>`;
    html += cardPokemon;
  });

  root.innerHTML += html;
}
mostrarPokemones();

let botonDeBusqueda = document.getElementById("buscar-pokemon");
let barraDeBusqueda = document.getElementById("barra-pokemon");
botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault();
  let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value);
  let cardPokemon = `<div class='card'>
                            <span>${pokemonBuscado.nombre}</span>
                            <span>${pokemonBuscado.id}</span>
                            <span>${pokemonBuscado.tipos[0].type.name}</span>
                            <img class='card-image' src='${pokemonBuscado.imagen}'/>
                      </div>`;
  root.innerHTML = cardPokemon;
});
