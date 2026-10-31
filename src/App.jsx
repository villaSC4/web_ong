import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InscriptionModal from './components/InscriptionModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import CertificationPage from './pages/CertificationPage';
import LuminaPage from './pages/LuminaPage';
import JoinPage from './pages/JoinPage';

function ScrollToTopAndAnimatedRoutes({ onOpenModal }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenModal={onOpenModal} />} />
          <Route path="/nosotros" element={<AboutPage onOpenModal={onOpenModal} />} />
          <Route path="/programa" element={<ProgramPage onOpenModal={onOpenModal} />} />
          <Route
            path="/certificacion"
            element={<CertificationPage onOpenModal={onOpenModal} />}
          />
          <Route path="/lumina" element={<LuminaPage onOpenModal={onOpenModal} />} />
          <Route path="/sumate" element={<JoinPage onOpenModal={onOpenModal} />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'inscripcion',
    preselectedOption: '',
  });

  const handleOpenModal = (mode = 'inscripcion', preselectedOption = '') => {
    setModalState({
      isOpen: true,
      mode,
      preselectedOption,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
        <Navbar onOpenModal={handleOpenModal} />

        <ScrollToTopAndAnimatedRoutes onOpenModal={handleOpenModal} />

        <Footer onOpenModal={handleOpenModal} />

        <InscriptionModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          initialMode={modalState.mode}
          preselectedOption={modalState.preselectedOption}
        />
      </div>
    </BrowserRouter>
  );
}
