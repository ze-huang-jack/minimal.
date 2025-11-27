import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-black' : 'text-gray-500 hover:text-gray-900';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-14 transition-all duration-300">
      <div className="max-w-3xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight text-black hover:opacity-70 transition-opacity">
          Minimal.
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium transition-colors">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/posts" className={isActive('/posts')}>Articles</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
        </div>
      </div>
    </nav>
  );
};