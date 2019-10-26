import React from 'react';
import FetchPokemon from '../services/fetchPokemons';
import PokemonList from './PokemonList'; 
import PokemonFilters from './PokemonFilters'; 
import './App.scss'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pokemons:[],
      pokemonEvolutions:[],
      InputNameSearch: ''
    }
    this.getInputValue = this.getInputValue.bind(this); 
  }
  componentDidMount(){
    this.getCharacter();
    // this.getEvolutions();
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value; 
    this.setState({InputNameSearch: inputValue})
  }
  getCharacter(){
    FetchPokemon()
    .then(data=> {
      const pokeData = data.results.map(item => {return({PokeName : item.name, PokeUrl: item.url})})
      return (pokeData)
    })
    .then(info =>
  {    this.setState({
        pokemons: info
      })}
    )
    .catch(err => console.log('Error message:', err.statusText))

  } 
  getEvolutions(){
   const pokemonEvolutions = FetchEvolutions()
   this.setState( { 
    pokemonEvolutions: pokemonEvolutions
  })
  }
  render() {
    const {pokemons, InputNameSearch} = this.state;
    const {getInputValue} = this
    return (
      <div className="App">
        <header className =" app__header">
          <h1 className="app__title">Pokedesk</h1>
          <PokemonFilters  
            getInputValue = {getInputValue} 
            InputNameSearch ={InputNameSearch}
          />
        </header>
        <PokemonList 
          pokemons = {pokemons}  
          InputNameSearch ={InputNameSearch}
          />
      </div>
    );
  }
}

export default App;
