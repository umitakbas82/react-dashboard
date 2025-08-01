import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import UsersPage from './components/UserPage/UsersPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Products/Products';
import Pages from './components/Pages/Pages';

function App() {
 

  return (
  
    <BrowserRouter>
    
    <Routes>
   
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/pages" element={<Pages/>}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
