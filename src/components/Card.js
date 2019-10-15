import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
  const {item} = props;
  return(
        <div className = "card">
          <div className="image__wrapper">
            <img className = "card__image"src = {item.image} alt = {item.name}/>
          </div>
          <div className="card__info">
            <h2 className = "poke__name">{item.name}</h2>
            <ul className = "type__list">
              {item.typeList.map((type, index) => {return(
                <li className = "type__item" key = {`a${index}`}>
                  
                  {type}
                </li>
              )})}
          </ul>
          </div>

        </div>
  );
}
Card.propTypes = {
  item: PropTypes.object.isRequired
}
export default Card;