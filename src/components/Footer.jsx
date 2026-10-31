import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  FileCheck2,
  HeartHandshake,
  MessageCircle,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { ORG_INFO } from '../data/siteData';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#151F30] text-slate-300 pt-14 pb-10 border-t-4 border-[#9B417E] relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#9B417E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80 items-start">
          {/* Col 1 (5 cols): Brand Identity + Clean Social Row */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <img
                src="/logo-ujmaya.jpg"
                alt="Logo ONGD UJ MAYA"
                className="w-13 h-13 rounded-full bg-white p-1 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  {ORG_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#F6C826]">
                  {ORG_INFO.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Organismo No Gubernamental de Desarrollo fundado en Tacna (2015).
              Impulsamos el bienestar integral, el emprendimiento y la certificación
              laboral de mujeres y jóvenes.
            </p>

            {/* Minimal Social Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={ORG_INFO.socials.facebookMain}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400" />
                <span>@ongujmaya</span>
              </a>

              <a
                href={ORG_INFO.socials.instagramLumina}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>@lumina.voluntarios</span>
              </a>

              <a
                href={ORG_INFO.socials.facebookCommunity}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-[#EB7D3C]" />
                <span>Comunidad FB</span>
              </a>
            </div>
          </div>

          {/* Col 2 (3 cols): Clean Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#F6C826] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#F6C826] transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/programa" className="hover:text-[#F6C826] transition-colors">
                  Programa DreamBuilder
                </Link>
              </li>
              <li>
                <Link to="/certificacion" className="hover:text-[#F6C826] transition-colors">
                  Certificación Laboral MTPE
                </Link>
              </li>
              <li>
                <Link to="/lumina" className="hover:text-[#F6C826] transition-colors">
                  Lumina Voluntarios
                </Link>
              </li>
              <li>
                <Link to="/sumate" className="hover:text-[#F6C826] transition-colors">
                  Súmate y Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (4 cols): Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto en Tacna
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB7D3C] shrink-0 mt-0.5" />
                <span>{ORG_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#347B65] shrink-0" />
                <a
                  href={`https://wa.me/${ORG_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {ORG_INFO.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F6C826] shrink-0" />
                <a
                  href={`mailto:${ORG_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {ORG_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <FileCheck2 className="w-4 h-4 text-[#347B65] shrink-0" />
                <a
                  href={ORG_INFO.certifyingPartner.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-300 hover:text-[#F6C826] transition-colors underline underline-offset-4"
                >
                  Constancia Oficial MTPE N° {ORG_INFO.certifyingPartner.authorizationNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {ORG_INFO.legalName} — Presidenta: {ORG_INFO.president}
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenModal('inscripcion')}
              className="text-[#F6C826] hover:underline font-semibold cursor-pointer"
            >
              Inscribirme al Programa
            </button>
            <button
              onClick={() => onOpenModal('voluntario')}
              className="text-slate-300 hover:text-white font-semibold cursor-pointer"
            >
              Postular a Lumina
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${ORG_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hola ONGD UJ MAYA, visité su plataforma web y deseo recibir información.'
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 font-bold text-sm"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </footer>
  );
}
