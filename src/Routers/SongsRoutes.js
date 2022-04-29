import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { Reproductor } from '../components/Reproductor';
import { Shop } from '../components/Shop';

export const SongsRoutes = () => {
  return (
    <>
    <Navbar />
        <Routes>
        <Route path="/reproductor" element={<Reproductor />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Reproductor />} />
    </Routes>
    </>
  )
}
