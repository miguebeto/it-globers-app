import React from 'react';
import { Form } from './Form';

export const Avianca = ({ vuelos }) => {
  return (
      <div>
          <h1>Avianca</h1>
          <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { vuelos[1].name }</h3>

          <Form />
      </div>
  )
};
