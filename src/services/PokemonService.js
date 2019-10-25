

class PokemonService {

  POKEMONS_TO_FETCH = 25;
  LIMIT_TO_EVOLUTIONS = 250;
  ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'
  ENDPOINT2 = 'https://pokeapi.co/api/v2/evolution-chain/'
  abortController = new AbortController()

  findAllPokemons(maxPokemons = this.POKEMONS_TO_FETCH) {
      return fetch(`${this.ENDPOINT}?limit=${maxPokemons}`, {signal: this.abortController.signal })
      .then(response => response.json())
      .catch(error => console.error(error))
  }

  findPokemon(pokemonLite) {
      return fetch(pokemonLite.url, {signal: this.abortController.signal })
      .then(response => {
          return response.json()
          .then(pokemon => {
              const Types = [];
              for(let type of pokemon.types){
                Types.push(type.type.name);
                }
              const poke = {
                name: pokemon.name,
                image : pokemon.sprites.front_default,
                Types : Types,
                id : pokemon.id
              }
              return poke;
          }
          );
      })
      .catch(error => console.error(error))
  }

  findAllEvolutions(evolutionLimit = this.LIMIT_TO_EVOLUTIONS) {
    return fetch(`${this.ENDPOINT2}?limit=${evolutionLimit}`, {signal: this.abortController.signal })
    .then(response => response.json())
    .catch(error => console.error(error))
  }

  findEvolutions(evolutionUrl) {
    return fetch(evolutionUrl.url, {signal: this.abortController.signal })
    .then(response => {return response.json()})
    .then(pokemonEvolution => {
      let pokeEvolution = {
        name: pokemonEvolution.chain.species.name,
        firstEv : '',
        secondEv :'',
      }
      if (pokemonEvolution.chain.evolves_to[0]){
        pokeEvolution = {
          name: pokemonEvolution.chain.species.name,
          firstEv : pokemonEvolution.chain.evolves_to[0].species.name,
          secondEv :'',
        }
        if(pokemonEvolution.chain.evolves_to[0].evolves_to[0]){
          pokeEvolution = {
            name: pokemonEvolution.chain.species.name,
            firstEv : pokemonEvolution.chain.evolves_to[0].species.name,
            secondEv :pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name,
          }
        }
      }
      else{
        pokeEvolution = {
          name: pokemonEvolution.chain.species.name,
          firstEv : '',
          secondEv :'',
        }
      }
      return pokeEvolution; 
    })
    .catch(error => console.error(error))
  }

  filterPokemons(name) {
      //return Promise<List<Pokemon>>
  }
  componentWillUnmount(){
    this.abortController.abort()
  }
}

export default PokemonService;