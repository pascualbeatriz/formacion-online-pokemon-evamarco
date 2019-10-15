import React from 'react';
import {FetchChar} from './services/fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      api:[]
    }
  }
  componentDidMount(){
    this.getCharacter();
  }
  getCharacter(){
    FetchChar()
    .then(data=> {console.log(data.results)
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
          typeList : typesArray
        }
        this.setState( { api: 
       [...this.state.api, poke]
        } 
      )
    })}
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
