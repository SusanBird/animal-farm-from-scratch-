import React from 'react';

export default function AnimalItem({ type, name, says }) {
  return (
    <div className='animal'>
      <img className='animal-images' src={`./images/${type}.png`} />
      <p className='animal-name'> {name} </p> 
      <p className='animal-says'> {says} </p>
    </div>
  );
}


//include top and left here? how to style in here? 
// why aren't pictures appearing?