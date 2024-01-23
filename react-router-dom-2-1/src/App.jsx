import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SpeiseKarte from "./pages/speisekarte/SpeiseKarte"
import Kontakt from "./pages/kontakt/Kontakt"
import Oeffnungszeiten from './pages/oeffnungszeiten/Oeffnungszeiten'
import Galerie from './pages/galerie/Galerie'


function App() {
  // ! 3. Routes und Route mal hier importieren und direkt verwenden

  return (
    <>
      {/* Hier werden die Adressen festgestellt */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/speisekarte' element={<SpeiseKarte />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/oeffnungszeiten' element={<Oeffnungszeiten />} />
        <Route path='/galerie' element={<Galerie />} />
      </Routes>
    </>
  )
}

export default App
