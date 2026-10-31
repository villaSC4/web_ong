import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  MapPin,
  Users,
} from 'lucide-react';
import { ORG_INFO } from '../data/siteData';

const TIMELINE_EVENTS = [
  {
    year: '2015',
    title: 'Fundación en la Provincia de Tacna',
    subtitle: 'Origen Multidisciplinario',
    description:
      'Un equipo de profesionales multidisciplinarios funda ONGD UJ MAYA en Tacna, motivados por revertir los altos índices de abandono infantil, embarazo en adolescentes y violencia hacia la mujer.',
    highlight: 'Inicio de intervenciones comunitarias y defensa de derechos.',
    image: '/social/fb_profile_24.jpg',
    imageCaption: 'Trabajo de campo y visitas comunitarias de ONGD UJ MAYA en Tacna',
  },
  {
    year: '2018 - 2021',
    title: 'Consolidación del Grupo “Mujeres Transformando Vidas”',
    subtitle: 'Bienestar Integral',
    description:
      'Se estructura el modelo de identificación, prevención y tratamiento integral de problemas económicos, psicológicos y físicos derivados del maltrato laboral, familiar o social.',
    highlight: 'Círculos de sororidad, soporte emocional y empoderamiento femenino.',
    image: '/social/ig_lumina_38.jpg',
    imageCaption: 'Actividades comunitarias “Con Lumina en Pasitos Firmes” en Tacna',
  },
  {
    year: '2024',
    title: 'Alianza de Certificación de Competencias Laborales (MTPE)',
    subtitle: 'Empleabilidad Nacional',
    description:
      'Mediante la Constancia de Autorización N° 202400293 del Ministerio de Trabajo otorgada a Agencia Quality Work Nikilia E.I.R.L., se articula la evaluación y certificación oficial en 6 estándares laborales.',
    highlight: 'Certificación en Ventas, Servicios de Limpieza y Trabajo en el Hogar.',
    image: '/social/ig_lumina_44.jpg',
    imageCaption: 'Presidenta Margarita V. Herrera Bendezú y equipo en la Municipalidad Provincial de Tacna',
  },
  {
    year: '2025 - 2026',
    title: 'Expansión Macrorregional y Red Juvenil Lumina Voluntarios',
    subtitle: 'Proyección Nacional e Internacional',
    description:
      'Participación activa de nuestra red juvenil @lumina.voluntarios en el Encuentro Macrorregional Sur de la Juventud y lanzamiento de la Escuela Digital de Negocios (modelo DreamBuilder).',
    highlight: 'Articulación con gobiernos locales/regionales, academia y empresa privada.',
    image: '/social/ig_lumina_40.jpg',
    imageCaption: 'Movilización ciudadana de Lumina y ONGD UJ MAYA en el Paseo Cívico de Tacna',
  },
];

const ARTICULATION_ACTORS = [
  {
    id: 'estado',
    name: 'Gobierno Regional y Locales',
    icon: Landmark,
    role: 'Políticas Públicas y Prevención',
    desc: 'Coordinamos mesas de trabajo en la Provincia de Tacna para la prevención de la violencia familiar, protección de la niñez y ferias de empleabilidad.',
    image: '/social/ig_lumina_44.jpg',
  },
  {
    id: 'cooperacion',
    name: 'Cooperación Internacional',
    icon: Globe2,
    role: 'Metodologías Globales e Innovación',
    desc: 'Adoptamos estándares internacionales como el modelo formativo DreamBuilder para el empoderamiento económico de mujeres vulnerables.',
    image: '/social/fb_ujmaya_2.jpg',
  },
  {
    id: 'academia',
    name: 'Instituciones Académicas',
    icon: GraduationCap,
    role: 'Investigación y Voluntariado Especializado',
    desc: 'Diseñamos investigaciones aplicadas y sumamos talento universitario a través de nuestra red juvenil Lumina Voluntarios.',
    image: '/social/ig_lumina_36.jpg',
  },
  {
    id: 'empresa',
    name: 'Empresa Privada y Centros CCCL',
    icon: Building2,
    role: 'Inserción Laboral y Cadenas de Valor',
    desc: 'Junto a Agencia Quality Work Nikilia E.I.R.L. certificamos competencias laborales (MTPE) y conectamos emprendedoras con cadenas de valor B2B.',
    image: '/social/ig_lumina_43.jpg',
  },
  {
    id: 'comunidad',
    name: 'Sociedad Civil y Comunidad Organizada',
    icon: Users,
    role: 'Grupo “Mujeres Transformando Vidas”',
    desc: 'Trabajamos desde las bases comunitarias para que cada mujer sea reconocida, respetada y salga adelante por sus propios medios.',
    image: '/social/fb_profile_24.jpg',
  },
];

