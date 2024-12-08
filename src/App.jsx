import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSite from './components/MainSite';
import AdminPanel from './components/AdminPanel';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <MainSite />
            <Footer />
            <BackToTop />
          </>
        } />
        <Route path="/services" element={
          <>
            <Navbar />
            <ServicesPage />
            <Footer />
            <BackToTop />
          </>
        } />
        <Route path="/book" element={
          <>
            <Navbar />
            <ContactPage />
            <Footer />
            <BackToTop />
          </>
        } />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;