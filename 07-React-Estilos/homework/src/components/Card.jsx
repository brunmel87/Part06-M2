import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button onClick={onClose} className={s.btn}>X</button>
      <h4>{name}</h4>
      <div className={s.textImg}>
      <div className={s.maxMin}>
      <p>Maximo</p>
      <p>{max}</p>
      <p>Minimo</p>
      <p>{min}</p>
      </div>
      <img className={s.imgStyle} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
      </div>
    </div>
  )
};