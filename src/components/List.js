import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = props => {
  const {api, query} = props;
  return(
    <ul className="poke__list">
    {api
      .filter(item => {
        return item.name.toUpperCase().includes(query.toUpperCase())
      })
    .map(item => {return(
      <Card item = {item} />
    )})}
  </ul>
  );
}
List.propTypes = {
  api: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default List;