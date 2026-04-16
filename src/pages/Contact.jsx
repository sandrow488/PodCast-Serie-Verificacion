import { useState } from "react";

const INITIAL_FORM = {
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
};

const ASUNTO_OPTIONS = [
  { value: "", label: "-- Selecciona un asunto --" },
  { value: "sugerencia", label: "Sugerencia de episodio" },
  { value: "colaboracion", label: "Propuesta de colaboración" },
  { value: "error", label: "Reportar un error" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ── Validación ──────────────────────────────────────────────────────────────
  function validate(fields) {
    const errs = {};
    if (!fields.nombre.trim()) errs.nombre = "El nombre es obligatorio.";
    if (!fields.email.trim()) {
      errs.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Introduce un correo electrónico válido.";
    }
    if (!fields.asunto) errs.asunto = "Selecciona un asunto.";
    if (!fields.mensaje.trim()) {
      errs.mensaje = "El mensaje no puede estar vacío.";
    } else if (fields.mensaje.trim().length < 20) {
      errs.mensaje = "El mensaje debe tener al menos 20 caracteres.";
    }
    return errs;
  }

  // ── Handlers ────────────────────────────────────────────────────────────────
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al editar el campo
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Mover el foco al primer campo con error
      const firstErr = Object.keys(errs)[0];
      document.getElementById(firstErr)?.focus();
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors({});
  }

  function handleReset() {
    setSubmitted(false);
  }

  // ── Clases reutilizables ────────────────────────────────────────────────────
  const inputBase =
    "w-full border rounded-lg p-3 text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
  const inputNormal = `${inputBase} border-slate-300 text-slate-800 placeholder-slate-500`;
  const inputError = `${inputBase} border-red-400 text-slate-800 placeholder-slate-500 bg-red-50`;

  // ── JSX ─────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado de página */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-800 mb-3">Contacto</h1>
          <p className="text-slate-700 text-base max-w-lg mx-auto">
            ¿Tienes una sugerencia, quieres colaborar o simplemente saludarnos?
            Rellena el formulario y te responderemos lo antes posible.
          </p>
        </header>

        {/* ─── Mensaje de éxito ─────────────────────────────────────────────── */}
        {submitted ? (
          <div
            role="alert"
            aria-live="polite"
            className="bg-green-50 border border-green-300 rounded-2xl p-8 text-center shadow-sm"
          >
            <svg
              className="w-14 h-14 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              ¡Mensaje enviado!
            </h2>
            <p className="text-green-700 mb-6">
              Gracias por escribirnos. Revisaremos tu mensaje y te responderemos
              pronto.
            </p>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Volver al formulario para enviar otro mensaje"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-semibold py-2.5 px-8 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          /* ─── Formulario ──────────────────────────────────────────────────── */
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative">
            <div aria-live="assertive" className="sr-only">
              {Object.keys(errors).length > 0 
                ? `Atención: Se han encontrado ${Object.keys(errors).length} errores en el formulario. Por favor revisa los campos requeridos.` 
                : ""}
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulario de contacto"
            >
              <fieldset className="border-0 p-0 m-0">
                <legend className="sr-only">Datos del mensaje de contacto</legend>
              <div className="mb-5">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Nombre completo{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className={errors.nombre ? inputError : inputNormal}
                  placeholder="Ej. Juan Pérez"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                />
                {errors.nombre && (
                  <p
                    id="nombre-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5l-3 5A1 1 0 007 14h6a1 1 0 00.867-1.5l-3-5A1 1 0 0010 7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Correo electrónico{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? inputError : inputNormal}
                  placeholder="juan@ejemplo.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5l-3 5A1 1 0 007 14h6a1 1 0 00.867-1.5l-3-5A1 1 0 0010 7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Asunto (select) */}
              <div className="mb-5">
                <label
                  htmlFor="asunto"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Asunto{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  className={`${errors.asunto ? inputError : inputNormal} cursor-pointer`}
                  aria-required="true"
                  aria-describedby={errors.asunto ? "asunto-error" : undefined}
                >
                  {ASUNTO_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.asunto && (
                  <p
                    id="asunto-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5l-3 5A1 1 0 007 14h6a1 1 0 00.867-1.5l-3-5A1 1 0 0010 7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.asunto}
                  </p>
                )}
              </div>

              {/* Mensaje (textarea) */}
              <div className="mb-6">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Mensaje{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${errors.mensaje ? inputError : inputNormal} resize-y`}
                  placeholder="Cuéntanos qué tienes en mente… (mínimo 20 caracteres)"
                  aria-required="true"
                  aria-describedby={
                    errors.mensaje ? "mensaje-error" : "mensaje-hint"
                  }
                />
                {errors.mensaje ? (
                  <p
                    id="mensaje-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5l-3 5A1 1 0 007 14h6a1 1 0 00.867-1.5l-3-5A1 1 0 0010 7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.mensaje}
                  </p>
                ) : (
                  <p id="mensaje-hint" className="mt-1 text-xs text-slate-700">
                    Mínimo 20 caracteres. Actualmente:{" "}
                    {form.mensaje.trim().length}
                  </p>
                )}
              </div>

              </fieldset>

              {/* Nota campos obligatorios */}
              <p className="text-xs text-slate-700 mb-5">
                <span className="text-red-500" aria-hidden="true">
                  *
                </span>{" "}
                Campos obligatorios
              </p>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors text-sm uppercase tracking-wide"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Enviar mensaje
              </button>
            </form>
          </div>
        )}

        {/* Info adicional */}
        <aside
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
          aria-label="Información de contacto alternativa"
        >
          {[
            { icon: "📧", label: "Email", value: "podcast@ejemplo.com" },
            {
              icon: "🎙️",
              label: "Podcast",
              value: "Mis Series Imprescindibles",
            },
            {
              icon: "🏫",
              label: "Estudios",
              value: "2º DAW · Sandro Pegoraro",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-widest mt-2 mb-1">
                {item.label}
              </p>
              <p className="text-sm text-slate-700 font-medium">{item.value}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
