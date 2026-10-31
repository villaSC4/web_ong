import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Heart,
  Phone,
  FileCheck2,
  MapPin,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { ORG_INFO } from '../data/siteData';

const NAV_ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/programa', label: 'Programa Social' },
  { to: '/certificacion', label: 'Certificación MTPE' },
  { to: '/lumina', label: 'Lumina Voluntarios' },
  { to: '/sumate', label: 'Contacto' },
];

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80">
      {/* Top Institutional Bar - Clean & Airy */}
      <div className="bg-[#24344D] text-slate-200 text-xs py-2.5 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F6C826] shrink-0" />
              {ORG_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              href={`https://wa.me/${ORG_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F6C826] transition-colors flex items-center gap-1.5 font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#F6C826]" />
              {ORG_INFO.phone}
            </a>

            <a
              href={ORG_INFO.certifyingPartner.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-[#F6C826] font-medium transition-colors whitespace-nowrap border-l border-white/15 pl-5"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#347B65]" />
              Constancia MTPE N° 202400293
            </a>

            <div className="flex items-center gap-3 border-l border-white/15 pl-5">
              <a
                href={ORG_INFO.socials.facebookMain}
                target="_blank"
                rel="noreferrer"
                title="Facebook Oficial ONGD UJ MAYA"
                className="hover:text-[#F6C826] transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={ORG_INFO.socials.instagramLumina}
                target="_blank"
                rel="noreferrer"
                title="Instagram Lumina Voluntarios"
                className="hover:text-[#F6C826] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Spacious, Single-line, Breathable */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-22 gap-8">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3.5 text-left group focus:outline-none shrink-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              src="/logo-ujmaya.jpg"
              alt="Logo ONGD UJ MAYA"
              className="w-13 h-13 object-contain rounded-full border border-slate-200 p-0.5 bg-white shadow-xs shrink-0"
            />
            <div className="whitespace-nowrap">
              <span className="block text-xl font-extrabold tracking-tight text-[#3E547A] group-hover:text-[#9B417E] transition-colors">
                ONGD UJ MAYA
              </span>
              <span className="block text-xs font-semibold text-[#9B417E] mt-0.5">
                Mujeres Transformando Vidas
              </span>
            </div>
          </Link>

          {/* Desktop Links - Clean Horizontal Spacing with Animated Underline */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="relative py-2 text-[15px] font-semibold whitespace-nowrap transition-colors"
                >
                  <span
                    className={
                      isActive
                        ? 'text-[#9B417E] font-bold'
                        : 'text-slate-700 hover:text-[#3E547A]'
                    }
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#9B417E] to-[#EB7D3C]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons - Clean, Spacious & Never Wrapping */}
          <div className="hidden lg:flex items-center gap-3.5 shrink-0">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal('voluntario')}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-[#3E547A] border border-slate-300 hover:border-[#3E547A] hover:bg-slate-50 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#EB7D3C] shrink-0" />
              <span>Quiero apoyar</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenModal('inscripcion')}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#9B417E] to-[#3E547A] shadow-sm hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
            >
              Inscríbete gratis
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-6 space-y-1.5 shadow-xl overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-[#9B417E]/10 text-[#9B417E]'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('voluntario');
                }}
                className="w-full py-3 rounded-xl font-bold text-[#3E547A] border border-[#3E547A] flex items-center justify-center gap-2 text-sm"
              >
                <Heart className="w-4 h-4 text-[#EB7D3C]" />
                Quiero apoyar
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('inscripcion');
                }}
                className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#9B417E] to-[#3E547A] flex items-center justify-center gap-2 text-sm"
              >
                Inscríbete gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
