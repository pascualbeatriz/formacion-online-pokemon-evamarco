import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {item} = props;
  return(
      <li  key = {item.id} className = "poke__item" >
        <div className = "card">
          <h2 className = "poke__name">{item.name}</h2>
          <img src = {item.image} alt = {item.name}/>
          <ul className = "type__list">
            {item.typeList.map((type, index) => {return(
              <li className = "type__item" key = {`a${index}`}>
                {type}
              </li>
            )})}
          </ul>
        </div>
      </li>
  );
}
Card.propTypes = {
  item: PropTypes.object.isRequired
}
export default Card;