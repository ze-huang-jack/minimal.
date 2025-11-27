import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PostList } from './pages/PostList';
import { PostDetail } from './pages/PostDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:slug" element={<PostDetail />} />
          </Routes>
        </main>
        
        <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-50">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Minimal Blog. Designed with simplicity.
          </p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;