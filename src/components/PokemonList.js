import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetail from './PokemonDetail';
import './PokemonList.scss'; 

const PokemonList = props => {
  const {pokemons, InputNameSearch, pokemonEvolutions} = props;
  // const pokemonFiltered = pokemons.filter(item => {
  //   return item.PokeName.toUpperCase().includes(InputNameSearch.toUpperCase())
  // })
  return(
    <ul className="poke__list">
      {pokemons
        .map((item, index)=> {
          return(
            <li  key={index} className = "poke__item" >
              <PokemonDetail 
                item = {item} 
                pokemonEvolutions = {pokemonEvolutions}
              />
            </li>
          ) 
        }
        )}
    </ul>
  );
}
PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameSearch: PropTypes.string.isRequired
}
export default PokemonList;