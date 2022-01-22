import React from 'react';
import { useParams } from "react-router-dom";
import { Form } from './Form';


export const HomeScreen = () => {

<<<<<<< HEAD
    let params = useParams();

    return (
        <div>
            <h1>Home</h1>
            <h3 style={{ padding: "40px" }}>Hola, Bienvenido, sabemos que quieres viajar en un {params.nameAirline === 'it-globers-app' ? null : params.nameAirline}</h3>
            <Form />
        </div>
    )
=======
  return (
    <div>
      <h1>Home</h1>
      <h3 style={{ padding: "40px" }}>
        Hola, Bienvenido, sabemos que quieres viajar en un{" "}
        {params.invoiceId === "it-globers-app" ? null : params.nameAirline}
      </h3>
      <Form />
    </div>
  );
>>>>>>> parent of 0350c0e (Revert "added optimizations and conditional rendering")
};
