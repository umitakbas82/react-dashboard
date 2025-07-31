import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import UsersPage from './pages/UsersPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './pages/Products';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
 

  return (
  
    <BrowserRouter>
    
    <Routes>
    <Route element={<DashboardLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/products" element={<Product/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
