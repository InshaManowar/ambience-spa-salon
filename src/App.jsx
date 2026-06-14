import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSite from './components/MainSite';
import AdminPanel from './components/AdminPanel';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Contact from './components/Contact';
import BookingWidget from './components/BookingWidget';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <BrowserRouter>
        <AnnouncementBar />
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
          <Route path="/contact" element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
              <BackToTop />
            </>
          } />
          <Route path="/book" element={
            <>
              <Navbar />
              <div className="pt-[136px] bg-beige-light min-h-screen">
                <BookingWidget />
              </div>
              <Footer />
              <BackToTop />
            </>
          } />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;