import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.scss';

const PokemonDetail = props => {
  const { item, pokemonsEvo, pokemons } = props;
  let objEvol = {};
  let originName = {};
  let firstEvolution = {};
  let secondEvolution = {};
  if (pokemonsEvo.find(element => element.name === item.name)) {
    objEvol = pokemonsEvo.find(element => element.name === item.name);
    originName = {name: item.name, image: '' };
    if (pokemons.find(element => element.name === objEvol.firstEv)) {
      firstEvolution = pokemons.find(element => element.name === objEvol.firstEv);
    }
    else {
      firstEvolution = { name: '', image: '' };
    }
    if (pokemons.find(element => element.name === objEvol.secondEv)) {
      secondEvolution = pokemons.find(element => element.name === objEvol.secondEv);
    }
    else {
      secondEvolution = { name: '', image: '' };
    }
  }
  else if (pokemonsEvo.find(element => element.firstEv === item.name)) {
    objEvol = pokemonsEvo.find(element => element.firstEv === item.name);
    firstEvolution = { name: item.name, image: '' };
    if (pokemons.find(element => element.name === objEvol.secondEv)) {
      secondEvolution = pokemons.find(element => element.name === objEvol.secondEv);
    }
    else {
      secondEvolution = { name: '', image: '' };
    }
    if (pokemons.find(element => element.name === objEvol.name)) {
      originName = pokemons.find(element => element.name === objEvol.name);
    }
    else {
      originName = { name: '', image: '' };
    }
  }
  else if (pokemonsEvo.find(element => element.secondEv === item.name)) {
    objEvol = pokemonsEvo.find(element => element.secondEv === item.name);
    secondEvolution = { name: item.name, image: '' };
    if (pokemons.find(element => element.name === objEvol.name)) {
      originName = pokemons.find(element => element.name === objEvol.name);
    }
    else {
      originName = { name: '', image: '' };
    }
    if (pokemons.find(element => element.name === objEvol.firstEv)) {
      firstEvolution = pokemons.find(element => element.name === objEvol.firstEv);
    }
    else {
      firstEvolution = { name: '', image: '' };
    }
  }
  else {
    objEvol = {};
    originName = { name: '', image: '' };
    firstEvolution = { name: '', image: '' };
    secondEvolution = { name: '', image: '' };
  }
  return (
    <div className="card">
      <div className="image__wrapper">
        <img className="card__image" src={item.image} alt={item.name} />
      </div>
      <div className="card__info">
        <p className="id__number"> Id / {item.id}</p>
        <h2 className="poke__name">{item.name}</h2>
        <ul className="mini_type__list">
          {item.Types.map((type, index) => {
            return (
              <li className="type__item" key={`a${index}`}>
                {type}
              </li>
            )
          })}
        </ul>
      
      <div className="mini_evolution__group">
        <ul className="mini_evo__list">
          <li className={`evo__text ${originName.name === item.name ? 'sameName' : ''}`}>
            <p className="evoName">{originName.name}</p>

          </li>
          <li className={`evo__text ${firstEvolution.name === item.name ? 'sameName' : ''}`}>
            <p className="evoName">{firstEvolution.name}</p>

          </li>
          <li className={`evo__text ${secondEvolution.name === item.name ? 'sameName' : ''}`}>
            <p className="evoName">{secondEvolution.name}</p>

          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}


PokemonDetail.propTypes = {
  item: PropTypes.object.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonsEvo: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default PokemonDetail;