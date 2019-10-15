import React from 'react';
import {FetchChar} from '../services/fetch';
import List from './List'; 
import Filters from './Filters'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      api:[],
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
    .then(data=> {console.log(data.results)
      for(let item of data.results){
        const index = data.results.indexOf(item);
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
            id : index, 
            
          }
          this.setState( { 
            api: [...this.state.api, poke]
          })
        })
      }
    })
  }
  render() {
    const {api, query} = this.state;
    const {getInputValue} = this
    return (
      <div className="App">
        <h1 className="app__title">Pokedesk</h1>
        <Filters  getInputValue = {getInputValue}/>
        <List api = {api}  query ={query}/>
      </div>
    );
  }
}

export default App;
