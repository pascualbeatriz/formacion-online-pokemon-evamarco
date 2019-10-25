import React from 'react';
import PropTypes from 'prop-types';
import PokemonList from '../PokemonList/PokemonList';

const Home = props => {
  const {pokemons, pokemonsEvo, InputNameValue} = props;
  return(
    <React.Fragment>
      <ul className="char__list">
        <PokemonList pokemons = {pokemons}  pokemonsEvo = {pokemonsEvo}InputNameValue = {InputNameValue}/>
      </ul>
    </React.Fragment>
  )
}

export default Home;