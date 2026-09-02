import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingBookingBar } from './components/FloatingBookingBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CustomCursor } from './components/CustomCursor';

import { HomePage } from './pages/HomePage';
import { StaysPage } from './pages/StaysPage';
import { StayDetailPage } from './pages/StayDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { GalleryPage } from './pages/GalleryPage';
import { WayanadPage } from './pages/WayanadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';

// ScrollToTop Helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animated Route Wrapper
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/stays/:slug" element={<StayDetailPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/wayanad" element={<WayanadPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen bg-dwild-dark text-dwild-offwhite selection:bg-dwild-sand selection:text-dwild-black overflow-x-hidden">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingBookingBar />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
