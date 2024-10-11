import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} 
from "react-router-dom"
import Index from './pages/Index'
import SingleUser from './pages/SingleUser'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/user/:id' element={<SingleUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App