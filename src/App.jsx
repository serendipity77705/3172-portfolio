import React from 'react'
import Home from './components/Home';
import NavBar from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import PageNotFound from './pages/404NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App
