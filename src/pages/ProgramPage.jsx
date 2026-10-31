import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  FileSpreadsheet,
  Layers,
  Lock,
  MessagesSquare,
  Search,
  Unlock,
  Video,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { PROGRAM_ROUTES, PROGRAM_TOOLS, PROGRAM_FAQS } from '../data/siteData';

const TOOL_ICONS = {
  Video,
  Wrench,
  FileSpreadsheet,
  MessagesSquare,
  Award,
  BookOpen,
};

const BUSINESS_PLAN_BLOCKS = [
  { courseIdx: 1, label: '1. Visión y Propósito Empresarial', tag: 'Curso 2' },
  { courseIdx: 2, label: '2. Estudio de Clientes y Competencia', tag: 'Curso 3' },
  { courseIdx: 3, label: '3. Resumen Ejecutivo y Pitch', tag: 'Curso 4' },
  { courseIdx: 4, label: '4. Plan de Operaciones y Proveedores', tag: 'Curso 5' },
  { courseIdx: 5, label: '5. Estrategia de Marca y Marketing', tag: 'Curso 6' },
  { courseIdx: 6, label: '6. Estructura de Costos y Precios', tag: 'Curso 7' },
  { courseIdx: 9, label: '7. Estado de Ganancias y Pérdidas', tag: 'Curso 10' },
  { courseIdx: 10, label: '8. Plan de Financiamiento y Acción', tag: 'Cursos 11-12' },
];

