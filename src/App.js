import React from "react";
import { RouterApp } from "./router/RouterApp";

import './App.css';


export default function App() {

  const vuelos = [
    {id: '1', name: 'Vivair'},
    {id: '2', name: 'Avianca'},
    {id: '2', name: 'Lan'},
  ]

  return (
    <>
      <RouterApp vuelos={ vuelos }/>
    </>
  );
}

