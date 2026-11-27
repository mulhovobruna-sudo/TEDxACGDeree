
import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo-white.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Talks', path: '/talks' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 glass-effect">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo}
            alt="TEDx Deree ACG" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm uppercase tracking-widest transition-colors ${
                location.pathname === item.path ? 'text-primary font-bold' : 'text-white/70 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-widest transition-all glow-red active:scale-95">
            Tickets
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'} </span>
        </button>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm uppercase tracking-widest transition-colors ${
                location.pathname === item.path ? 'text-primary font-bold' : 'text-white/70 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
    </nav>
  );
};

export default Navbar;
