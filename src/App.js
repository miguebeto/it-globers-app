import React, { createContext } from "react";
import { RouterApp } from "./router/RouterApp";

import './App.css';

export const Context = createContext(null);

export default function App() {


  const vuelos = [
    {id: 1, name: 'Vivair'},
    {id: 2, name: 'Avianca'},
    {id: 3, name: 'Lan'},
  ]

  return (
    <Context.Provider value={ vuelos }>
      <RouterApp />
    </Context.Provider>
  );
}

