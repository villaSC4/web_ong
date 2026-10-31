import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
  Briefcase,
  Home,
  ShoppingBag,
} from 'lucide-react';
import { ORG_INFO } from '../data/siteData';

const OCCUPATIONAL_PROFILES = [
  {
    id: 'ventas',
    name: 'Perfil 1: Ejecución de Ventas',
    icon: ShoppingBag,
    color: '#347B65',
    standardsCodes: 'Estándar G2347007-1',
    summary:
      'Para trabajadoras y trabajadores con experiencia práctica en atención al cliente, demostración de productos y cierre de ventas en comercios o empresas.',
    checklist: [
      {
        code: 'G2347007-1 (A)',
        text: 'Preparo mi espacio de ventas y verifico la presentación y precios de los productos o servicios.',
      },
      {
        code: 'G2347007-1 (B)',
        text: 'Identifico las necesidades del cliente mediante preguntas cordiales y escucha activa.',
      },
      {
        code: 'G2347007-1 (C)',
        text: 'Presento los beneficios del producto/servicio y manejo dudas u objeciones con claridad.',
      },
      {
        code: 'G2347007-1 (D)',
        text: 'Ejecuto el cierre de la venta cumpliendo metas comerciales y normativa vigente.',
      },
    ],
  },
  {
    id: 'limpieza',
    name: 'Perfil 2: Servicios de Limpieza y Supervisión',
    icon: Briefcase,
    color: '#3E547A',
    standardsCodes: 'Estándares M2981001-1 y M2981001-2',
    summary:
      'Acredita oficialmente a personal operativo y supervisoras/es de limpieza en oficinas, clínicas, colegios, centros comerciales e instituciones.',
    checklist: [
      {
        code: 'M2981001-1 (A)',
        text: 'Habilito y acondiciono las áreas asignadas seleccionando los insumos, materiales y equipos de protección personal (EPP).',
      },
      {
        code: 'M2981001-1 (B)',
        text: 'Ejecuto procedimientos de limpieza y desinfección de acuerdo con las políticas del establecimiento y normativa.',
      },
      {
        code: 'M2981001-2 (A)',
        text: 'Distribuyo tareas y superviso las actividades de limpieza de las áreas asignadas.',
      },
      {
        code: 'M2981001-2 (B)',
        text: 'Verifico el cumplimiento de estándares de calidad, seguridad y reporte de incidencias.',
      },
    ],
  },
  {
    id: 'hogar',
    name: 'Perfil 3: Trabajo en el Hogar (3 Unidades)',
    icon: Home,
    color: '#9B417E',
    standardsCodes: 'Estándares S3497002-1, S3497002-2 y S3497002-3',
    summary:
      'Dignifica y certifica la experiencia integral en preparación de alimentos, mantenimiento de ambientes de la vivienda y cuidado de prendas de vestir.',
    checklist: [
      {
        code: 'S3497002-1',
        text: 'Preparo alimentos aplicando buenas prácticas de higiene, conservación de insumos e indicaciones del hogar.',
      },
      {
        code: 'S3497002-2',
        text: 'Mantengo limpios, desinfectados y ordenados los bienes, muebles y ambientes de la vivienda.',
      },
      {
        code: 'S3497002-3 (A)',
        text: 'Clasifico y lavo prendas de vestir considerando el tipo de tela, color e indicaciones de cuidado textil.',
      },
      {
        code: 'S3497002-3 (B)',
        text: 'Efectúo el secado, planchado y almacenamiento cuidadoso de las prendas de vestir.',
      },
    ],
  },
];

