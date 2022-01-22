import React, { useContext } from 'react';
import { Context } from '../App';
import { Form } from './Form';

export const Vivair = () => {

  const contextAir = useContext(Context);

    return (
        <div>
            <h1>Vivair</h1>
            <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { contextAir[0].name }</h3>
            <Form />
        </div>
    )
};
