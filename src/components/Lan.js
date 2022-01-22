import React from 'react';
import { Form } from './Form';

export const Lan = ({ vuelos }) => {
  return (
      <div className='mr-4'>
          <h1>Lan</h1>
          <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { vuelos[2].name }</h3>
          <Form />
      </div>
  )
};
