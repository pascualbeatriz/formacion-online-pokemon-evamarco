
const ENDPOINT = 'https://pokeapi.co/api/v2/evolution-chain/?limit=250'

const FetchEvolutions = () => {
  let pokemonEvolution = []
  Promise.all([
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data=> {
      console.log(data.results)
      for(let item of data.results){
        fetch(item.url)
        .then(response => response.json())
        .then(pokemonEvo => {
          const pokemonEvolutionInfo = 
              {id: pokemonEvo.id, 
                firstEvo : pokemonEvo.chain.evolves_to[0].species.name, 
                secondEvo: pokemonEvo.chain.evolves_to[0].evolves_to[0].species.name
              }
              pokemonEvolution.push(pokemonEvolutionInfo)
        })
        .catch(err => console.log('Error message:', err.statusText));
      }
    })
    .catch(err => console.log('Error message:', err.statusText))
  ])
  return pokemonEvolution
  
}


export {FetchEvolutions}; 