import React, { useContext } from 'react';
import { Context } from '../App';
import { Form } from './Form';

export const Avianca = () => {

  const contextAir = useContext(Context);

  return (
      <div>
          <h1>Avianca</h1>
          <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { contextAir[1].name }</h3>

          <Form />
      </div>
  )
};
