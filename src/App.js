import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NewsPage from './components/NewsPage';
import MatchesPage from './components/MatchesPage';
import PatchDigestPage from './components/PatchDigestPage';
import SecretFilesPage from './components/SecretFilesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/patch-digest" element={<PatchDigestPage />} />
          <Route path="/secret-files" element={<SecretFilesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;