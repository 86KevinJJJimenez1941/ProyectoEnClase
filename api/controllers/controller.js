
export async function buscarPokemon() {
    let data = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let dataParseada = await data.json();
    console.log(dataParseada);

    let arrayDePokemones = [];
    for (let i = 0; i < dataParseada.results.length; i++) {
        const pokemon = dataParseada.results[i];

        //console.log("i = ", i);
        //console.log("Pokemon que estamos interando: ", pokemon.url)
        let pokemonData = await fetch(pokemon.url);
        let pokemonParseado = await pokemonData.json();

        let pokemonFormat = {
            id: pokemonParseado.id,
            nombre: pokemonParseado.name,
            tipo: pokemonParseado.types,
            imagen: pokemonParseado.sprites.other.dream_world.front_default


        }
        arrayDePokemones.push(pokemonFormat)
    }
    return arrayDePokemones;
}

buscarPokemon();