import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PokemonBigDetail.scss'; 

function toggleFrontBack(){
  setInterval(() => {
    const backImgArray = document.querySelectorAll('.pokemon__img__back');
    for (let backPokemon of backImgArray) {
      backPokemon.classList.toggle('hidden')
    }
    const frontImgArray = document.querySelectorAll('.pokemon__img__front');
    for(let frontPokemon of frontImgArray) {
      frontPokemon.classList.toggle('hidden');
    }
   }, 1000); 
}
const PokemonBigDetail = props => {
  const { pokemons, pokemonsEvo, routerProps } = props;
  const id = parseInt(routerProps.match.params.charId);
  let obj = pokemons.find(element => element.id === id);


  // let objEvol = {}
  // if (pokemonsEvo.find(element => element.name === obj.name)) {
  //   objEvol = pokemonsEvo.find(element => element.name === obj.name);
  // }
  // else if (pokemonsEvo.find(element => element.firstEv === obj.name)) {
  //   objEvol = pokemonsEvo.find(element => element.firstEv === obj.name);
  // }
  // else {
  //   objEvol = pokemonsEvo.find(element => element.secondEv === obj.name);
  // }
  if(obj){
    let images_default = [];
    let images_shine = [];
    let images_female = [];
    let images_female_shine = [];
    for(let image in obj.allImages){
      const value = obj.allImages[image]
      if(image === 'front_default' && value !== null){
        images_default.push(value)
      }
      else if(image === 'front_shiny'	&& value !== null){
        images_shine.push(value)
      }
      else if (image === 'front_female' && value !== null){
        images_female.push(value)
      }
      else if (image === 'front_shiny_female' && value !== null){
        images_female_shine.push(value)
      }
      else if (image === 'back_default' && value !== null){
        images_default.push(value)
      }
      else if (image === 'back_shiny' && value !== null){
        images_shine.push(value)
      }
      else if (image === 'back_female' && value !== null){
        images_female.push(value)
      }
      else if (image === 'back_shiny_female' && value !== null){
        images_female_shine.push(value)
      }

    }
    return (
      <React.Fragment>
        <header className = " app__header">
          <h1 className = "app__title">Pokedesk</h1>
        </header>
        <Link to='/'><p className="link__anchor"></p></Link>
        <div className="detail__wrapper">
          <div className="info__group">
            <div className="bigImage__wrapper">
              <img className="detail__img" src={obj.image} alt={obj.name} />
            </div>
            <div className="basicInfo">
              <h2 className="poke__name">{obj.name}</h2>
              <h3>Altura</h3>
              <p>{obj.height}</p>
              <h3>Experiencia</h3>
              <p>{obj.exp}</p>
              <p className="id__number"> Id / {obj.id}</p>
              <h3>Es un pokemon por defecto</h3>
              <p>{obj.default === true ? 'si' : 'no'}</p>
            </div>
          </div>
          <div className="moreImages__group">
            <h3>Otras imágenes</h3>
            <ul>
              <li key ="default_images">
                <p>Imagenes por defecto</p>
                {images_default.map((item, index) =>{return <img key ={`${index}default`} src={item} alt={`${index}default`}/>})}
              </li>
              <li key = "shine_images">
              <p>Imagenes con brillo</p>
                {images_shine.map((item, index) =>{return <img key ={`${index}shine`}src={item} alt={`${index}shine`}/>})}
              </li>
              <li key ="female_iamges">
              <p>Imagenes de hembra</p>
                {images_female.map((item, index) =>{return <img key ={`${index}female`} src={item} alt={`${index}female`}/>})}
              </li>
              <li key = "female_shine_images">
              <p>Imagenes de hembra con brillo</p>
                {images_female_shine.map((item, index) =>{return <img key ={`${index}female_shine`}src={item} alt={`${index}female_shine`}/>})}
              </li>
            </ul>
          </div>

          <div className ="Types__group">
            <h3>Tipos</h3>
            <ul className="type__list">
              {obj.Types.map((type, index) => {
                return (
                  <li className="type__item" key={`a${index}`}>
                    {type}
                  </li>
                )
              })}
            </ul>
            </div>
            <div className="evolution__group">
            {/* <h3>Evolutions</h3>
            <ul className="evo__list">
              <li className="evo__text">{objEvol.name}</li>
              <li className="evo__text">{objEvol.firstEv}</li>
              <li className="evo__text">{objEvol.secondEv}</li>
            </ul> */}
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