import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Welcome</span>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
        Simplicity is the <br /> ultimate sophistication.
      </h1>
      <p className="text-xl text-gray-500 max-w-lg mb-8 leading-relaxed font-light">
        A minimal space to share thoughts on design, code, and the subtle art of subtraction.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/posts" 
          className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
        >
          Read Articles
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
        >
          About Me
        </Link>
      </div>
    </div>
  );
};