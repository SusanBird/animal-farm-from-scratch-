/* eslint-disable no-console */
import React from 'react';
import AnimalList from './AnimalList/AnimalList';
import backgroundImg from './background.png';

export default function Main({ animals }) {
//   console.log(animals);
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </div>
  );
}
