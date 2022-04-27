/* eslint-disable no-console */
import React from 'react';
import AnimalList from './AnimalList';

export default function Main({ animals }) {
//   console.log(animals);
  return (
    <div>
      <AnimalList animals={animals} />
    </div>
  );
}
