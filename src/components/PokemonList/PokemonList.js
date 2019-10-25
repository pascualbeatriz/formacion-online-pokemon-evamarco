import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetail from '../PokemonDetail/PokemonDetail';
import './PokemonList.scss'; 

const List = props => {
  const {pokemons, InputNameValue} = props;
  return(
    <ul className="poke__list">
    {pokemons
      .filter(item => {
        return item.name.toUpperCase().includes(InputNameValue.toUpperCase())
      })
      .map(item => {return(
        <li  key={item.id} className = "poke__item" >
          <PokemonDetail item = {item} />
        </li>
      )})}
  </ul>
  );
}
List.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameValue: PropTypes.string.isRequired
}
export default List;