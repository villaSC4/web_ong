import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ExternalLink,
  MapPin,
  X,
} from 'lucide-react';
import { SOCIAL_GALLERY } from '../data/siteData';

const HERO_PROFILES = [
  {
    id: 'emprendedora',
    tabLabel: 'Quiero Emprender',
    title: 'Convierte tu idea o pequeño negocio en una empresa sostenible',
    description:
      'Accede gratuitamente a 12 cursos interactivos paso a paso (25 a 30 horas) y construye tu Plan de Negocios personalizado con el acompañamiento de ONGD UJ MAYA en Tacna.',
    image: '/social/fb_ujmaya_2.jpg',
    imageCaption: 'Programa DreamBuilder impulsado en nuestras redes oficiales',
    ctaText: 'Ir a la Escuela de Negocios',
    route: '/programa',
    color: '#9B417E',
    highlights: [
      'Desde definir tu sueño hasta costos, precios y marketing',
      'Incluye plantillas financieras y acceso a capital semilla',
      'Avanza a tu propio ritmo con mentoría en Tacna',
    ],
  },
  {
    id: 'trabajadora',
    tabLabel: 'Certificar mi Oficio (MTPE)',
    title: 'Certifica tus años de experiencia laboral con respaldo del Estado',
    description:
      'Junto a nuestro Centro Autorizado aliado (Agencia Quality Work Nikilia E.I.R.L.), evaluamos tu desempeño práctico en situación real o simulada de trabajo con validez nacional.',
    image: '/social/ig_lumina_44.jpg',
    imageCaption: 'Talleres presenciales "Tacna Construyendo Futuros"',
    ctaText: 'Hacer Autodiagnóstico MTPE',
    route: '/certificacion',
    color: '#347B65',
    highlights: [
      'Ejecución de Ventas (Estándar G2347007-1)',
      'Servicios de Limpieza y Supervisión (M2981001-1 / 2)',
      'Trabajo en el Hogar: Alimentos, Ambientes y Prendas',
    ],
  },
  {
    id: 'bienestar',
    tabLabel: 'Apoyo Integral Mujer',
    title: 'Sanación emocional, defensa de derechos y autonomía real',
    description:
      'Desde 2015 prevenimos y tratamos problemáticas psicológicas, físicas, legales y económicas derivadas de la violencia familiar, laboral o social en la Provincia de Tacna.',
    image: '/social/fb_profile_24.jpg',
    imageCaption: 'Intervención directa con mujeres y familias en Tacna',
    ctaText: 'Conocer Nuestra Misión y Apoyo',
    route: '/nosotros',
    color: '#3E547A',
    highlights: [
      'Acompañamiento psicológico y orientación legal gratuita',
      'Prevención de violencia y soporte a madres adolescentes',
      'Red de sororidad y liderazgo femenino en el sur del Perú',
    ],
  },
  {
    id: 'voluntario',
    tabLabel: 'Soy Joven Voluntario',
    title: 'Liderazgo juvenil, integridad y acción ciudadana en el sur del Perú',
    description:
      'Únete a Lumina Voluntarios, el brazo juvenil de ONGD UJ MAYA con presencia activa en el Encuentro Macrorregional Sur de la Juventud y talleres comunitarios.',
    image: '/social/ig_lumina_40.jpg',
    imageCaption: 'Equipo Juvenil Lumina de ONGD UJ MAYA en las calles de Tacna',
    ctaText: 'Explorar Hub Lumina Voluntarios',
    route: '/lumina',
    color: '#EB7D3C',
    highlights: [
      'Brigadas de educación, gobernabilidad, psicología y arte',
      'Incidencia macrorregional (Tacna, Moquegua, Arequipa, Puno)',
      'Certificación de horas de voluntariado e impacto social',
    ],
  },
];

