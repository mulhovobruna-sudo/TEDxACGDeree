
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Talks from './pages/Talks';
import Partners from './pages/Partners';
import Newsletter from './pages/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
