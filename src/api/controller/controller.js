export async function buscarPokemon() {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=25`);
  let dataParseada = await data.json();

  let arrayDePokemones = [];

  for (let i = 0; i < dataParseada.results.length; i++) {
    const pokemon = dataParseada.results[i];
    let pokemonData = await fetch(pokemon.url);
    let pokemonParseado = await pokemonData.json();

    let pokemonFormateado = {
      imagen: pokemonParseado.sprites.other.dream_world.front_default,
      id: pokemonParseado.id,
      nombre: pokemonParseado.name,
      tipos: pokemonParseado.types,
    };
    arrayDePokemones.push(pokemonFormateado);
  }

  return arrayDePokemones;
}

export async function buscarPokemonPorNombre(nombre) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  let pokemonParseado = await data.json();

  let pokemonFormateado = {
    id: pokemonParseado.id,
    nombre: pokemonParseado.name,
    tipos: pokemonParseado.types,
    imagen: pokemonParseado.sprites.other.dream_world.front_default,
  };
  return pokemonFormateado;
}
