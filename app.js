let pokemonId = document.getElementById('selected-pokemon-id')
let pokemonName = document.getElementById('selected-pokemon-name')
let pokemonType = document.getElementById('selected-pokemon-type')
let pokemonImg = document.getElementById('selected-pokemon-img')


var fetchPokemon = (pokemonIDRequest) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIDRequest}`
    fetch(apiUrl)
        .then(response => response.json())
        .then(pokemon => {
            pokemonId.innerHTML = pokemon.id;
            pokemonName.innerHTML = pokemon.name;
            pokemonType.innerHTML = pokemon.types.map(typeInfo => typeInfo.type.name);
            pokemonImg.setAttribute('src', pokemon.sprites.front_default);
        })
}

let searchFromNumber = (gotNumber) => {
    gotNumber = document.getElementById('pokemon-number');
    fetchPokemon(gotNumber.value);
}