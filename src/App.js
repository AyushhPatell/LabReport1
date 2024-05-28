import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [visits, setVisits] = useState(0);

  const navStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex'
  };

  const linkStyle = {
    marginRight: '10px'
  };

  return (
      <Router>
        <div>
          <nav>
            <ul style={navStyle}>
              <li style={linkStyle}><Link to="/">Home</Link></li>
              <li style={linkStyle}><Link to="/about">About</Link></li>
              <li style={{ marginRight: 0 }}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
            <Route path="/about" element={<About visits={visits} />} />
            <Route path="/contact" element={<Contact visits={visits} />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
