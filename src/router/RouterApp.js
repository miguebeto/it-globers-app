import React from 'react';
import { Header } from '../header/Header';
import { HomeScreen } from '../components/HomeScreen';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";


export const RouterApp = () => {
  return (
<<<<<<< HEAD
      <BrowserRouter>
              <Header />
          <Routes>
                  <Route path="/" element={ <HomeScreen /> } >
                   <Route path=":nameAirline" element={<HomeScreen />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  )
=======
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path=":nameAirline" element={<HomeScreen />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> parent of 0350c0e (Revert "added optimizations and conditional rendering")
};
