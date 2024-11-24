import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Tips from './components/Tips'
import Plants from './components/Plants'

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <nav className="nav container">
            <h1>Garden Paradise</h1>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/tips">Gardening Tips</Link>
              <Link to="/plants">Plants</Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/plants" element={<Plants />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
