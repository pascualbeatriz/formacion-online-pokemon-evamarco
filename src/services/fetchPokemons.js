
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=250'

const FetchPokemons = () => {
  return(
    fetch(ENDPOINT)
      .then(response => response.json())
  )
}

export {FetchPokemons}; 