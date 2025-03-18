import React from 'react'
import Header from './Header'
import Home from './Home'
import Help from './Help'
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  )
}