const FIVE_HANDS_PILLARS = [
  {
    id: 'mano-purpura',
    colorName: 'Dimensión Sororidad y Protección',
    hex: '#9B417E',
    title: 'Grupo “Mujeres Transformando Vidas”',
    subtitle: 'Bienestar Psicológico, Físico y Reconocimiento de Derechos',
    description:
      'Representa la protección y dignidad de la mujer. Identificamos, prevenimos y tratamos secuelas del maltrato laboral, familiar o social para que cada mujer sea valorada como una persona íntegra y libre.',
    image: '/social/fb_profile_24.jpg',
    linkTo: '/nosotros',
    linkLabel: 'Explorar Historia y Misión',
  },
  {
    id: 'mano-dorada',
    colorName: 'Dimensión Emprendimiento',
    hex: '#D9A300',
    bgHex: '#F6C826',
    title: 'Escuela de Negocios (Modelo DreamBuilder)',
    subtitle: '12 Cursos Interactivos + Financiando su Sueño + Sueñe en Grande',
    description:
      'Representa la autonomía económica. A través de una ruta pedagógica práctica, cada participante diseña su propio Plan de Negocios, aprende finanzas y conecta con cadenas de valor.',
    image: '/social/fb_ujmaya_2.jpg',
    linkTo: '/programa',
    linkLabel: 'Abrir los 12 Cursos y Simulador',
  },
  {
    id: 'mano-esmeralda',
    colorName: 'Dimensión Empleabilidad Oficial',
    hex: '#347B65',
    title: 'Certificación de Competencias Laborales (MTPE)',
    subtitle: 'Alianza Agencia Quality Work Nikilia E.I.R.L. • Constancia N° 202400293',
    description:
      'Representa el reconocimiento formal del esfuerzo. Evaluamos en situación real o simulada de trabajo 6 estándares ocupacionales autorizados por el Ministerio de Trabajo con alcance nacional.',
    image: '/social/ig_lumina_44.jpg',
    linkTo: '/certificacion',
    linkLabel: 'Ir al Autoevaluador de Competencias',
  },
  {
    id: 'mano-coral',
    colorName: 'Dimensión Juventud y Ciudadanía',
    hex: '#EB7D3C',
    title: 'Red Juvenil “Lumina Voluntarios”',
    subtitle: 'Participación Ciudadana, Integridad y Liderazgo Macrorregional',
    description:
      'Representa la energía intergeneracional. Jóvenes voluntarios de Tacna que llevan talleres, campañas solidarias y formación ciudadana a comunidades vulnerables.',
    image: '/social/ig_lumina_40.jpg',
    linkTo: '/lumina',
    linkLabel: 'Descubrir tu Brigada en Lumina',
  },
  {
    id: 'mano-azul',
    colorName: 'Dimensión Acción Comunitaria',
    hex: '#3E547A',
    title: 'Intervención Solidaria y Articulación en Tacna',
    subtitle: 'Alianzas con Estado, Academia, Empresa Privada y Comunidad',
    description:
      'Representa el compromiso en terreno desde 2015. Llevamos apoyo directo, jornadas infantiles como "Pasitos Firmes" y articulación provincial y regional.',
    image: '/social/ig_lumina_38.jpg',
    linkTo: '/sumate',
    linkLabel: 'Articular Alianza o Apoyo',
  },
];

const DIAGNOSTIC_OPTIONS = [
  {
    situation: 'Tengo una idea o negocio pequeño y quiero ordenarlo y vender más',
    recommendation: {
      title: 'Programa Creador de Negocios (12 Cursos)',
      desc: 'Ideal para estructurar tus costos, marketing, precios y obtener tu Plan de Negocios personalizado sin costo.',
      path: '/programa',
      btn: 'Comenzar Ruta de Emprendimiento',
      color: '#9B417E',
      image: '/social/fb_ujmaya_2.jpg',
    },
  },
  {
    situation: 'Tengo experiencia trabajando en Ventas, Limpieza o Trabajo del Hogar',
    recommendation: {
      title: 'Certificación Oficial de Competencias (MTPE)',
      desc: 'Acredita tu experiencia práctica mediante evaluación oficial avalada por la Constancia N° 202400293 del Ministerio de Trabajo.',
      path: '/certificacion',
      btn: 'Evaluar mi Perfil Ocupacional',
      color: '#347B65',
      image: '/social/ig_lumina_44.jpg',
    },
  },
  {
    situation: 'Necesito orientación psicológica, legal o una red de apoyo para mujeres',
    recommendation: {
      title: 'Grupo “Mujeres Transformando Vidas”',
      desc: 'Nuestro equipo multidisciplinario en Tacna te acompaña de manera confidencial, empática y gratuita.',
      path: '/nosotros',
      btn: 'Conocer el Grupo y Contactar',
      color: '#3E547A',
      image: '/social/fb_profile_24.jpg',
    },
  },
  {
    situation: 'Soy joven estudiante/profesional o represento a una institución aliada',
    recommendation: {
      title: 'Red Lumina Voluntarios & Alianzas UJ MAYA',
      desc: 'Súmate a nuestras brigadas juveniles en Tacna o articula un convenio interinstitucional de impacto social.',
      path: '/lumina',
      btn: 'Unirme a Lumina Voluntarios',
      color: '#EB7D3C',
      image: '/social/ig_lumina_40.jpg',
    },
  },
];

