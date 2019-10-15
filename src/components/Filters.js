import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = props => {
  const {getInputValue, query} = props;
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
        value = {query}
      />
    </React.Fragment>
  );
}
Filters.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}
export default Filters;