import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='p-[20px]'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
