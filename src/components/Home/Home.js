import React from 'react';
import PropTypes from 'prop-types';
import PokemonList from '../PokemonList/PokemonList';
import Filters from '../PokemonFilters/PokemonFilters';
import Footer from '../footer/footer';

const Home = props => {
  const {pokemons, pokemonsEvo, InputNameValue, getInputValue, nextPage, prevPage, init, end, listPage} = props;
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
          init = {init}
          end = {end}
        />
        <Footer 
          prevPage = {prevPage}
          nextPage = {nextPage}
          pokemons = {pokemons} 
          listPage = {listPage} 
          InputNameValue = {InputNameValue}
        />
    </React.Fragment>
  )
}
Home.propTypes = {
  pokemonsEvo: PropTypes.arrayOf(PropTypes.object).isRequired, 
  getInputValue : PropTypes.func.isRequired, 
  nextPage: PropTypes.func.isRequired, 
  prevPage: PropTypes.func.isRequired, 
  init: PropTypes.number.isRequired, 
  end: PropTypes.number.isRequired, 
  listPage: PropTypes.number.isRequired, 
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameValue: PropTypes.string.isRequired
}
export default Home;