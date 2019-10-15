
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon'

const FetchChar = () => {
  return(
    fetch(ENDPOINT)
      .then(response => response.json())
  )
}

export {FetchChar}; 