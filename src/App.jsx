import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import UsersPage from './pages/UsersPage'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
