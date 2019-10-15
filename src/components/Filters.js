import React from 'react';
import PropTypes from 'prop-types';


const Filters = props => {
  const {getInputValue} = props;
  return(
    <React.Fragment>
      <label htmlFor="text">Introduce un nombre</label>
      <input 
        type="text" 
        name="text" 
        id="text" 
        className="input" 
        placeholder = "Ej. Bulbasaur"
        onChange = {getInputValue}
      />
    </React.Fragment>

  );
}
Filters.propTypes = {
  getInputValue: PropTypes.func.isRequired
}
export default Filters;