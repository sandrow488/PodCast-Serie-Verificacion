import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EpisodeDetails from './pages/EpisodeDetails';
import Contact from './pages/Contact';
import InformePDF from './components/InformePDF';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
        {/* ── Skip-to-content link (WCAG 2.4.1) ─────────────────────────────
             Visible sólo al recibir foco mediante teclado; el primer Tab lo
             muestra para que usuarios de teclado puedan saltar la cabecera.
        ──────────────────────────────────────────────────────────────────── */}
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-indigo-600 focus:text-white focus:font-semibold focus:px-5 focus:py-3 focus:rounded-lg focus:shadow-xl"
        >
          Saltar al contenido principal
        </a>
        
        
        <header className="bg-gradient-to-r from-indigo-800 to-indigo-950 shadow-lg sticky top-0 z-50 border-b border-indigo-700">
          <div className="w-full px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-black text-white tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Mis Series Imprescindibles
            </Link>
            <nav aria-label="Navegación principal" className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-2 md:gap-6 text-sm font-semibold uppercase tracking-wider">
                <li>
                  <Link to="/" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <a href="/#episodios" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Catálogo
                  </a>
                </li>
                <li>
                  <a href="/#promocion" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Promoción
                  </a>
                </li>
                <li>
                  <Link to="/contacto" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="flex-grow w-full">
          <main id="contenido-principal" className="w-full bg-white overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/episodio/:id" element={<EpisodeDetails />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <footer className="bg-slate-800 text-slate-300 py-8 border-t-4 border-indigo-500 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Podcast: Mis Series Imprescindibles</h3>
            <p className="mb-4 text-sm text-slate-300">Sandro Pegoraro | 2º DAW</p>
            <hr className="border-slate-700 w-1/2 mx-auto mb-4" />
            {/* Botón de descarga de informe de accesibilidad (WCAG AA) */}
            <div className="mt-2">
              <InformePDF />
            </div>
          </div>
        </footer>
        
      </div>
    </Router>
  );
}
