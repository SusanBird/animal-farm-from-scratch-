/* eslint-disable no-console */
import React from 'react';
import AnimalItem from '../AnimalItem';
import backgroundImg from '../background.png';
import './AnimalList.css';

export default function AnimalList({ animals }) {
//   console.log(animals);
  return (
    <div className='animal-list' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal) =>
          <AnimalItem
            key={animal.name}
            name={animal.name}
            type={animal.type}
            says={animal.says}
            top={animal.top}
            left={animal.left}/>
        )
      }
    </div>
  );
}
