// import { trackPromise } from 'react-promise-tracker';

// class PokemonService {

//   POKEMONS_TO_FETCH = 25;
//   LIMIT_TO_EVOLUTIONS = 250;
//   ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'
//   ENDPOINT2 = 'https://pokeapi.co/api/v2/evolution-chain/'


//   findAllPokemons(maxPokemons = this.POKEMONS_TO_FETCH) {
//       return fetch(`${this.ENDPOINT}?limit=${maxPokemons}`)
//       .then(response => response.json())
//       .catch(error => console.error(error))
//   }

//   findPokemon(pokemonLite) {
//     return fetch(pokemonLite.url)
//     .then(response => {
//         return response.json()
//         .then(pokemon => {
//             const Types = [];
//             for(let type of pokemon.types){
//               Types.push(type.type.name);
//               }
//             const poke = {
//               name: pokemon.name,
//               image : pokemon.sprites.front_default,
//               Types : Types,
//               id : pokemon.id
//             }
//             return poke;
//         });
//     })
//     .catch(error => console.error(error))
//   }

//   findAllEvolutions(evolutionLimit = this.LIMIT_TO_EVOLUTIONS) {
//     return fetch(`${this.ENDPOINT2}?limit=${evolutionLimit}`)
//     .then(response => response.json())
//     .catch(error => console.error(error))
//   }

//   findEvolutions(evolutionUrl) {
//     return fetch(evolutionUrl.url)
//     .then(response => {return response.json()})
//     .then(pokemonEvolution => {
//       let pokeEvolution = {
//         name: pokemonEvolution.chain.species.name,
//         firstEv : '',
//         secondEv :'',
//       }
//       if (pokemonEvolution.chain.evolves_to[0]){
//         pokeEvolution = {
//           name: pokemonEvolution.chain.species.name,
//           firstEv : pokemonEvolution.chain.evolves_to[0].species.name,
//           secondEv :'',
//         }
//         if(pokemonEvolution.chain.evolves_to[0].evolves_to[0]){
//           pokeEvolution = {
//             name: pokemonEvolution.chain.species.name,
//             firstEv : pokemonEvolution.chain.evolves_to[0].species.name,
//             secondEv :pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name,
//           }
//         }
//       }
//       else{
//         pokeEvolution = {
//           name: pokemonEvolution.chain.species.name,
//           firstEv : '',
//           secondEv :'',
//         }
//       }
//       return pokeEvolution; 
//     })
//     .catch(error => console.error(error))
//   }

//   filterPokemons(name) {
//       //return Promise<List<Pokemon>>
//   }
// }

// export default PokemonService;

class PokemonService {

  POKEMONS_TO_FETCH = 25;
  ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
  ENDPOINT2 = 'https://pokeapi.co/api/v2/evolution-chain/';
  LIMIT_TO_EVOLUTIONS = 250;

  findAllPokemons(maxPokemons = this.POKEMONS_TO_FETCH) {
    return fetch(`${this.ENDPOINT}?limit=${maxPokemons}`)
      .then(response => response.json());
  }

  findPokemon(pokemonLite, index) {
    return fetch(pokemonLite.url)
      .then(response => {
        return response.json()
          .then(pokemon => {
            const Types = [];
            for (let type of pokemon.types) {
              Types.push(type.type.name);
            }
            const poke = {
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              Types: Types,
              id: pokemon.id,
              height: pokemon.height,
              default: pokemon.is_default,
              exp: pokemon.base_experience,
              allImages: pokemon.sprites,
              Pokeindex: index
            }
            return poke;
          });
      });
  }
  findAllEvolutions(evolutionLimit = this.LIMIT_TO_EVOLUTIONS) {
    return fetch(`${this.ENDPOINT2}?limit=${evolutionLimit}`)
      .then(response => response.json())
      .catch(error => console.error(error))
  }
  findEvolutions(evolutionUrl) {
    return fetch(evolutionUrl.url)
      .then(response => { return response.json() })
      .then(pokemonEvolution => {
        let pokeEvolution = {
          name: pokemonEvolution.chain.species.name,
          firstEv: '',
          secondEv: '',
        }
        if (pokemonEvolution.chain.evolves_to[0]) {
          pokeEvolution = {
            name: pokemonEvolution.chain.species.name,
            firstEv: pokemonEvolution.chain.evolves_to[0].species.name,
            secondEv: '',
          }
          if (pokemonEvolution.chain.evolves_to[0].evolves_to[0]) {
            pokeEvolution = {
              name: pokemonEvolution.chain.species.name,
              firstEv: pokemonEvolution.chain.evolves_to[0].species.name,
              secondEv: pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name,
            }
          }
        }
        else {
          pokeEvolution = {
            name: pokemonEvolution.chain.species.name,
            firstEv: '',
            secondEv: '',
          }
        }
        return pokeEvolution;
      })
      .catch(error => console.error(error))
  }
  filterPokemons(name) {
    //return Promise<List<Pokemon>>
  }
}

export default PokemonService;