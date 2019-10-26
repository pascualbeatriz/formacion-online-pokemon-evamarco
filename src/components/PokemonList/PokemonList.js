import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetail from '../PokemonDetail/PokemonDetail';
import './PokemonList.scss'; 
import {Link} from 'react-router-dom';


const PokemonList = props => {
  const {pokemons, InputNameValue, pokemonsEvo} = props;
  let pokemonFiltered = pokemons;
  if(InputNameValue !== null)
    {pokemonFiltered = pokemons
    .filter(item => {
      return item.name.toUpperCase().includes(InputNameValue.toUpperCase())
    })
    .slice(0, 25)
  }
  else{
    // pokemonFiltered = pokemons.slice(0, 25); 
  }
  return(
    <React.Fragment>
      <ul className="poke__list">
        { pokemonFiltered
          .map((item, index) => {return(
            <li  key = {`${item.Pokeindex}${index}`} className = "poke__item" >
              <Link className = "pokeList__link" to = {`/character/${item.id}`}>
                <PokemonDetail item = {item} pokemonsEvo = {pokemonsEvo}/>
              </Link>
            </li>
          )})}
        </ul>
    </React.Fragment>
  );
}
PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameValue: PropTypes.string.isRequired
}
export default PokemonList;