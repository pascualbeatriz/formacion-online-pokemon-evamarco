
const ENDPOINT = 'https://pokeapi.co/api/v2/evolution-chain/?limit=250'

const FetchEvolution = () => {
  return(
    fetch(ENDPOINT)
      .then(response => response.json())
  )
}

export {FetchEvolution}; 