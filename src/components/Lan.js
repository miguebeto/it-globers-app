import React, { useContext } from 'react';
import { Context } from '../App';
import { Form } from './Form';

export const Lan = () => {

  const contextAir = useContext(Context);

  return (
      <div className='mr-4'>
          <h1>Lan</h1>
          <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { contextAir[2].name }</h3>
          <Form />
      </div>
  )
};
