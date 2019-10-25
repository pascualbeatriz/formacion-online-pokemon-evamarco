import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.scss';

const PokemonDetail = props => {
  const { item, pokemonsEvo } = props;
  let obj = pokemonsEvo.find(element => element.name === item.name);
  let obj2 = pokemonsEvo.find(element => element.firstEv === item.name);
  let obj3 = pokemonsEvo.find(element => element.secondEv === item.name);
  if (obj3 !== undefined) {
    return (
      <div className="card">
        <div className="image__wrapper">
          <img className="card__image" src={item.image} alt={item.name} />
        </div>
        <div className="card__info">
          <p className="id__number"> Id / {item.id}</p>
          <h2 className="poke__name">{item.name}</h2>
          <ul className="type__list">
            {item.Types.map((type, index) => {
              return (
                <li className="type__item" key={`a${index}`}>
                  {type}
                </li>
              )
            })}
          </ul>
          <h3>Evolutions</h3>
          <ul className="evo__list">
            <li className="evo__text"> {obj3.name}</li>
            <li className="evo__text">{obj3.firstEv}</li>
            <li className="evo__text same__name">{item.name}</li>
          </ul>
        </div>
      </div>
    )
  }
  else if(obj2 !== undefined){
    return (
      <div className="card">
        <div className="image__wrapper">
          <img className="card__image" src={item.image} alt={item.name} />
        </div>
        <div className="card__info">
          <p className="id__number"> Id / {item.id}</p>
          <h2 className="poke__name">{item.name}</h2>
          <ul className="type__list">
            {item.Types.map((type, index) => {
              return (
                <li className="type__item" key={`a${index}`}>
                  {type}
                </li>
              )
            })}
          </ul>
          <h3>Evolutions</h3>
          <ul className="evo__list">          
            <li className="evo__text">{obj2.name}</li>
            <li className="evo__text same__name">{item.name}</li>
            <li className="evo__text">{obj2.secondEv}</li>
          </ul>

        </div>
      </div>
    )
  }
  else if(obj !== undefined){

      return (
        <div className="card">
          <div className="image__wrapper">
            <img className="card__image" src={item.image} alt={item.name} />
          </div>
          <div className="card__info">
            <p className="id__number"> Id / {item.id}</p>
            <h2 className="poke__name">{item.name}</h2>
            <ul className="type__list">
              {item.Types.map((type, index) => {
                return (
                  <li className="type__item" key={`a${index}`}>
                    {type}
                  </li>
                )
              })}
            </ul>
            <h3>Evolutions</h3>
            <ul className="evo__list">
              <li className="evo__text same__name">{item.name}</li>
              <li className="evo__text">{obj.firstEv}</li>
              <li className="evo__text">{obj.secondEv}</li>
            </ul>
          </div>
        </div>
      )
  }
  else {
    return(
    <div className="card">
      <div className="image__wrapper">
        <img className="card__image" src={item.image} alt={item.name} />
      </div>
      <div className="card__info">
        <p className="id__number"> Id / {item.id}</p>
        <h2 className="poke__name">{item.name}</h2>
        <ul className="type__list">
          {item.Types.map((type, index) => {
            return (
              <li className="type__item" key={`a${index}`}>
                {type}
              </li>
            )
          })}
        </ul>
        <h3>Evolutions</h3>
          <p>No tiene evolución</p>
      </div>
    </div>
    )
  }
}

PokemonDetail.propTypes = {
  item: PropTypes.object.isRequired
}
export default PokemonDetail;