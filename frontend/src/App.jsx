import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/login-page' element={<Login/>} />
      <Route path='/signup-page' element={<Signup/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
