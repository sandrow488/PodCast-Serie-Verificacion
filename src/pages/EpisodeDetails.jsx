import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { episodes } from '../data/episodes';

export default function EpisodeDetails() {
  const { id } = useParams();
  const episode = episodes.find(e => e.id === id);

  if (!episode) {
    return (
      <div className="flex flex-col items-center justify-center p-16 text-center">
        <svg className="w-16 h-16 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h2 className="text-2xl font-bold mb-2 text-slate-800">Episodio no encontrado</h2>
        <p className="text-slate-600 mb-6">El archivo solicitado no está disponible en la base de datos.</p>
        <Link 
          to="/" 
          className="bg-slate-200 text-slate-700 hover:bg-slate-300 font-medium py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Volver a Inicio
        </Link>
      </div>
    );
  }

  const transcriptParagraphs = episode.transcript.split(/\n\s*\n/).filter(p => p.trim() !== '');

  return (
    <div className="p-6 md:p-10">
      <nav aria-label="Miga de pan" className="mb-8">
        <ol className="flex text-sm text-slate-600" aria-label="Ruta de navegación actual">
          <li>
            <Link to="/" className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-1">Inicio</Link>
          </li>
          <li className="mx-2">/</li>
          <li>Catálogo</li>
          <li className="mx-2">/</li>
          <li className="text-slate-800 font-medium truncate" aria-current="page">Episodio #{episode.id}</li>
        </ol>
      </nav>
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg">
          
          <header className="mb-8 border-b border-slate-200 pb-6">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3 border border-indigo-200">
              Audio Analógico
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              {episode.title}
            </h1>
            <p className="text-lg text-slate-600 font-light border-l-4 border-slate-300 pl-4 py-1 italic">
              {episode.description}
            </p>
          </header>
          {episode.image && (
            <div className="w-full bg-slate-900 mb-10 rounded-xl overflow-hidden border border-slate-200 shadow-md flex justify-center items-center aspect-video max-h-[500px]">
              <img 
                src={episode.image} 
                alt={`Imagen principal del episodio: ${episode.title}`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
          <section aria-labelledby="audio-player-heading" className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-inner mb-10">
            <h2 id="audio-player-heading" className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
              Reproducción Directa HTML5
            </h2>
            <div className="bg-white p-3 rounded border border-slate-300 shadow-sm">
              <audio 
                controls 
                preload="metadata" 
                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                aria-label={`Reproductor de audio: ${episode.title}`}
              >
                <source src={episode.audioUrl} type="audio/mpeg" />
                Tu navegador no soporta el formato de audio seleccionado.
              </audio>
            </div>
            <p className="text-xs text-slate-600 mt-2 text-center text-balance">
              Para cumplir normativa de accesibilidad, el atributo <code>autoplay</code> está deshabilitado por defecto.
            </p>
          </section>
          <section aria-labelledby="transcript-heading" className="mt-12 mb-16 max-w-4xl mx-auto">
            
            <div className="mb-6 flex items-center gap-3 border-b-2 border-indigo-100 pb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              <h2 id="transcript-heading" className="text-2xl font-bold text-slate-800">
                Transcripción del Episodio
              </h2>
            </div>
            
            <div 
              className="bg-white p-8 md:p-12 h-[500px] overflow-y-auto rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg leading-relaxed" 
              tabIndex="0"
              role="region"
              aria-label="Transcripción completa del episodio — usa las teclas de flecha para desplazarte"
            >
              <div className="mx-auto space-y-6 text-slate-700">
                {transcriptParagraphs.map((paragraph, index) => {
                  const isBracket = paragraph.trim().startsWith('[');
                  if (isBracket) {
                    return (
                      <p key={index} className="text-center italic text-slate-600 text-sm my-8 font-serif">
                        {paragraph.trim().replace('[', '').replace(']', '')}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="mb-6 text-slate-800 text-xl font-medium leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
          
        </article>
      </div>
    </div>
  );
}
