import React from 'react';
import {FetchChar} from '../services/fetch';
import List from './List'; 
import Filters from './Filters'; 
import './App.scss'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pokemons:[],
      query: ''
    }
    this.getInputValue = this.getInputValue.bind(this); 
  }
  componentDidMount(){
    this.getCharacter();
  }
  getInputValue(event){
    const inputValue = event.currentTarget.value; 
    this.setState({query: inputValue})
  }
  getCharacter(){
    FetchChar()
    .then(data=> {
      for(let item of data.results){
        fetch(item.url)
        .then(response => response.json())
        .then(pokemon => {
          const typesArray = [];
          for(let type of pokemon.types){
            typesArray.push(type.type.name);
            }
          const poke = {
            name: pokemon.name,
            image : pokemon.sprites.front_default,
            typeList : typesArray,
            id : pokemon.id       
          }
          this.setState( { 
            pokemons: [...this.state.pokemons, poke]
          })
        })
      }
    })
  }
  render() {
    const {pokemons, query} = this.state;
    const {getInputValue} = this
    return (
      <div className="App">
        <header className =" app__header">
          <h1 className="app__title">Pokedesk</h1>
          <Filters  getInputValue = {getInputValue} query ={query}/>
        </header>
        <List pokemons = {pokemons}  query ={query}/>
      </div>
    );
  }
}

export default App;
