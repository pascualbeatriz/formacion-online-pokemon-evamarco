import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.scss';

const PokemonDetail = props => {
  const {item} = props; 
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
      </div>
      </div>
      )
  // const { item, pokemonsEvo } = props;
  // if(pokemonsEvo !== []){
  //   let objEvol = {}
  //   if(pokemonsEvo.find(element => element.name === item.name)){
  //     objEvol = pokemonsEvo.find(element => element.name === item.name);
  //   }
  //   else if( pokemonsEvo.find(element => element.firstEv === item.name)){
  //     objEvol = pokemonsEvo.find(element => element.firstEv === item.name);
  //   }
  //   else{
  //     objEvol = pokemonsEvo.find(element => element.secondEv === item.name);
  //   }
  //   return (
  //     <div className="card">
  //       <div className="image__wrapper">
  //         <img className="card__image" src={item.image} alt={item.name} />
  //       </div>
  //       <div className="card__info">
  //         <p className="id__number"> Id / {item.id}</p>
  //         <h2 className="poke__name">{item.name}</h2>
  //         <ul className="type__list">
  //           {item.Types.map((type, index) => {
  //             return (
  //               <li className="type__item" key={`a${index}`}>
  //                 {type}
  //               </li>
  //             )
  //           })}
  //         </ul>
  //         <h3>Evolutions</h3>
  //         <ul className="evo__list">
  //           <li className="evo__text"> {objEvol.name}</li>
  //           <li className="evo__text">{objEvol.firstEv}</li>
  //           <li className="evo__text">{objEvol.secondEv}</li>
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }
  // else{
  //   return(<p>Loading ...</p>)
  // }
}

PokemonDetail.propTypes = {
  item: PropTypes.object.isRequired
}
export default PokemonDetail;