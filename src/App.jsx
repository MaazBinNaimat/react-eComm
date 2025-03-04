import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import About from './pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
