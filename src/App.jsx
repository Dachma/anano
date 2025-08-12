import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from "./Components/Main"
import Sunflower from "./Components/Sunflower"
import Snake from './Components/Snake';
import Song from './Components/Song';

const  App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sunflower" element={<Sunflower />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/song" element={<Song />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
