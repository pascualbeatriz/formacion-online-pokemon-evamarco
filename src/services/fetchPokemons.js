
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=250'

const FetchPokemon = () => {
    fetch(ENDPOINT)
    .then(response => response.json())
}


export default FetchPokemon; 