export default function HomePage({ onOpenModal }) {
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [selectedHand, setSelectedHand] = useState(FIVE_HANDS_PILLARS[0]);
  const [diagnosticIdx, setDiagnosticIdx] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const navigate = useNavigate();

  const currentHero = HERO_PROFILES[activeHeroTab];

  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          1. HERO CINÉTICO CON FOTOGRAFÍA REAL DINÁMICA
         ===================================================================== */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#3E547A] to-[#5E2750] text-white pt-10 pb-20 lg:py-20 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#9B417E]/30 blur-3xl animate-glow pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#F6C826]/15 blur-3xl animate-glow pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Interactive Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex flex-wrap justify-start gap-2.5"
          >
            {HERO_PROFILES.map((prof, idx) => (
              <button
                key={prof.id}
                onClick={() => setActiveHeroTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeHeroTab === idx
                    ? 'bg-[#F6C826] text-slate-900 shadow-lg scale-105'
                    : 'bg-white/10 text-white/90 hover:text-white hover:bg-white/20 border border-white/15'
                }`}
              >
                {prof.tabLabel}
              </button>
            ))}
          </motion.div>

          {/* Dynamic Hero Content + Real Social Media Photography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHero.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    {currentHero.title}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl">
                    {currentHero.description}
                  </p>

                  <div className="space-y-3 pt-1">
                    {currentHero.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm sm:text-base text-slate-100"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#F6C826] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      to={currentHero.route}
                      className="px-7 py-4 rounded-2xl font-bold text-slate-900 bg-[#F6C826] hover:bg-[#f8d249] shadow-xl hover:scale-105 transition-all flex items-center gap-2 text-base"
                    >
                      <span>{currentHero.ctaText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>

                    <button
                      onClick={() => onOpenModal('inscripcion')}
                      className="px-6 py-4 rounded-2xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-xs transition-all flex items-center gap-2 text-base cursor-pointer"
                    >
                      <Award className="w-5 h-5 text-[#F6C826]" />
                      Inscripción Rápida
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Visual Showcase with Real Photos from Tacna */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHero.image}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/30 space-y-4"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                    <img
                      src={currentHero.image}
                      alt={currentHero.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                      <p className="text-white text-xs sm:text-sm font-semibold">
                        {currentHero.imageCaption}
                      </p>
                    </div>
                  </div>

                  {/* Quick Thumbnail Strip of Real Activities */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {HERO_PROFILES.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveHeroTab(idx)}
                        className={`relative rounded-xl overflow-hidden h-16 border-2 transition-all cursor-pointer ${
                          activeHeroTab === idx
                            ? 'border-[#9B417E] scale-105 shadow-md'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={p.image}
                          alt={p.tabLabel}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CINTA DINÁMICA INFINITA (MARQUEE)
         ===================================================================== */}
      <div className="bg-[#151F30] text-white py-4 border-y border-white/10 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 text-xs sm:text-sm font-bold tracking-wide">
          {[...Array(2)].map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              <span className="text-[#F6C826]">
                ONGD UJ MAYA • FUNDADA EN TACNA EN 2015
              </span>
              <span className="text-slate-300">
                • GRUPO “MUJERES TRANSFORMANDO VIDAS”
              </span>
              <span className="text-emerald-400">
                • CERTIFICACIÓN OFICIAL MTPE CONSTANCIA N° 202400293
              </span>
              <span className="text-pink-300">
                • PROGRAMA EMPRENDEDOR DE 12 CURSOS (MODELO DREAMBUILDER)
              </span>
              <span className="text-orange-300">
                • RED JUVENIL @LUMINA.VOLUNTARIOS
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* =====================================================================
          3. GALERÍA VIVA DE REDES SOCIALES ("TACNA EN ACCIÓN")
         ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#3E547A]">
                Nuestra Labor Real en Tacna y el Sur del Perú
              </h2>
              <p className="text-slate-600 mt-2 text-base sm:text-lg max-w-2xl">
                Fotografías reales de nuestras intervenciones comunitarias, talleres en la
                Municipalidad Provincial de Tacna, convocatorias DreamBuilder y movilizaciones
                de Lumina Voluntarios.
              </p>
            </div>
            <Link
              to="/lumina"
              className="text-sm font-bold text-[#9B417E] hover:text-[#3E547A] flex items-center gap-1.5 shrink-0"
            >
              Ver más en la página de Lumina y Redes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_GALLERY.slice(0, 8).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setLightboxPhoto(item)}
                className="group bg-[#FAF9F6] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="text-xs font-semibold text-[#9B417E] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#3E547A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#3E547A]">
                  <span>{item.sourceName}</span>
                  <span>Ampliar foto →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. EXPERIENCIA INTERACTIVA: LAS 5 MANOS DE UJ MAYA CON FOTOS
         ===================================================================== */}
      <section className="py-20 bg-[#FAF9F6] border-t border-slate-200/70">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-[#3E547A]">
              El Ecosistema de las 5 Manos de UJ MAYA
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Nuestro emblema de 5 brazos entrelazados representa cinco pilares de
              transformación que puedes explorar de forma interactiva:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Interactive Wheel / Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <img
                  src="/logo-ujmaya.jpg"
                  alt="Simbología 5 Manos UJ MAYA"
                  className="w-16 h-16 rounded-full object-contain border border-slate-200 p-1 animate-float"
                />
                <div>
                  <div className="text-lg font-extrabold text-slate-900">
                    Selecciona una dimensión
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Haz clic en cada color de nuestra identidad
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {FIVE_HANDS_PILLARS.map((pillar) => {
                  const isSelected = selectedHand.id === pillar.id;
                  return (
                    <motion.button
                      key={pillar.id}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedHand(pillar)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                          : 'bg-[#FAF9F6] text-slate-800 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className="w-5 h-5 rounded-full shrink-0 ring-4 ring-white/20"
                          style={{ backgroundColor: pillar.bgHex || pillar.hex }}
                        />
                        <div>
                          <div className="text-xs font-medium opacity-75">
                            {pillar.colorName}
                          </div>
                          <div className="text-sm sm:text-base font-bold">
                            {pillar.title}
                          </div>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#F6C826]' : 'text-slate-400'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Dynamic Spotlight Panel with Real Photo */}
            <div className="lg:col-span-7 flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHand.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
                  style={{ backgroundColor: selectedHand.hex }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                    <div className="md:col-span-7 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                        {selectedHand.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 font-semibold">
                        {selectedHand.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-white/95 leading-relaxed bg-black/15 p-5 rounded-2xl border border-white/15">
                        {selectedHand.description}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <div className="rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl aspect-[4/4] bg-black/20">
                        <img
                          src={selectedHand.image}
                          alt={selectedHand.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <Link
                      to={selectedHand.linkTo}
                      className="px-6 py-3.5 rounded-2xl font-bold bg-[#F6C826] text-slate-900 hover:bg-[#f8d249] shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
                    >
                      <span>{selectedHand.linkLabel}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>

                    <button
                      onClick={() => onOpenModal('inscripcion', selectedHand.title)}
                      className="px-5 py-3.5 rounded-2xl font-bold bg-white/15 hover:bg-white/25 border border-white/30 text-white transition-all text-sm cursor-pointer"
                    >
                      Postular / Inscribirme aquí
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. ORIENTADOR INTERACTIVO DE RUTA
         ===================================================================== */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#283854] via-[#3E547A] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  ¿No sabes por qué página empezar? Elige tu situación actual:
                </h2>
                <div className="space-y-3 pt-2">
                  {DIAGNOSTIC_OPTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDiagnosticIdx(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-semibold flex items-center justify-between gap-3 cursor-pointer ${
                        diagnosticIdx === idx
                          ? 'bg-[#F6C826] text-slate-900 border-[#F6C826] font-bold shadow-md'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                      }`}
                    >
                      <span>{item.situation}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={diagnosticIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white text-slate-800 rounded-3xl overflow-hidden shadow-xl border-t-8"
                    style={{
                      borderTopColor: DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.color,
                    }}
                  >
                    <div className="h-48 overflow-hidden bg-slate-900">
                      <img
                        src={DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.image}
                        alt={DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-7 space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.desc}
                      </p>
                      <div className="pt-1">
                        <button
                          onClick={() =>
                            navigate(DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.path)
                          }
                          className="px-6 py-3.5 rounded-xl font-bold text-white shadow-md hover:opacity-95 transition-all flex items-center gap-2 text-sm cursor-pointer"
                          style={{
                            backgroundColor:
                              DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.color,
                          }}
                        >
                          <span>{DIAGNOSTIC_OPTIONS[diagnosticIdx].recommendation.btn}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Photos */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative bg-slate-950 max-h-[65vh] flex items-center justify-center">
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="max-h-[65vh] w-auto object-contain"
                />
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#9B417E]">
                    {lightboxPhoto.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {lightboxPhoto.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {lightboxPhoto.description}
                  </p>
                </div>
                <a
                  href={lightboxPhoto.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl font-bold text-white bg-[#3E547A] hover:bg-[#2c3d59] text-xs flex items-center gap-1.5 shrink-0"
                >
                  <span>Ver en {lightboxPhoto.sourceName}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
