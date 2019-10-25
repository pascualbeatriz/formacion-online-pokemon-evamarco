import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetail from '../PokemonDetail/PokemonDetail';
import './PokemonList.scss'; 
import {Link} from 'react-router-dom';


const PokemonList = props => {
  const {pokemons, InputNameValue, pokemonsEvo} = props;
  const pokemonFiltered = pokemons
  .filter(item => {
    return item.name.toUpperCase().includes(InputNameValue.toUpperCase())
  })
  .slice(0, 25)
  return(
    <ul className="poke__list">
    { pokemonFiltered
      .map(item => {return(
        <li  key={item.id} className = "poke__item" >
          <Link to = {`/character/${item.id}`}>
            <PokemonDetail item = {item} pokemonsEvo = {pokemonsEvo}/>
          </Link>
        </li>
      )})}
  </ul>
  );
}
PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameValue: PropTypes.string.isRequired
}
export default PokemonList;