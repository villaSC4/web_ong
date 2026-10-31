import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  HeartHandshake,
  Megaphone,
  Palette,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { ORG_INFO, SOCIAL_MOMENTS } from '../data/siteData';

const LUMINA_BRIGADES = [
  {
    id: 'gobernabilidad',
    talent: 'Liderazgo, Debate y Ciudadanía',
    brigadeName: 'Brigada de Gobernabilidad e Integridad',
    icon: Megaphone,
    color: '#EB7D3C',
    image: '/social/ig_lumina_39.jpg',
    description:
      'Representas a Lumina en espacios como el Encuentro Macrorregional Sur de la Juventud (EMSTACNA) y el Consejo Provincial de la Juventud, promoviendo transparencia, integridad y participación juvenil.',
    activities: [
      'Foros de liderazgo juvenil y participación ciudadana en Tacna',
      'Conversatorios de historia política, ética pública y derechos humanos',
      'Articulación con colectivos de Arequipa, Moquegua, Puno y Cusco',
    ],
  },
  {
    id: 'psicosocial',
    talent: 'Escucha, Psicología, Derecho o Salud',
    brigadeName: 'Brigada “Mujeres Transformando Vidas”',
    icon: HeartHandshake,
    color: '#9B417E',
    image: '/social/ig_lumina_38.jpg',
    description:
      'Apoyas directamente a nuestro equipo multidisciplinario en campañas de prevención de violencia hacia la mujer, desarrollo infantil (“Pasitos Firmes”) y orientación de derechos.',
    activities: [
      'Círculos de escucha y talleres de autoestima para mujeres y adolescentes',
      'Campañas de prevención de violencia familiar y abandono infantil',
      'Orientación básica en derechos laborales y familiares',
    ],
  },
  {
    id: 'educacion',
    talent: 'Enseñanza, Negocios o Tecnología',
    brigadeName: 'Brigada Mentores de Emprendimiento',
    icon: BookOpen,
    color: '#347B65',
    image: '/social/ig_lumina_43.jpg',
    description:
      'Acompañas a mujeres emprendedoras y familias vulnerables en jornadas comunitarias, ayudándolas a fortalecer sus negocios y acceder a oportunidades laborales.',
    activities: [
      'Tutoría digital para mujeres que inician los cursos de negocio',
      'Talleres presenciales de Modelo Canvas, finanzas y ventas',
      'Apoyo en campañas solidarias y jornadas comunitarias en Tacna',
    ],
  },
  {
    id: 'creativa',
    talent: 'Diseño, Fotografía, Reels y Redes',
    brigadeName: 'Brigada Creativa & Voz Digital Lumina',
    icon: Palette,
    color: '#3E547A',
    image: '/social/ig_lumina_36.jpg',
    description:
      'Das voz a las historias reales de impacto en @lumina.voluntarios y @ongujmaya, creando contenido que inspira a más jóvenes y aliados a sumarse.',
    activities: [
      'Cobertura audiovisual de talleres, pasacalles y campañas en Tacna',
      'Creación de Reels educativos e infografías de derechos',
      'Difusión de convocatorias y campañas solidarias',
    ],
  },
];

