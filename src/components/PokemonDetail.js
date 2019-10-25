import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.scss';
import getPokemonDetal from '../services/fetchDetail'; 

const PokemonDetail = props => {
  const {item, pokemonEvolutions} = props;
  getPokemonDetal(item.url)
  
      return(
        <div className = "card">
          <div className="image__wrapper">
            <img className = "card__image"src = {item.PokemonImage} alt = {item.PokmonName}/>
          </div>
          <div className="card__info">
            <p className="id__number"> Id / {item.PokemonId}</p>
            <p> Este pokemon es la base de la evolución de su cadena</p>
            <h2 className = "poke__name">{item.PokemonName}</h2>
            <ul className = "type__list">
              {item.PokemonTypes.map((type, index) => {return(
                <li className = "type__item" key = {`a${index}`}>
                  {type}
                </li>
              )})}
            </ul>
          </div>
        </div>
    );
  }
PokemonDetail.propTypes = {
  item: PropTypes.object.isRequired
}
export default PokemonDetail;