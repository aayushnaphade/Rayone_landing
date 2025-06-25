import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import BlogsList from './pages/BlogsList';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuestionnairePopup from './components/QuestionnairePopup';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsList />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
          <ScrollToTop />
          <QuestionnairePopup />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;