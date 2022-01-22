import React from 'react';
import { useParams } from "react-router-dom";
import { Form } from './Form';


export const HomeScreen = () => {

    let params = useParams();

    return (
        <div>
            <h1>Home</h1>
            <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un {params.invoiceId}</h3>
            <Form />
        </div>
    )
};
