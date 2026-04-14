import { Link } from 'react-router-dom';
import { episodes } from '../data/episodes';
import presentationVideo from '../assets/Videos/Presentacion.mp4';
import seriesImage from '../assets/Images/Series.png';

export default function Home() {
  return (
    <div className="divide-y divide-slate-200 w-full overflow-hidden">
      
      <section id="inicio" className="w-full mb-12 relative -mt-[1px]">
        <div 
          className="relative bg-slate-900 w-full min-h-[500px] flex items-center justify-center py-16 px-6 md:px-12 lg:min-h-[600px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.9)), url(${seriesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto w-full text-center mt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
              Bienvenidos al Podcast
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-indigo-200 mb-10 font-medium drop-shadow-md">Análisis de la era dorada de la TV</h2>
            
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 mb-12 max-w-3xl mx-auto text-indigo-50 shadow-2xl">
              <p className="leading-relaxed text-lg md:text-xl font-light">
                Este espacio está dedicado a diseccionar y comentar nuestras series favoritas. Abordamos la narrativa visual, construcción de guiones y desarrollo de personajes en detalle.
              </p>
            </div>
            
            <a 
              href="#episodios" 
              className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-100 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-lg"
            >
              Ver Episodios
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section id="promocion" className="py-16 px-6 md:px-12 lg:px-24">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Video de Presentación</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-lg p-2 border border-slate-800 shadow-xl overflow-hidden relative">
            <video 
              autoPlay
              loop
              muted
              controls 
              width="100%" 
              className="rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              poster="https://via.placeholder.com/800x450/1e293b/ffffff?text=Trailer"
              aria-label="Vídeo promocional del podcast con subtítulos en español"
            >
              <source src={presentationVideo} type="video/mp4" />
              <track 
                src="/subtitulos.vtt" 
                kind="subtitles" 
                srcLang="es" 
                label="Español (CC)" 
                default 
              />
              El navegador no admite vídeo HTML5.
            </video>
          </div>
        </div>
      </section>

      <section id="episodios" className="py-16 px-6 md:px-12 lg:px-24 border-t border-slate-200">
        <div className="mb-8 pl-4 border-l-4 border-indigo-500">
          <h2 className="text-3xl font-bold text-slate-800">Catálogo de Episodios</h2>
          <p className="text-slate-600 mt-1">Selecciona un elemento para acceder al reproductor interactivo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <article 
              key={episode.id} 
              className="bg-white border border-slate-200 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col h-full focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <div className="aspect-video bg-slate-900 overflow-hidden flex items-center justify-center rounded-t-lg border-b border-slate-200 relative group-hover:opacity-95 transition-opacity">
                <img 
                  src={episode.image} 
                  alt={`Portada del episodio: ${episode.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-indigo-900/90 text-white text-xs font-bold px-3 py-1.5 rounded backdrop-blur-sm shadow border border-white/10 uppercase tracking-widest">
                  Episodio {episode.id}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-bold text-lg text-slate-800 mb-2 leading-tight">
                  <Link 
                    to={`/episodio/${episode.id}`}
                    className="hover:text-indigo-600 focus:outline-none"
                    aria-label={`Ver detalles del episodio: ${episode.title}`}
                  >
                    {episode.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                  {episode.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/episodio/${episode.id}`}
                    className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center focus:outline-none group"
                    aria-label={`Escuchar episodio: ${episode.title}`}
                  >
                    Escuchar Episodio
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-sm">
          <div className="mb-6 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-800">Buzón de Sugerencias</h2>
            <p className="text-slate-600 text-sm mt-1">Envíanos tus propuestas para próximos episodios.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
                Nombre del Oyente <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre"
                className="w-full border border-slate-300 rounded block p-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                placeholder="Ej. Juan Pérez"
                autoComplete="name"
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Correo de Contacto <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full border border-slate-300 rounded block p-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                placeholder="juan@ejemplo.com"
                autoComplete="email"
                required 
              />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1">
                Tu Propuesta <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="mensaje" 
                name="mensaje"
                rows="4" 
                className="w-full border border-slate-300 rounded block p-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                placeholder="¿De qué serie deberíamos hablar la próxima semana?"
                required 
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar Sugerencia
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
