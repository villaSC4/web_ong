import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { ORG_INFO } from '../data/siteData';

const IMPACT_TIERS = [
  {
    id: 'kit',
    label: 'Impulso Formativo',
    title: 'Beca de Materiales y Plantillas para 5 Mujeres',
    desc: 'Permite entregar guías impresas del Plan de Negocios, cuadernos de trabajo y acompañamiento en nuestros talleres presenciales en Tacna.',
    role: 'Donante Solidario',
    color: '#9B417E',
    image: '/social/fb_ujmaya_2.jpg',
  },
  {
    id: 'taller',
    label: 'Taller Comunitario Completo',
    title: 'Sesión Psicológica, Legal y Emprendedora en Comunidad',
    desc: 'Financia la logística para llevar al equipo multidisciplinario de ONGD UJ MAYA y voluntarios de Lumina a una zona vulnerable de Tacna.',
    role: 'Impacto Comunitario',
    color: '#EB7D3C',
    image: '/social/ig_lumina_43.jpg',
  },
  {
    id: 'alianza',
    label: 'Convenio Institucional / Corporativo',
    title: 'Programa de Certificación Laboral (MTPE) y Empleabilidad',
    desc: 'Articulación con empresas privadas, gobiernos locales o cooperación para evaluar y certificar competencias laborales de un grupo de mujeres.',
    role: 'Aliado Estratégico',
    color: '#347B65',
    image: '/social/ig_lumina_44.jpg',
  },
];

export default function JoinPage({ onOpenModal }) {
  const [selectedTier, setSelectedTier] = useState(IMPACT_TIERS[0]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#283854] via-[#3E547A] to-[#9B417E] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Súmate a la transformación en Tacna y el Perú
          </h1>
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto">
            Conecta directamente con la directiva de <strong>ONGD UJ MAYA</strong> para
            inscribirte, hacer voluntariado, donar o firmar una alianza interinstitucional.
          </p>
        </div>
      </section>

      {/* Simulador de Impacto + Contacto Directo */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive Impact Selector */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-md border border-slate-200 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3E547A]">
                Descubre lo que logramos cuando te sumas
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Selecciona una modalidad de participación para conocer su alcance:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {IMPACT_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    selectedTier.id === tier.id
                      ? 'border-[#3E547A] bg-[#3E547A] text-white shadow-md'
                      : 'border-slate-200 bg-[#FAF9F6] text-slate-800 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-medium opacity-80">{tier.role}</div>
                  <div className="text-sm font-extrabold mt-1">{tier.label}</div>
                </button>
              ))}
            </div>

            <motion.div
              key={selectedTier.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 sm:p-7 rounded-2xl text-white grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              style={{ backgroundColor: selectedTier.color }}
            >
              <div className="sm:col-span-5 rounded-xl overflow-hidden border border-white/25 aspect-[4/3] bg-slate-900">
                <img
                  src={selectedTier.image}
                  alt={selectedTier.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-7 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold">{selectedTier.title}</h3>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                  {selectedTier.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => onOpenModal('voluntario', selectedTier.title)}
                    className="px-5 py-3 rounded-xl font-bold bg-[#F6C826] text-slate-900 hover:bg-[#f8d249] text-xs sm:text-sm cursor-pointer"
                  >
                    Coordinar este Apoyo
                  </button>
                  <a
                    href={`https://wa.me/${ORG_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hola ONGD UJ MAYA, me interesa apoyar con: ${selectedTier.title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl font-bold bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Real Fieldwork Photos Row */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10]">
                <img
                  src="/social/ig_lumina_40.jpg"
                  alt="Marcha Lumina en Tacna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10]">
                <img
                  src="/social/fb_profile_24.jpg"
                  alt="Labor social en Tacna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10]">
                <img
                  src="/social/ig_lumina_38.jpg"
                  alt="Pasitos Firmes en Tacna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Official Headquarters Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-9 shadow-md border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo-ujmaya.jpg"
                  alt="Logo ONGD UJ MAYA"
                  className="w-14 h-14 rounded-full object-contain border border-slate-200 p-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#3E547A]">
                    Sede Institucional en Tacna
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Canales oficiales de atención directa
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#EB7D3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Dirección Física</div>
                    <div className="text-slate-600">{ORG_INFO.address}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#347B65] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Teléfono y WhatsApp Oficial
                    </div>
                    <a
                      href={`https://wa.me/${ORG_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#347B65] font-bold hover:underline"
                    >
                      {ORG_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#9B417E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Correos Electrónicos</div>
                    <a
                      href={`mailto:${ORG_INFO.email}`}
                      className="block text-[#9B417E] font-semibold hover:underline break-all"
                    >
                      {ORG_INFO.email}
                    </a>
                    <a
                      href={`mailto:${ORG_INFO.luminaEmail}`}
                      className="block text-[#3E547A] text-xs font-semibold hover:underline break-all mt-1"
                    >
                      {ORG_INFO.luminaEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('inscripcion')}
              className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#3E547A] to-[#9B417E] hover:opacity-95 shadow-lg transition-all cursor-pointer"
            >
              Abrir Formulario de Inscripción / Contacto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
