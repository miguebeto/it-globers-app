import React from 'react';
import { Header } from '../header/Header';
import { HomeScreen } from '../components/HomeScreen';
import { Avianca } from '../components/Avianca';
import { Vivair } from '../components/Vivair';
import { Lan } from '../components/Lan';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


export const RouterApp = ({ vuelos }) => {
  return (
      <BrowserRouter>
              <Header />
        <Routes>
                  <Route exact path="/" element={ <HomeScreen /> } />

                  <Route exact path="/avianca" element={ <Avianca vuelos={ vuelos } /> } />
                  <Route exact path="/vivair" element={ <Vivair vuelos={ vuelos }/> } />
                  <Route exact path="/lan" element={ <Lan vuelos={ vuelos }/> } />

                  <Route element={ HomeScreen } />
        </Routes>
      </BrowserRouter>
  )
};