export default function CertificationPage({ onOpenModal }) {
  const [selectedProfile, setSelectedProfile] = useState(OCCUPATIONAL_PROFILES[0]);
  const [checkedItems, setCheckedItems] = useState({
    'ventas-0': true,
    'ventas-1': true,
    'ventas-2': true,
  });

  const toggleCheck = (profId, idx) => {
    const key = `${profId}-${idx}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const currentChecks = selectedProfile.checklist.filter(
    (_, idx) => checkedItems[`${selectedProfile.id}-${idx}`]
  ).length;

  const readinessPercent = Math.round(
    (currentChecks / selectedProfile.checklist.length) * 100
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* =====================================================================
          1. HERO PORTAL OFICIAL DE CERTIFICACIÓN MTPE
         ===================================================================== */}
      <section className="bg-gradient-to-br from-[#1C4538] via-[#347B65] to-[#283854] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                Certificación Oficial de Competencias Laborales
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                En articulación con el Centro de Certificación Autorizado{' '}
                <strong>{ORG_INFO.certifyingPartner.name}</strong> (RUC{' '}
                {ORG_INFO.certifyingPartner.ruc}), evaluamos tu experiencia laboral en
                situación real o simulada de trabajo con <strong>alcance nacional</strong> y
                vigencia indeterminada conforme al Decreto Supremo N° 016-2021-TR.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={ORG_INFO.certifyingPartner.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-lg flex items-center gap-2 text-sm"
                >
                  <FileCheck2 className="w-4 h-4 text-[#347B65]" />
                  Ver Constancia Oficial MTPE (PDF)
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() =>
                    onOpenModal(
                      'inscripcion',
                      `Certificación Laboral MTPE: ${selectedProfile.name}`
                    )
                  }
                  className="px-6 py-3.5 rounded-2xl font-bold bg-[#F6C826] text-slate-900 hover:bg-[#f8d249] shadow-lg text-sm cursor-pointer"
                >
                  Solicitar Evaluación Ahora
                </button>
              </div>
            </div>

            {/* Official Digital Credential Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border-t-8 border-[#F6C826] space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Ficha de Autorización CCCL
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ministerio de Trabajo y Promoción del Empleo
                    </p>
                  </div>
                  <ShieldCheck className="w-10 h-10 text-[#347B65]" />
                </div>

                <dl className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <dt className="text-slate-500 font-medium">Entidad Autorizada:</dt>
                    <dd className="font-bold text-slate-900 text-right">
                      {ORG_INFO.certifyingPartner.name}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <dt className="text-slate-500 font-medium">R.U.C.:</dt>
                    <dd className="font-bold text-slate-900">
                      {ORG_INFO.certifyingPartner.ruc}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <dt className="text-slate-500 font-medium">N° de Constancia:</dt>
                    <dd className="font-extrabold text-[#347B65]">202400293</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <dt className="text-slate-500 font-medium">Base Legal:</dt>
                    <dd className="font-semibold text-slate-800">D.S. N° 016-2021-TR</dd>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <dt className="text-slate-500 font-medium">Alcance y Vigencia:</dt>
                    <dd className="font-bold text-[#9B417E]">
                      Nacional • Indeterminada
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. AUTOEVALUADOR INTERACTIVO DE COMPETENCIAS
         ===================================================================== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3E547A]">
              ¿Estás lista/o para certificarte oficialmente?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Elige tu perfil ocupacional y marca las actividades que ya sabes realizar en
              tu trabajo diario para calcular tu nivel de preparación:
            </p>
          </div>

          {/* Selector de los 3 Perfiles Ocupacionales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OCCUPATIONAL_PROFILES.map((prof) => {
              const IconComp = prof.icon;
              const isSelected = selectedProfile.id === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => setSelectedProfile(prof)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'border-[#347B65] bg-[#347B65]/8 shadow-md scale-[1.01]'
                      : 'border-slate-200 bg-[#FAF9F6] hover:bg-white'
                  }`}
                >
                  <div
                    className="p-3 rounded-xl text-white shrink-0"
                    style={{ backgroundColor: prof.color }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {prof.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {prof.standardsCodes}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Checklist + Gauge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Marca las competencias que dominas en {selectedProfile.name}:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {selectedProfile.summary}
              </p>

              <div className="space-y-3">
                {selectedProfile.checklist.map((item, idx) => {
                  const checked = !!checkedItems[`${selectedProfile.id}-${idx}`];
                  return (
                    <motion.div
                      key={item.code}
                      whileHover={{ x: 3 }}
                      onClick={() => toggleCheck(selectedProfile.id, idx)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                        checked
                          ? 'border-[#347B65] bg-[#347B65]/5'
                          : 'border-slate-200 bg-[#FAF9F6] hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center border shrink-0 mt-0.5 ${
                          checked
                            ? 'bg-[#347B65] border-[#347B65] text-white'
                            : 'bg-white border-slate-300 text-transparent'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#347B65]">
                          Código {item.code}
                        </div>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Score Result Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-5 shadow-xl">
                <div className="text-sm font-bold text-slate-300">
                  Resultado de tu Autoevaluación
                </div>
                <div className="text-6xl font-extrabold text-[#F6C826]">
                  {readinessPercent}%
                </div>
                <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${readinessPercent}%` }}
                    className="h-full bg-gradient-to-r from-[#F6C826] to-[#347B65]"
                  />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {readinessPercent >= 75
                    ? '¡Excelente! Cumples con las competencias prácticas para pasar la evaluación en situación real o simulada de trabajo.'
                    : '¡Muy buen avance! Nuestro equipo en ONGD UJ MAYA puede brindarte refuerzo previo antes de tu evaluación oficial.'}
                </p>

                <button
                  onClick={() =>
                    onOpenModal(
                      'inscripcion',
                      `Certificación Laboral MTPE: ${selectedProfile.name}`
                    )
                  }
                  className="w-full py-4 px-6 rounded-2xl font-bold text-slate-900 bg-[#F6C826] hover:bg-[#f8d249] shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Award className="w-5 h-5" />
                  Agendar mi Evaluación Oficial MTPE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
