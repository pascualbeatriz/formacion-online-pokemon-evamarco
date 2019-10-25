
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=250'

const FetchPokemon = () => {
  let pokemons = []
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data=> {
      const pokeUrl = data.results.map(item => {return(pokemons.push({name : item.name, url : item.url}))})
    })
    .catch(err => console.log('Error message:', err.statusText))

}


export {FetchPokemon}; 