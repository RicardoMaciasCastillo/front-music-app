import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Reproductor } from '../components/Reproductor';
import { Shop } from '../components/Shop';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRouter />} />
          <Route path="/reproductor" element={<Reproductor />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}
