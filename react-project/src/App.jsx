import React from 'react'
import Header from './Header'

export default function App() {
  return (
    
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home />} />d
      <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  )
}
