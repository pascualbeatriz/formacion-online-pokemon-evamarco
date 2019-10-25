import React from 'react';
import PropTypes from 'prop-types';
import './PokemonFilters.scss';

const Filters = props => {
  const {getInputValue, InputNameSearch} = props;
  return(
    <React.Fragment>
      <label className = "filter__label" htmlFor="text">Introduce un nombre</label>
      <input 
        type="text" 
        name="text" 
        id="text" 
        className="input" 
        placeholder = "Ej. Bulbasaur"
        onChange = {getInputValue}
        value = {InputNameSearch}
      />
    </React.Fragment>
  );
}
Filters.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  InputNameSearch: PropTypes.string.isRequired
}
export default Filters;