export default function AboutPage({ onOpenModal }) {
  const [activeTimeline, setActiveTimeline] = useState(3);
  const [selectedActor, setSelectedActor] = useState(ARTICULATION_ACTORS[0]);
  const [showFullLetter, setShowFullLetter] = useState(false);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* =====================================================================
          1. HEADER INSTITUCIONAL
         ===================================================================== */}
      <section className="bg-gradient-to-br from-[#283854] via-[#3E547A] to-[#9B417E] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Investigación, acción social y dignidad para la mujer en Tacna y el Perú
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                Somos un Organismo No Gubernamental de Desarrollo (ONGD) de derecho privado
                sin fines de lucro que potencia capacidades y transforma realidades desde una
                perspectiva integral.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden border-2 border-white/25 shadow-2xl relative aspect-[16/10] bg-slate-900">
                <img
                  src="/social/ig_lumina_44.jpg"
                  alt="Directiva y equipo de ONGD UJ MAYA en la Municipalidad Provincial de Tacna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white/95 font-medium">
                  Presidenta Margarita V. Herrera Bendezú junto al equipo de ONGD UJ MAYA y Lumina en Tacna
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CARTA DE PRESENTACIÓN INTERACTIVA
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Identity Card */}
            <div className="lg:col-span-4 bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/logo-ujmaya.jpg"
                  alt="Logo Oficial ONGD UJ MAYA"
                  className="w-20 h-20 rounded-full object-contain bg-white p-1 border border-slate-200 shadow-xs"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#3E547A]">
                    {ORG_INFO.president}
                  </h3>
                  <p className="text-xs text-[#9B417E] font-semibold mt-0.5">
                    Presidenta • ONGD UJ MAYA
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] relative">
                <img
                  src="/social/fb_profile_24.jpg"
                  alt="Labor de campo en Tacna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/75 px-3 py-1.5 text-[11px] text-white">
                  Intervención directa con familias vulnerables en Tacna
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-200 pt-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#EB7D3C] shrink-0 mt-0.5" />
                  <span>
                    <strong>Sede Institucional:</strong> {ORG_INFO.address}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#347B65] shrink-0" />
                  <span>
                    <strong>Inicio de labores:</strong> Año 2015 (Provincia de Tacna)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowFullLetter(!showFullLetter)}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-[#3E547A] text-white hover:bg-[#2d3e5c] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#F6C826]" />
                {showFullLetter
                  ? 'Ver Resumen Ejecutivo de Misión'
                  : 'Leer Carta de Presentación Oficial Completa'}
              </button>
            </div>

            {/* Right Interactive Editorial Content */}
            <div className="lg:col-span-8 space-y-6">
              <AnimatePresence mode="wait">
                {!showFullLetter ? (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      Bienestar integral: psicológico, físico, económico y social
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      Nuestra misión es contribuir al <strong>bienestar integral de las mujeres</strong> que
                      se encuentran en situaciones de vulnerabilidad debido al maltrato que han
                      sufrido en el campo <strong>laboral, familiar o social</strong>, ayudando a
                      mejorar sus condiciones de vida a través de la{' '}
                      <strong>identificación, prevención y tratamiento</strong> de sus problemas
                      económicos, psicológicos o físicos.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-5 rounded-2xl bg-[#9B417E]/8 border border-[#9B417E]/20">
                        <div className="font-extrabold text-[#9B417E] text-sm">
                          1. Identificación y Prevención
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          Detección temprana de factores de riesgo de violencia, abandono infantil y embarazo adolescente.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#347B65]/8 border border-[#347B65]/20">
                        <div className="font-extrabold text-[#347B65] text-sm">
                          2. Tratamiento Multidisciplinario
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          Soporte psicológico, físico, legal y capacitación económica para recuperar la autonomía.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-[#3E547A]/8 border border-[#3E547A]/20">
                        <div className="font-extrabold text-[#3E547A] text-sm">
                          3. Igualdad y Derechos
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          Reconocimiento de los derechos de la mujer para que salgan adelante por sus propios medios.
                        </p>
                      </div>
                    </div>

                    {/* Mini Galería de Fotos de Respaldo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] relative group">
                        <img
                          src="/social/ig_lumina_43.jpg"
                          alt="Campaña de solidaridad de ONGD UJ MAYA en Tacna"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                          Entrega de ayuda humanitaria y soporte comunitario en Tacna
                        </div>
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] relative group">
                        <img
                          src="/social/ig_lumina_38.jpg"
                          alt="Con Lumina en Pasitos Firmes"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                          Jornadas de desarrollo infantil y prevención “Pasitos Firmes”
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="full-letter"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed"
                  >
                    <h3 className="text-lg font-extrabold text-center text-[#3E547A]">
                      CARTA DE PRESENTACIÓN — ONGD UJ MAYA
                    </h3>
                    <p>
                      La <strong>ASOCIACIÓN MULTIDISCIPLINARIA UJ MAYA - ONGD UJ MAYA</strong>, es
                      un organismo no gubernamental de desarrollo de derecho privado que por su
                      naturaleza y definición no persigue fines de lucro. Es una ONGD Peruana que
                      diseña y ejecuta investigaciones y proyectos innovadores que potencian las
                      capacidades y mejoran el acceso a oportunidades de personas vulnerables,
                      contribuyendo al logro de una sociedad más inclusiva y al desarrollo
                      sostenible.
                    </p>
                    <p>
                      <strong>ONGD UJ MAYA</strong>, inicia sus labores en la Provincia de Tacna en
                      el año 2015, por la voluntad de un grupo de profesionales
                      multidisciplinarios, motivados por revertir los altos índices de abandono
                      infantil, madres adolescentes y violencia hacia la mujer.
                    </p>
                    <p>
                      Siendo nuestra Misión contribuir al bienestar integral de las mujeres que se
                      encuentran en situaciones de vulnerabilidad debido al maltrato que han
                      sufrido ya sea en el campo laboral, familiar, social, ayudando a mejorar sus
                      condiciones de vida a través de la identificación, prevención y tratamiento
                      de sus problemas ya sean económicos, psicológicos o físicos, para que de esta
                      manera puedan mejorar su calidad de vida, además lograr el reconocimiento de
                      los derechos de la mujer en cualquiera de los campos en los cuales se
                      desenvuelva, para que logren ser reconocidas, respetadas y para que puedan
                      salir adelante por sus propios medios en igualdad de condiciones y
                      valorándolas como personas íntegras y que tienen capacidades y habilidades
                      que las hacen únicas y dignas de respetar.
                    </p>
                    <p className="font-semibold text-[#9B417E]">
                      Dicho lo expuesto, te invitamos a ser parte del Grupo “Mujeres Transformando
                      Vidas”.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. LÍNEA DE TIEMPO INTERACTIVA CON FOTOS REALES (2015 - 2026)
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3E547A]">
            Nuestra Evolución en Tacna (2015 – 2026)
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Explora cada etapa de nuestro crecimiento institucional acompañado de registros reales
          </p>
        </div>

        {/* Interactive Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {TIMELINE_EVENTS.map((ev, idx) => (
            <button
              key={ev.year}
              onClick={() => setActiveTimeline(idx)}
              className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                activeTimeline === idx
                  ? 'border-[#9B417E] bg-[#9B417E] text-white shadow-lg scale-[1.02]'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-[#3E547A]'
              }`}
            >
              <div className="text-2xl font-extrabold">{ev.year}</div>
              <div
                className={`text-xs font-semibold mt-1 line-clamp-1 ${
                  activeTimeline === idx ? 'text-[#F6C826]' : 'text-slate-500'
                }`}
              >
                {ev.subtitle}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] relative bg-slate-900">
              <img
                src={TIMELINE_EVENTS[activeTimeline].image}
                alt={TIMELINE_EVENTS[activeTimeline].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-3.5 text-xs text-white/95">
                {TIMELINE_EVENTS[activeTimeline].imageCaption}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-sm font-bold text-[#9B417E]">
                {TIMELINE_EVENTS[activeTimeline].year} —{' '}
                {TIMELINE_EVENTS[activeTimeline].subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {TIMELINE_EVENTS[activeTimeline].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {TIMELINE_EVENTS[activeTimeline].description}
              </p>
              <div className="pt-1 flex items-center gap-2 text-sm font-bold text-[#347B65]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{TIMELINE_EVENTS[activeTimeline].highlight}</span>
              </div>
              <div className="pt-3">
                <Link
                  to="/programa"
                  className="inline-flex px-6 py-3.5 rounded-2xl font-bold text-white bg-[#3E547A] hover:bg-[#2c3d59] transition-all items-center gap-2 text-sm"
                >
                  <span>Ver Programas Actuales</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* =====================================================================
          4. RADAR DE ARTICULACIÓN MULTI-ACTOR
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-[#3E547A]">
              Red de Alianzas para el Desarrollo Sostenible
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Haz clic en cada sector para conocer cómo articulamos esfuerzos desde Tacna:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2.5">
              {ARTICULATION_ACTORS.map((actor) => {
                const IconComp = actor.icon;
                const isSelected = selectedActor.id === actor.id;
                return (
                  <button
                    key={actor.id}
                    onClick={() => setSelectedActor(actor)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#3E547A] text-white border-[#3E547A] shadow-md'
                        : 'bg-[#FAF9F6] text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <IconComp
                      className={`w-5 h-5 shrink-0 ${
                        isSelected ? 'text-[#F6C826]' : 'text-[#9B417E]'
                      }`}
                    />
                    <span className="font-bold text-sm">{actor.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedActor.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                >
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-200 aspect-square bg-slate-900">
                    <img
                      src={selectedActor.image}
                      alt={selectedActor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-3">
                    <div className="text-sm font-bold text-[#9B417E]">
                      {selectedActor.role}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {selectedActor.name}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {selectedActor.desc}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() =>
                          onOpenModal(
                            'voluntario',
                            'Aliado Estratégico (Empresa Privada / Institución / Universidad / Estado)'
                          )
                        }
                        className="px-5 py-3 rounded-xl font-bold text-white bg-[#9B417E] hover:bg-[#823368] text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        Proponer Convenio o Alianza con ONGD UJ MAYA
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
