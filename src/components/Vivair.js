import React from 'react';
import { Form } from './Form';

export const Vivair = ({ vuelos }) => {
    return (
        <div>
            <h1>Vivair</h1>
            <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un { vuelos[0].name }</h3>
            <Form />
        </div>
    )
};
