import React from 'react';
import {FetchPokemon} from '../services/fetchPokemons';

import {FetchEvolutions} from '../services/fetchEvolutions';
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
    this.getEvolutions();
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value; 
    this.setState({InputNameSearch: inputValue})
  }
  getCharacter(){
    const pokemons = FetchPokemon()
    this.setState({pokemons: pokemons})
  } 
  getEvolutions(){
   const pokemonEvolutions = FetchEvolutions()
   this.setState( { 
    pokemonEvolutions: pokemonEvolutions
  })
  }
  render() {
    const {pokemons, InputNameSearch, pokemonEvolutions} = this.state;
    const {getInputValue} = this
    return (
      <div className="App">
        <header className =" app__header">
          <h1 className="app__title">Pokedesk</h1>
          <PokemonFilters  getInputValue = {getInputValue} InputNameSearch ={InputNameSearch}/>
        </header>
        <PokemonList 
          pokemons = {pokemons}  
          pokemonEvolutions = {pokemonEvolutions} 
          InputNameSearch ={InputNameSearch}

          />
      </div>
    );
  }
}

export default App;
