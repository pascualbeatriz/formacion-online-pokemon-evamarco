
import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
const footer = props => {
  const {prevPage, nextPage, pokemons, listPage, InputNameValue} = props;
  const filteredPokemons = pokemons.filter(item => {
    return item.name.toUpperCase().includes(InputNameValue.toUpperCase())
  })
  return (
    <div className="list__pages">
      <button className = "btn prevPage__btn" onClick = {prevPage}>
      &lt;
      </button>
      <p className="list__page">Page {listPage} of {Math.ceil(filteredPokemons.length/25)}</p>
      <button className = "btn nextPage__btn" onClick = {nextPage}>
      &gt;
      </button>
    </div>
  );
}
footer.propTypes = { 
  nextPage: PropTypes.func.isRequired, 
  prevPage: PropTypes.func.isRequired, 
  listPage: PropTypes.number.isRequired, 
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputNameValue: PropTypes.string.isRequired
}
export default footer;