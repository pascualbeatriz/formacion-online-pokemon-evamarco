const getPokemonDetal = (url) =>  {
  fetch(url)
  .then(response => response.json())
  .then(pokemon => {
    const pokemonTypes = [];
    for(let type of pokemon.types){
      pokemonTypes.push(type.type.name);
      }
    const poke = {
      PokemonName: pokemon.name,
      PokemonImage : pokemon.sprites.front_default,
      PokemonTypes : pokemonTypes,
      PokemonId : pokemon.id 
    }
  return poke
  })
  .catch(err => console.log('Error message:', err.statusText));
}

export default getPokemonDetal; 