export default function ProgramPage({ onOpenModal }) {
  const routes = PROGRAM_ROUTES;
  const [selectedRouteId, setSelectedRouteId] = useState('emprendimiento');
  const activeRoute = routes.find((r) => r.id === selectedRouteId) || routes[0];

  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [expandAll, setExpandAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedModules, setCompletedModules] = useState({
    'emprendimiento-0': true,
    'emprendimiento-1': true,
  });
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleModuleCompleted = (routeId, idx, e) => {
    if (e) e.stopPropagation();
    const key = `${routeId}-${idx}`;
    setCompletedModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredModules = activeRoute.modules.filter(
    (m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const completedCount = activeRoute.modules.filter(
    (_, idx) => completedModules[`${activeRoute.id}-${idx}`]
  ).length;

  const progressPercent = Math.round(
    (completedCount / activeRoute.modules.length) * 100
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* =====================================================================
          1. HERO ESTILO DREAMBUILDER
         ===================================================================== */}
      <section className="bg-gradient-to-br from-[#3E547A] via-[#9B417E] to-[#2B3B56] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F6C826]/15 blur-3xl animate-glow pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center space-y-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight"
          >
            El Creador de Negocios y Empoderamiento para Mujeres
          </motion.h1>

          <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto leading-relaxed">
            Cursos interactivos paso a paso con contenidos prácticos para iniciar o hacer
            crecer tu negocio, acceder a capital, entrar a cadenas de valor y fortalecer
            tus derechos con <strong>ONGD UJ MAYA</strong>.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. SELECTOR INTERACTIVO "YO QUIERO..."
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3E547A]">
              Yo Quiero...
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Selecciona la meta que deseas alcanzar hoy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {routes.map((route) => {
              const isSelected = route.id === activeRoute.id;
              return (
                <motion.button
                  key={route.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    setSelectedRouteId(route.id);
                    setOpenModuleIndex(0);
                    setSearchQuery('');
                  }}
                  className={`text-left p-6 rounded-2xl border-2 transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#9B417E] bg-gradient-to-br from-[#9B417E]/10 to-[#3E547A]/5 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div
                      className="h-1.5 w-12 rounded-full"
                      style={{ backgroundColor: route.accentColor }}
                    />
                    <h3 className="text-lg font-bold text-slate-900 pt-1">
                      {route.yoQuieroTitle}
                    </h3>
                  </div>
                  <div className="pt-4 mt-3 border-t border-slate-100 text-xs font-semibold text-slate-600 flex items-center justify-between">
                    <span>{route.stats[0].value}</span>
                    <span className="font-bold text-[#3E547A]">Explorar módulos →</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. CONSTRUCTOR EN VIVO + ACORDEÓN DE LOS 12 CURSOS
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Malla Curricular y Acordeón */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-9 shadow-sm border border-slate-200/80 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoute.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center border-b border-slate-100 pb-6">
                  <div className="sm:col-span-8 space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3E547A]">
                      {activeRoute.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                      {activeRoute.subtitle}
                    </p>
                  </div>
                  {activeRoute.bannerImage && (
                    <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-900">
                      <img
                        src={activeRoute.bannerImage}
                        alt={activeRoute.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* 3 KPIs Visuales */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200">
                    <Layers className="w-5 h-5 text-[#9B417E] mb-1.5" />
                    <div className="text-xs font-medium text-slate-500">
                      {activeRoute.stats[0].label}
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {activeRoute.stats[0].value}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200">
                    <Clock className="w-5 h-5 text-[#347B65] mb-1.5" />
                    <div className="text-xs font-medium text-slate-500">
                      {activeRoute.stats[1].label}
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {activeRoute.stats[1].value}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200">
                    <Award className="w-5 h-5 text-[#EB7D3C] mb-1.5" />
                    <div className="text-xs font-medium text-slate-500">
                      {activeRoute.stats[2].label}
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {activeRoute.stats[2].value}
                    </div>
                  </div>
                </div>

                {/* Search & Expand Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <h3 className="text-xl font-bold text-[#3E547A]">
                    {activeRoute.modulesTitle}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:w-52">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Filtrar módulo..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:border-[#9B417E] focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={() => setExpandAll(!expandAll)}
                      className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer shrink-0"
                    >
                      {expandAll ? 'Contraer' : 'Expandir todo'}
                    </button>
                  </div>
                </div>

                {/* Accordion List */}
                <div className="space-y-3">
                  {filteredModules.map((mod, idx) => {
                    const isOpen = expandAll || openModuleIndex === idx;
                    const isDone = !!completedModules[`${activeRoute.id}-${idx}`];

                    return (
                      <motion.div
                        key={mod.code}
                        layout
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isOpen
                            ? 'border-[#3E547A] bg-white shadow-md'
                            : 'border-slate-200 bg-[#FAF9F6] hover:bg-white'
                        }`}
                      >
                        <button
                          onClick={() => {
                            if (expandAll) setExpandAll(false);
                            setOpenModuleIndex(openModuleIndex === idx ? -1 : idx);
                          }}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5">
                            <span
                              onClick={(e) =>
                                toggleModuleCompleted(activeRoute.id, idx, e)
                              }
                              title="Marcar módulo como completado en tu simulador"
                              className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all cursor-pointer shrink-0 ${
                                isDone
                                  ? 'bg-[#347B65] border-[#347B65] text-white scale-110'
                                  : 'border-slate-300 bg-white text-transparent hover:border-[#347B65]'
                              }`}
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                            <span className="text-sm sm:text-base font-bold text-slate-900">
                              {mod.title}
                            </span>
                          </div>

                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#3E547A] shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3 bg-white overflow-hidden"
                            >
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {mod.summary}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {mod.topics.map((topic, tIdx) => (
                                  <div
                                    key={tIdx}
                                    className="flex items-start gap-2 text-xs text-slate-600 bg-[#FAF9F6] p-2.5 rounded-xl border border-slate-200/60"
                                  >
                                    <CheckCircle2
                                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                                      style={{ color: activeRoute.accentColor }}
                                    />
                                    <span>{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (4 cols): Simulador en Vivo "Constructor de Mi Plan de Negocios" */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#1E293B] to-[#283854] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10 space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">
                  Constructor de tu Plan de Negocios
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Marca el círculo verde en cada curso de la izquierda para simular cómo se
                  desbloquean las secciones de tu entregable final:
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#F6C826]">Progreso de Ruta</span>
                  <span>
                    {completedCount} / {activeRoute.modules.length} módulos ({progressPercent}
                    %)
                  </span>
                </div>
                <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-gradient-to-r from-[#F6C826] to-[#347B65] rounded-full"
                  />
                </div>
              </div>

              {/* Business Plan Deliverable Blocks */}
              <div className="space-y-2">
                {BUSINESS_PLAN_BLOCKS.map((block) => {
                  const unlocked =
                    !!completedModules[`emprendimiento-${block.courseIdx}`] ||
                    completedCount >= 6;
                  return (
                    <div
                      key={block.label}
                      onClick={() =>
                        toggleModuleCompleted('emprendimiento', block.courseIdx)
                      }
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 cursor-pointer transition-all ${
                        unlocked
                          ? 'bg-[#347B65]/25 border-[#347B65] text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {unlocked ? (
                          <Unlock className="w-4 h-4 text-[#F6C826] shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                        <span>{block.label}</span>
                      </div>
                      <span className="text-[11px] text-slate-300 shrink-0">
                        {block.tag}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => onOpenModal('inscripcion', activeRoute.title)}
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-slate-900 bg-[#F6C826] hover:bg-[#f8d249] shadow-lg transition-all text-sm cursor-pointer"
                >
                  Inscribirme Gratis a esta Ruta
                </button>
                <Link
                  to="/certificacion"
                  className="w-full py-3 px-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 transition-all text-xs flex items-center justify-center gap-1.5"
                >
                  <span>¿Buscas Certificación Laboral MTPE? Ir aquí</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Real Social Media Evidence of DreamBuilder Promotion by ONGD UJ MAYA */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src="/social/fb_ujmaya_2.jpg"
                  alt="Convocatoria DreamBuilder difundida en Facebook de ONGD UJ MAYA"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-1 px-1">
                <h4 className="font-bold text-sm text-[#3E547A]">
                  Impulsamos a graduadas de DreamBuilder en el Perú
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desde nuestras redes oficiales acompañamos a las mujeres emprendedoras a
                  postular a fondos concursables y capital semilla con su Plan de Negocios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. HERRAMIENTAS INTERACTIVAS Y FAQ
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 space-y-16">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3E547A]">
              Herramientas incluidas en tu formación
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_TOOLS.map((tool, idx) => {
              const IconComp = TOOL_ICONS[tool.iconName] || BookOpen;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#9B417E]/10 text-[#9B417E] shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{tool.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#3E547A]">
              Preguntas Frecuentes sobre los Cursos y Modalidades
            </h2>
          </div>

          <div className="space-y-3">
            {PROGRAM_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-[#FAF9F6]"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#9B417E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
