
export function saludar(){
    console.log("hola soy kevin")
}

export async function buscarPokemon(){
    let data = await fetch("https://pokeapi.co/api/v2/pokemon");
    let newData = await data.json();
    let newDataxx = newData.results[0]
    console.log("data", newDataxx)
}