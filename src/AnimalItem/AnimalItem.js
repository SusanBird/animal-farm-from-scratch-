import React from 'react';
import './AnimalItem.css';

export default function AnimalItem({ type, name, says, top, left }) {
  return (
    <div className='animal' style={{
      position: 'absolute',
      top: top,
      left: left,
    }} >
      <img className='animal-images' src={`./images/${type}.png`} width={150} />
      <p className='animal-name'> {name} </p> 
      <p className='animal-says'> {says} </p>
    </div>
  );
}



