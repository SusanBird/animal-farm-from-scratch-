import React from 'react';

export default function AnimalItem({ type, name, says, top, left }) {
  return (
    <div className='animal' style={{
      position: 'absolute',
      top: top,
      left: left,
    }} >
      <img className='animal-images' src={`./images/${type}.png`} width={100} />
      <p className='animal-name'> {name} </p> 
      <p className='animal-says'> {says} </p>
    </div>
  );
}



