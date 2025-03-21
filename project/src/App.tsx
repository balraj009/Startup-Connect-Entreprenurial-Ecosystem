import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import TssScore from './pages/TssScore';
import Footer from './components/Footer';
import GameMode from './pages/GameMode';
import Feed from './pages/Feed';
import FundingBash from './pages/FundingBash';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/tss-score" element={<TssScore />} />
          <Route path="/funding-bash" element={<FundingBash />} />
          <Route path="/GameMode" element={<GameMode />} />
          <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;