export default function LuminaPage({ onOpenModal }) {
  const [selectedBrigade, setSelectedBrigade] = useState(LUMINA_BRIGADES[0]);
  const [hoursPerWeek, setHoursPerWeek] = useState(4);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* =====================================================================
          1. HERO JUVENIL LUMINA VOLUNTARIOS CON FOTOS REALES
         ===================================================================== */}
      <section className="bg-gradient-to-br from-[#9B417E] via-[#EB7D3C] to-[#3E547A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/social/ig_lumina_34.jpg"
                  alt="Logo Oficial Lumina Voluntarios"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/40 shadow-lg bg-white"
                />
                <div>
                  <h2 className="text-xl font-extrabold text-[#F6C826]">
                    Lumina — Equipo Juvenil de UJ MAYA
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90">
                    Educación, trabajo, política, cultura y vida saludable en Tacna
                  </p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                Juventud que ilumina y transforma el sur del Perú
              </h1>
              <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                Somos <strong>Lumina Voluntarios</strong>, la red de voluntariado juvenil
                impulsada por <strong>ONGD UJ MAYA</strong> en Tacna. Promovemos el liderazgo
                joven, la gobernabilidad, la inclusión social y el acompañamiento comunitario
                activo.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() =>
                    onOpenModal(
                      'voluntario',
                      `Voluntariado Lumina: ${selectedBrigade.brigadeName}`
                    )
                  }
                  className="px-6 py-4 rounded-2xl font-bold bg-[#F6C826] text-slate-900 hover:bg-[#f8d249] shadow-xl text-sm sm:text-base cursor-pointer"
                >
                  Postular a Lumina Voluntarios
                </button>
                <a
                  href={ORG_INFO.socials.instagramLumina}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-4 rounded-2xl font-bold bg-white/15 hover:bg-white/25 border border-white/30 text-white flex items-center gap-2 text-sm sm:text-base"
                >
                  <InstagramIcon className="w-5 h-5" />
                  Seguir @lumina.voluntarios
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-950/35 backdrop-blur-md border border-white/25 rounded-3xl p-4 sm:p-5 space-y-4 shadow-2xl">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/15">
                  <img
                    src="/social/ig_lumina_40.jpg"
                    alt="Marcha Lumina iluminando futuros en Tacna"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white">
                    “Lumina iluminando futuros” — Movilización juvenil en Tacna
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/25 p-3.5 rounded-2xl">
                    <div className="text-2xl font-extrabold text-[#F6C826]">+15 años</div>
                    <div className="text-xs text-white/85">Edad mínima para sumarte en Tacna</div>
                  </div>
                  <div className="bg-black/25 p-3.5 rounded-2xl">
                    <div className="text-2xl font-extrabold text-[#F6C826]">Certificado</div>
                    <div className="text-xs text-white/85">Respaldo oficial de ONGD UJ MAYA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CONVOCATORIA REAL DE VOLUNTARIADO (AFICHES OFICIALES DE INSTAGRAM)
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/social/ig_lumina_41.jpg"
                alt="Afiche Oficial Te estamos buscando Voluntario Lumina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/social/ig_lumina_45.jpg"
                alt="Convocatoria Voluntariado Lumina y UJ MAYA Tacna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3E547A]">
              ¡Te estamos buscando, Voluntario! Únete al equipo juvenil de UJ MAYA
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Si quieres aprender, liderar y generar un impacto positivo en Tacna, forma
              parte de nuestros proyectos en <strong>educación, trabajo, política, cultura y vida saludable</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-2">
                <h3 className="font-bold text-[#9B417E] text-base">
                  Requisitos para postular
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9B417E] shrink-0" />
                    <span>Tener más de 15 años</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9B417E] shrink-0" />
                    <span>Residir en Tacna</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9B417E] shrink-0" />
                    <span>Compromiso, empatía y buena actitud</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-2">
                <h3 className="font-bold text-[#347B65] text-base">
                  Beneficios para ti
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347B65] shrink-0" />
                    <span>Formación en liderazgo y comunicación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347B65] shrink-0" />
                    <span>Talleres, capacitaciones y certificaciones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347B65] shrink-0" />
                    <span>Experiencia en proyectos sociales reales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() =>
                  onOpenModal('voluntario', 'Postulación Oficial a Lumina Voluntarios')
                }
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-[#9B417E] hover:bg-[#823368] text-sm cursor-pointer shadow-md"
              >
                Inscribirme como Voluntario Ahora
              </button>
              <span className="text-xs text-slate-500">
                Correo juvenil: <strong>{ORG_INFO.luminaEmail}</strong> • Cel: <strong>{ORG_INFO.phone}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MATCHMAKER INTERACTIVO: DESCUBRE TU BRIGADA EN LUMINA
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3E547A]">
              ¿Cuál es tu superpoder? Descubre tu Brigada en Lumina
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Selecciona el área que más te apasiona y ajusta tus horas semanales para
              calcular tu impacto:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LUMINA_BRIGADES.map((brigade) => {
              const IconComp = brigade.icon;
              const isSelected = selectedBrigade.id === brigade.id;
              return (
                <button
                  key={brigade.id}
                  onClick={() => setSelectedBrigade(brigade)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#EB7D3C] bg-[#EB7D3C]/10 shadow-md scale-[1.02]'
                      : 'border-slate-200 bg-[#FAF9F6] hover:bg-white'
                  }`}
                >
                  <div className="space-y-3">
                    <div
                      className="w-11 h-11 rounded-xl text-white flex items-center justify-center"
                      style={{ backgroundColor: brigade.color }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Si te apasiona:
                    </div>
                    <div className="text-base font-extrabold text-slate-900">
                      {brigade.talent}
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/70 text-xs font-bold text-[#3E547A]">
                    Ver brigada →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Brigade Result Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBrigade.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-3xl p-7 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              style={{ backgroundColor: selectedBrigade.color }}
            >
              <div className="lg:col-span-4 rounded-2xl overflow-hidden border-2 border-white/25 aspect-square bg-slate-900">
                <img
                  src={selectedBrigade.image}
                  alt={selectedBrigade.brigadeName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-2xl font-bold">
                  {selectedBrigade.brigadeName}
                </h3>
                <p className="text-sm text-white/95 leading-relaxed">
                  {selectedBrigade.description}
                </p>
                <ul className="space-y-2 pt-1">
                  {selectedBrigade.activities.map((act, i) => (
                    <li key={i} className="text-xs sm:text-sm flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F6C826] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 bg-black/25 backdrop-blur-xs rounded-2xl p-6 space-y-4 border border-white/15">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>¿Cuántas horas por semana puedes aportar?</span>
                    <span className="text-[#F6C826]">{hoursPerWeek} hrs / sem</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="2"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-[#F6C826] cursor-pointer"
                  />
                </div>
                <div className="p-4 rounded-xl bg-white/10 text-center">
                  <div className="text-xs text-white/80">En 3 meses acumularás:</div>
                  <div className="text-3xl font-extrabold text-[#F6C826] mt-0.5">
                    {hoursPerWeek * 12} Horas Certificadas
                  </div>
                  <div className="text-[11px] text-white/85 mt-1">
                    Respaldadas por ONGD UJ MAYA y Lumina Voluntarios
                  </div>
                </div>
                <button
                  onClick={() =>
                    onOpenModal(
                      'voluntario',
                      `Voluntariado Lumina: ${selectedBrigade.brigadeName} (${hoursPerWeek}h/sem)`
                    )
                  }
                  className="w-full py-3.5 rounded-xl font-bold bg-[#F6C826] text-slate-900 hover:bg-[#f8d249] transition-all text-sm cursor-pointer"
                >
                  Unirme a esta Brigada Ahora
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          4. CONEXIÓN DIRECTA CON LAS 3 REDES SOCIALES (CON FOTOS REALES)
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E547A]">
            Explora nuestras 3 Redes Oficiales y Momentos
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Publicaciones reales de @lumina.voluntarios y ONGD UJ MAYA en Facebook e Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_MOMENTS.map((moment, idx) => (
            <motion.a
              key={idx}
              whileHover={{ y: -6 }}
              href={moment.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all group"
            >
              <div>
                {moment.image && (
                  <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 space-y-2.5">
                  <div className="text-xs font-bold text-[#9B417E]">
                    {moment.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{moment.title}</h3>
                  <p className="text-xs font-semibold text-slate-500">{moment.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#3E547A]">
                <span>{moment.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
