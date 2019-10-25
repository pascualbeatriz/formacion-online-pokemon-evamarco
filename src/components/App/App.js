import React from 'react';
import {FetchPokemons} from '../../services/fetchPokemons';
import {FetchEvolution} from '../../services/fetchEvolutions';
import PokemonList from '../PokemonList/PokemonList'; 
import Filters from '../PokemonFilters/PokemonFilters'; 
import {Route, Switch} from 'react-router-dom';
import './App.scss'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pokemons:[],
      pokemonsEvo:[],
      InputNameValue: ''
    }
    this.getInputValue = this.getInputValue.bind(this); 
  }
  componentDidMount(){
    this.getPokemons();
    this.getEvolutions();
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value; 
    this.setState({InputNameValue: inputValue})
  }
  getPokemons(){
    FetchPokemons()
    .then(data=> {
      for(let item of data.results){
        fetch(item.url)
        .then(response => response.json())
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
          this.setState( { 
            pokemons: [...this.state.pokemons, poke]
          })
        })
      }
    })
  }
  getEvolutions(){
    FetchEvolution()
    .then(data=> {
      for(let item of data.results){
        fetch(item.url)
        .then(response => response.json())
        .then(pokemon => {
          if(pokemon.chain.evolves_to[0] === undefined){
            const pokeEvolution = {
              name: pokemon.chain.species.name,
              id: pokemon.id,
              firstEv : '',
            }
            this.setState( { 
              pokemonsEvo: [...this.state.pokemonsEvo, pokeEvolution]
            })      
          }
          else if(pokemon.chain.evolves_to[0].evolves_to[0] !== undefined){
            const pokeEvolution = {
              name: pokemon.chain.species.name,
              id: pokemon.id,
              firstEv : pokemon.chain.evolves_to[0].species.name,
              secondEv :pokemon.chain.evolves_to[0].evolves_to[0].species.name
            }
            this.setState( { 
              pokemonsEvo: [...this.state.pokemonsEvo, pokeEvolution]
            })
          }
          else{
            const pokeEvolution = {
              name: pokemon.chain.species.name,
              id: pokemon.id,
              firstEv : pokemon.chain.evolves_to[0].species.name,
       
            }
            this.setState( { 
              pokemonsEvo: [...this.state.pokemonsEvo, pokeEvolution]
            })
          }
        })
      }
    })
  }

  render() {
    const {pokemons, InputNameValue, pokemonsEvo} = this.state;
    const {getInputValue} = this
    return (
      <div className = "App">
        <header className = " app__header">
          <h1 className = "app__title">Pokedesk</h1>
          <Filters  getInputValue = {getInputValue} InputNameValue = {InputNameValue}/>
        </header>
        <PokemonList pokemons = {pokemons}  pokemonsEvo = {pokemonsEvo}InputNameValue = {InputNameValue}/>
      </div>
    );
  }
}


export default App;
