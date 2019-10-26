import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PokemonBigDetail.scss'; 

const PokemonBigDetail = props => {
  const { pokemons, pokemonsEvo, routerProps } = props;
  const id = parseInt(routerProps.match.params.charId);
  let obj = pokemons.find(element => element.id === id);
  if(obj){
    let objEvol = {};
    let originName = {};
    let firstEvolution = {};
    let secondEvolution = {};
    if (pokemonsEvo.find(element => element.name === obj.name)) {
      objEvol = pokemonsEvo.find(element => element.name === obj.name);
      originName = pokemons.find(element => element.name === objEvol.name);
      firstEvolution = pokemons.find(element => element.name === objEvol.firstEv);
      if(pokemons.find(element => element.name === objEvol.secondEv)){
        secondEvolution = pokemons.find(element => element.name === objEvol.secondEv);
      }
      else{
        secondEvolution = {name: '', image:''};
      }
    }
    else if (pokemonsEvo.find(element => element.firstEv === obj.name)) {
      objEvol = pokemonsEvo.find(element => element.firstEv === obj.name);
      console.log(objEvol);
      originName = pokemons.find(element => element.name === objEvol.name);
      firstEvolution = pokemons.find(element => element.name === objEvol.firstEv);
      if(pokemons.find(element => element.name === objEvol.secondEv)){
        secondEvolution = pokemons.find(element => element.name === objEvol.secondEv);
      }
      else{
        secondEvolution = {name: '', image:''};
      }
    }
    else if (pokemonsEvo.find(element => element.secondEv === obj.name)){
      objEvol = pokemonsEvo.find(element => element.secondEv === obj.name);
      console.log(objEvol);
      originName = pokemons.find(element => element.name === objEvol.name);
      firstEvolution = pokemons.find(element => element.name === objEvol.firstEv);
      secondEvolution = pokemons.find(element => element.name === objEvol.secondEv);
    }
    else{
      objEvol = {};
      originName = {name: '', image:''};
      firstEvolution = {name: '', image:''};
      secondEvolution = {name: '', image:''};
    }
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
        <Link to = '/'><p className = "link__anchor"></p></Link>
        <div className = "detail__wrapper">
          <div className = "info__group">
            <div className="bigImage__wrapper">
              <img className="bigDetail__img" src={obj.image} alt={obj.name} />
            </div>
            <div className="basicInfo">
              <h2 className="poke__name">{obj.name}</h2>
              <h3 className = "poke__subtitle">Altura</h3>
              <p>{obj.height}</p>
              <h3 className = "poke__subtitle">Experiencia</h3>
              <p>{obj.exp}</p>
              <p className="id__number"> Id / {obj.id}</p>
              <h3 className = "poke__subtitle">Es un pokemon por defecto</h3>
              <p>{obj.default === true ? 'si' : 'no'}</p>
            </div>
          </div>
          <div className = "moreImages__group">
            <h3 className = "poke__subtitle">Otras imágenes</h3>
            <ul className = "moreImages__list">
              <li className = "moreImages__item" key ="default_images">
                <p>Imagenes por defecto</p>
                <div className="img__pair">
                  {images_default.map((item, index) =>{return <img key ={`${index}default`} src={item} alt={`${index}default`}/>})}
                </div>
              </li>
              <li className = "moreImages__item" key = "shine_images">
              <p>Imagenes con brillo</p>
                <div className="img__pair">
                {images_shine.map((item, index) =>{return <img key ={`${index}shine`}src={item} alt={`${index}shine`}/>})}
                </div>
              </li>
              <li  className = "moreImages__item" key ="female_iamges">
              <p>Imagenes de hembra</p>
              <div className="img__pair">
                {images_female.map((item, index) =>{return <img key ={`${index}female`} src={item} alt={`${index}female`}/>})}
                </div>
              </li>
              <li className = "moreImages__item" key = "female_shine_images">
              <p>Imagenes de hembra con brillo</p>
              <div className="img__pair">
                {images_female_shine.map((item, index) => {return <img key = {`${index}female_shine`}src={item} alt={`${index}female_shine`}/>})}
                </div>
              </li>
            </ul>
          </div>
          <div className="second__group">
            <div className = "types__group">
              <h3 className = "poke__subtitle">Tipos</h3>
              <ul className="type__list">
                {obj.Types.map((type, index) => {
                  return (
                    <li className="type__item_detail" key={`a${index}`}>
                      <p className = "type__text">{type}</p>
                      <img className="icon__type" src = {require(`../../assets/images/${type}.png`)}  alt={type}/>
                    </li>
                  )
                })}
              </ul>
              </div>
            <div className = "evolution__group">
            <h3 className = "poke__subtitle" >Evolutions</h3>
            <ul className="detail__evo__list">
              <li className="detail__evo__text">
                <p>{originName.name}</p>
                <img src={originName.image} alt={originName.name}/>
              </li>
              <li className="detail__evo__text">
                <p>{firstEvolution.name}</p>
                <img src={firstEvolution.image} alt={firstEvolution.name}/>
              </li>
              <li className="detail__evo__text">
                <p>{secondEvolution.name}</p>
                <img src={secondEvolution.image} alt={secondEvolution.name}/>
              </li>
            </ul>
          </div>
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

PokemonBigDetail.propTypes = {
  pokemonsEvo: PropTypes.arrayOf(PropTypes.object).isRequired,  
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,

}

export default PokemonBigDetail;