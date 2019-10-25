import React from 'react';
import PokemonService from '../../services/PokemonService';
import Home from '../Home/Home';
import Filters from '../PokemonFilters/PokemonFilters';
import PokemonBigDetail from '../PokemonBigDetail/PokemonBigDetail';
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
    this.pokemonService = new PokemonService();
    this.getInputValue = this.getInputValue.bind(this);
  }
  componentDidMount(){
    this.getPokemons();
    this.getEvolutions();
  }
  componentWillUnmount(){
    this.abortController.abort()
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value;
    this.setState({InputNameValue: inputValue})
  }
  getPokemons(){
    this.pokemonService.findAllPokemons()
    .then(data=> {
      for(let item of data.results){
        this.pokemonService.findPokemon(item)
        .then(pokemon => {
          this.setState( {
            pokemons: [...this.state.pokemons, pokemon]
          })
        })
      }
    })
  }
  getEvolutions(){
    this.pokemonService.findAllEvolutions()
    .then(data=> {
      for(let item of data.results){
        this.pokemonService.findEvolutions(item)
        .then(pokemon => {
          this.setState( {
            pokemonsEvo: [...this.state.pokemonsEvo, pokemon]
          })
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
        <Switch>
            <Route 
              exact path = '/' 
              render = {
                () => {
                  return (
                    <Home 
                      pokemons = {pokemons}  
                      pokemonsEvo = {pokemonsEvo}
                      InputNameValue = {InputNameValue}
                    />
                  )
                }
              }
            />
            <Route 
              path = '/character/:charId'
              render = {
                (routerProps) => {
                  return (
                    <PokemonBigDetail 
                      pokemons = {pokemons} 
                      pokemonsEvo = {pokemonsEvo}
                      routerProps = {routerProps}
                    />
                  )
                }
              }
            />
          </Switch>
      </div>
    );
 }
}

export default App;
