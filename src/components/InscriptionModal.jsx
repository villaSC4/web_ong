import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Send,
  Award,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react';
import { ORG_INFO } from '../data/siteData';

const MODAL_TYPES = {
  inscripcion: {
    title: 'Inscripción Gratuita al Programa Social',
    subtitle: 'Escuela de Emprendimiento, Grupo "Mujeres Transformando Vidas" y Certificación MTPE',
    icon: GraduationCap,
    defaultInterest: 'Programa de Emprendimiento (12 Cursos - Plan de Negocios)',
    options: [
      'Programa de Emprendimiento (12 Cursos - Plan de Negocios)',
      'Grupo "Mujeres Transformando Vidas" (Bienestar Psicológico, Legal y Social)',
      'Certificación Laboral MTPE: Ejecución de Ventas (G2347007-1)',
      'Certificación Laboral MTPE: Servicios de Limpieza (M2981001-1 / 2)',
      'Certificación Laboral MTPE: Trabajo en el Hogar (S3497002-1 / 2 / 3)',
      'Curso Financiando su Sueño / Sueñe en Grande (Cadenas de Valor)',
    ],
  },
  voluntario: {
    title: 'Sé Parte del Cambio con ONGD UJ MAYA',
    subtitle: 'Elige cómo deseas sumar a nuestra causa en Tacna y el sur del Perú',
    icon: HeartHandshake,
    defaultInterest: 'Voluntariado Juvenil (Red Lumina Voluntarios)',
    options: [
      'Voluntariado Juvenil (Red Lumina Voluntarios)',
      'Voluntariado Profesional (Psicología, Derecho, Educación, Negocios)',
      'Donante Solidario (Apoyo a campañas y becas para mujeres)',
      'Aliado Estratégico (Empresa Privada / Institución / Universidad / Estado)',
    ],
  },
};

export default function InscriptionModal({ isOpen, onClose, initialMode = 'inscripcion', preselectedOption = '' }) {
  const modeConfig = MODAL_TYPES[initialMode] || MODAL_TYPES.inscripcion;

  const [formData, setFormData] = useState({
    fullName: '',
    dniOrRuc: '',
    phone: '',
    city: 'Tacna',
    interest: preselectedOption || modeConfig.defaultInterest,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      interest: preselectedOption || modeConfig.defaultInterest,
    }));
    setSubmitted(false);
  }, [initialMode, preselectedOption, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const record = {
      ...formData,
      createdAt: new Date().toISOString(),
      mode: initialMode,
    };
    const existing = JSON.parse(localStorage.getItem('ujmaya_registrations') || '[]');
    localStorage.setItem('ujmaya_registrations', JSON.stringify([record, ...existing]));
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hola *ONGD UJ MAYA*, acabo de registrarme en su plataforma web:\n\n• *Nombre:* ${formData.fullName}\n• *DNI/RUC:* ${formData.dniOrRuc || 'Por confirmar'}\n• *Ciudad:* ${formData.city}\n• *Programa / Interés:* ${formData.interest}\n• *Comentario:* ${formData.message || 'Deseo recibir información para participar.'}`;
    window.open(
      `https://wa.me/${ORG_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const IconComponent = modeConfig.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3E547A] via-[#9B417E] to-[#347B65] p-6 sm:p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3.5 pr-8">
            <div className="p-3 rounded-2xl bg-white/15 shrink-0">
              <IconComponent className="w-7 h-7 text-[#F6C826]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                {modeConfig.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                {modeConfig.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ¿En qué programa o línea deseas participar? *
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:border-[#9B417E] focus:outline-none"
                  required
                >
                  {modeConfig.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nombres y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Flores Mamani"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#9B417E] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    DNI o RUC (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 45678912"
                    value={formData.dniOrRuc}
                    onChange={(e) => setFormData({ ...formData, dniOrRuc: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#9B417E] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 987 654 321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#9B417E] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Ciudad / Provincia *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tacna, Moquegua, Arequipa..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#9B417E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Cuéntanos brevemente tu meta o consulta
                </label>
                <textarea
                  rows={3}
                  placeholder="Ej. Quiero iniciar mi emprendimiento / Tengo experiencia en ventas o trabajo del hogar y deseo certificarme..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#9B417E] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-[#9B417E] to-[#3E547A] hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award className="w-5 h-5 text-[#F6C826]" />
                  Completar Registro Ahora
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#347B65]/15 text-[#347B65] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900">
                  ¡Registro recibido con éxito, {formData.fullName}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Hemos registrado tu solicitud para{' '}
                  <strong className="text-[#9B417E]">{formData.interest}</strong>. Para
                  atenderte de inmediato, envíanos tu ficha con un clic a nuestro WhatsApp
                  oficial en Tacna:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="py-3.5 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1fb858] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Confirmar por WhatsApp ({ORG_INFO.phone})
                </button>
                <button
                  onClick={onClose}
                  className="py-3.5 px-5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Seguir explorando la web
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
