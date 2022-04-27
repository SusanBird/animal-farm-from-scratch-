/* eslint-disable no-console */
import React from 'react';
import AnimalList from '../AnimalList/AnimalList';
import backgroundImg from '../background.png';
import './Main.css';

export default function Main({ animals }) {
//   console.log(animals);
  return (
    <main className='background' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>
  );
}
