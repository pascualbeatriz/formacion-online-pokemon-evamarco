import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PokemonBigDetail.scss'; 

const PokemonBigDetail = props => {
  const { pokemons, pokemonsEvo, routerProps } = props;
  const id = parseInt(routerProps.match.params.charId);
  let obj = pokemons.find(element => element.id === id);
  let objEvol = {}
  if (pokemonsEvo.find(element => element.name === obj.name)) {
    objEvol = pokemonsEvo.find(element => element.name === obj.name);
  }
  else if (pokemonsEvo.find(element => element.firstEv === obj.name)) {
    objEvol = pokemonsEvo.find(element => element.firstEv === obj.name);
  }
  else {
    objEvol = pokemonsEvo.find(element => element.secondEv === obj.name);
  }
  if(obj){
    return (
      <React.Fragment>
        <Link to='/'><p className="link__anchor"></p></Link>
        <div className="detail__wrapper">
          <div className="image__wrapper">
            <img className="detail__image" src={obj.image} alt={obj.name} />
          </div>
          <div className="detail__info">
            <p className="id__number"> Id / {obj.id}</p>
            <h2 className="poke__name">{obj.name}</h2>
            <ul className="type__list">
              {obj.Types.map((type, index) => {
                return (
                  <li className="type__item" key={`a${index}`}>
                    {type}
                  </li>
                )
              })}
            </ul>
            <h3>Evolutions</h3>
            <ul className="evo__list">
              <li className="evo__text">{objEvol.name}</li>
              <li className="evo__text">{objEvol.firstEv}</li>
              <li className="evo__text">{objEvol.secondEv}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
  else{
    return(
      <React.Fragment>
        <Link to="/" className="app__back">
          Volver al listado
        </Link>
        <p className = "noData">No tenemos datos de ese personaje.</p>
      </React.Fragment>
    )
  }
}

export default PokemonBigDetail;