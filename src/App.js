import React from "react";
import Header from "./header/Header";

import './App.css';

const vuelos = [
  {id: '1', name: 'Vivair'},
  {id: '2', name: 'Avianca'}
]

export default function App() {
  return (
    <div className="App">
      <Header />
      <h3 style={{ padding: "40px" }}>Hola Bienvenido, sabemos que quieres en un { vuelos[1].name }</h3>
    </div>
  );
}

