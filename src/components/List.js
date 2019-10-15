import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './List.scss'; 

const List = props => {
  const {api, query} = props;
  return(
    <ul className="poke__list">
    {api
      .filter(item => {
        return item.name.toUpperCase().includes(query.toUpperCase())
      })
      .map(item => {return(
        <li  key={item.id} className = "poke__item" >
          <Card item = {item} />
        </li>
      )})}
  </ul>
  );
}
List.propTypes = {
  api: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default List;