import React from 'react';
import PropTypes from 'prop-types';
import PokemonList from '../PokemonList/PokemonList';
import Filters from '../PokemonFilters/PokemonFilters';

const Home = props => {
  const {pokemons, pokemonsEvo, InputNameValue, getInputValue} = props;
  return(
    <React.Fragment>
      <header className = " app__header">
        <h1 className = "app__title">Pokedesk</h1>
        <Filters  
          getInputValue = {getInputValue} 
          InputNameValue = {InputNameValue}
        />
      </header>
        <PokemonList 
          pokemons = {pokemons}  
          pokemonsEvo = {pokemonsEvo}
          InputNameValue = {InputNameValue}
        />
    </React.Fragment>
  )
}

export default Home;