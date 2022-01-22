import React from 'react';
import { Header } from '../header/Header';
import { HomeScreen } from '../components/HomeScreen';
import { Avianca } from '../components/Avianca';
import { Vivair } from '../components/Vivair';
import { Lan } from '../components/Lan';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";


export const RouterApp = ({ vuelos }) => {
  return (
      <BrowserRouter>
              <Header />
        <Routes>

                  <Route exact path="/avianca" element={ <Avianca /> } />
                  <Route exact path="/vivair" element={ <Vivair /> } />
                  <Route exact path="/lan" element={ <Lan /> } />
                  <Route path="/" element={ <HomeScreen /> } />
                  <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  )
};
