import React from 'react';
import PokemonService from '../../services/PokemonService';
import Home from '../Home/Home';

import PokemonBigDetail from '../PokemonBigDetail/PokemonBigDetail';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      pokemons:[],
      pokemonsEvo:[],
      InputNameValue: '',
      init: 0,
      end: 25,
      listPage: 1,
      range: 26
    }
    this.pokemonService = new PokemonService();
    this.getInputValue = this.getInputValue.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  componentDidMount(){
    this.getPokemons();
    this.getEvolutions();
    // this.getInitialState();
  }

  getInitialState() {
    // const inputValueSaved =  JSON.parse(localStorage.getItem('inputValue'));
    // const pokemonsSaved =  JSON.parse(localStorage.getItem('pokemons'));
    // const pokemonsEvoSaved =  JSON.parse(localStorage.getItem('pokemonsEvo'));
    // if(inputValueSaved !== ''){
    //   this.setState({InputNameValue: inputValueSaved})
    // }
    // if(pokemonsSaved !== []){
    //   this.setState({pokemons: pokemonsSaved})
    // }
    // if(pokemonsEvoSaved !== []){
    //   this.setState({pokemonsEvo: pokemonsEvoSaved})
    // }
  }
  prevPage(){
    const preInit = this.state.init;
    if(this.state.listPage > 1){
      const newInit = preInit - this.state.range;
      const preEnd = this.state.end;
      const newEnd = preEnd - this.state.range;
      const newPage = this.state.listPage - 1;
      this.setState({
        init: newInit, 
        end: newEnd,
        listPage : newPage
      });
    }
    else{
      console.log('error'); 
    }
  }
  nextPage(){
    const preEnd = this.state.end;
    if(this.state.listPage < (this.state.pokemons.filter(item => {
      return item.name.toUpperCase().includes(this.state.InputNameValue.toUpperCase())
    }).length/this.state.range)){
      const preInit = this.state.init;
      const newInit = preInit + this.state.range;
      const newEnd = preEnd + this.state.range;
      const newPage = this.state.listPage + 1;
      this.setState({
        init: newInit, 
        end: newEnd,
        listPage: newPage
      });
    }
    else{
      console.log('error'); 
    }
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value;
    if(inputValue === null){
      localStorage.setItem('inputValue', JSON.stringify(''));
    }
    else{
      localStorage.setItem('inputValue', JSON.stringify(inputValue));
    }
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
          localStorage.setItem('pokemons', JSON.stringify(this.state.pokemons));
        })
      }
    })
  }
  getEvolutions(){
    this.pokemonService.findAllEvolutions()
    .then(data=> {
      for(let item of data.results){
        const Pokeindex = data.results.indexOf(item)
        this.pokemonService.findEvolutions(item, Pokeindex)
        .then(pokemon => {
          this.setState( {
            pokemonsEvo: [...this.state.pokemonsEvo, pokemon]
          })
          localStorage.setItem('pokemonsEvo', JSON.stringify(this.state.pokemonsEvo));
        })
      }
    })
  }

  render() {
    const {pokemons, InputNameValue, pokemonsEvo, init, end, listPage} = this.state;
    const {getInputValue, nextPage, prevPage} = this
    return (
      <div className = "App">

        <Switch>
            <Route 
              exact path = '/' 
              render = {
                () => {
                  return (
                    <Home 
                      getInputValue = {getInputValue}
                      pokemons = {pokemons}  
                      pokemonsEvo = {pokemonsEvo}
                      InputNameValue = {InputNameValue}
                      init = {init}
                      end = {end}
                      nextPage = {nextPage}
                      prevPage = {prevPage}
                      listPage = {listPage}
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
