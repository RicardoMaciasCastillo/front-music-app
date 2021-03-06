import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About';
import MusicPlayerSlider from '../components/MusicPlayerSlider';
import Navbar from '../components/Navbar'
// import { Reproductor } from '../components/Reproductor';
import { Shop } from '../components/Shop';
// import { motion } from "framer-motion"

export const SongsRoutes = () => {
  return (
    <>
    <Navbar />
        <Routes>
        {/* <Route path="/reproductor" element={<Reproductor />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
    </Routes>
    <MusicPlayerSlider /> 
    </>
  )
}
