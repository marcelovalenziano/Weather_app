import React from 'react';
import Temp from './Temp.jsx'
import style from "./Card.module.css"

export default function Card({name,min, max, img, onClose, main}) {
  
  return( 
  <div className={[style.card, main ? style.mainCard : ''].join(' ')}>    
    <span className={style.name}>{name}</span>
    <button onClick={onClose} className = {style.cardBtn}>X</button>

  <section>
    <Temp className = {style.temp} label = "Min" value = {min} />
    <Temp className = {style.temp} label = "Max" value = {max} />
    <img src = {`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2 }x.png`} 
    alt = "icono"/>
  </section>

  </div>
 ); 
}