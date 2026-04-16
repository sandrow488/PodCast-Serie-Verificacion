import React from "react";
import { Link } from "react-router-dom";

export default function Informe() {
  return (
    <main id="main-content" className="p-10 w-full md:w-3/5 mx-auto min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-black text-indigo-700 uppercase tracking-widest">Mis Series Imprescindibles</h2>
      </div>
      
      <h1 className="text-3xl font-bold my-6 text-center text-slate-900">
        Informe de Accesibilidad
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-10">
        <div className="w-full md:w-1/2 text-center text-slate-700 text-lg leading-relaxed">
          Desde este proyecto nos comprometemos con la accesibilidad del sitio
          web para todas las personas. Por ello, hemos auditado técnicamente el entorno y
          buscado qué mejoras aplicar para hacer posible un sitio web verdaderamente inclusivo y adaptado.
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Navegamos a la vista donde está el reporte maestro visible para que puedan revisar visualmente y descargarlo */}
          <Link
            to="/informe-documento"
            className="mt-6 px-6 py-4 border-2 border-indigo-600 rounded-lg bg-indigo-600 text-white font-bold shadow hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 items-center flex flex-row gap-3 transition-colors"
          >
            {/* Ícono de navegación y ojo */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <p>Ver y Descargar Informe PDF</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
