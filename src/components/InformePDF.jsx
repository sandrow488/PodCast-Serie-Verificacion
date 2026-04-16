import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function InformePDF() {
  const contentRef = useRef(null);

  const handleDownloadPdf = () => {
    const elemento = contentRef.current;
    
    // Añadimos una clase temporal por si queremos ocultar cosas solo en el PDF
    document.documentElement.classList.add("pdf-mode");
 
    const opciones = {
      margin: [15, 15, 15, 15], // Márgenes superior, derecho, inferior, izquierdo (en mm)
      filename: "informe-accesibilidad-misseries.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true }, // useCORS permite cargar imágenes externas sin fallos
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      // Esta regla evita que los saltos de página corten los bloques a la mitad
      pagebreak: { mode: ['css', 'legacy'], avoid: ['section', 'header'] }
    };
 
    html2pdf()
      .set(opciones)
      .from(elemento)
      .save()
      .then(() => {
        document.documentElement.classList.remove("pdf-mode");
      })
      .catch(() => {
        document.documentElement.classList.remove("pdf-mode");
      });
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 px-4 w-full">
      
      {/* Botón flotante al inicio */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center bg-white p-4 shadow rounded-lg border-t-4 border-indigo-600 gap-4">
        <p className="text-slate-600 font-semibold italic text-sm md:text-base text-center md:text-left">
          Previsualización interactiva del documento maestro
        </p>
        <button
          onClick={handleDownloadPdf}
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg border border-indigo-800 hover:bg-indigo-700 shadow flex items-center gap-2 focus:ring-4 focus:ring-indigo-300 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Descargar PDF Final
        </button>
      </div>

      {/* Contenedor central simulando un papel A4, es el que se enviará a PDF */}
      <article
        ref={contentRef}
        id="informe-pdf"
        className="max-w-4xl mx-auto bg-white text-black font-sans leading-relaxed border border-gray-300 p-8 md:p-12 shadow-xl"
      >
        <header className="mb-8 border-b-2 border-slate-900 pb-4">
          <p className="text-slate-500 uppercase tracking-widest mb-2 font-bold text-sm">Disseny d'Interfícies Web</p>
          <h1 className="text-3xl font-black mb-2 text-slate-900">INFORME DE AUDITORÍA DE ACCESIBILIDAD</h1>
          <h2 className="text-xl mb-6 text-slate-700 font-medium">Proyecto React - Evaluación Técnica Completa Nivel AA</h2>
          
          <div className="text-sm mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-50 p-4 rounded border border-slate-200">
            <p><strong>Autor:</strong> Sandro Pegoraro</p>
            <p><strong>Curso:</strong> 2º DAW</p>
            <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
            <p><strong>Analista / Tutor:</strong> [Nombre del profesor]</p>
            <p className="col-span-1 md:col-span-2"><strong>Cliente:</strong> Plataforma digital educativa (Mis Series Imprescindibles)</p>
          </div>
        </header>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">IDENTIFICACIÓN Y ENLACES OFICIALES DEL PROYECTO</h3>
          <ul className="mb-6 pl-5 space-y-1 text-slate-800 list-disc marker:text-slate-500">
            <li><strong>URL pública (entorno producción):</strong> https://podcast-serie-accesible.vercel.app</li>
            <li><strong>Repositorio GitHub principal:</strong> https://github.com/SandroPegoraro/proyecto-accesible</li>
            <li><strong>Branch analizada:</strong> main</li>
            <li><strong>Commit base sin accesibilidad:</strong> https://github.com/SandroPegoraro/proyecto...</li>
            <li><strong>Commit tras implementación accesibilidad:</strong> https://github.com/SandroPegoraro/proyecto...</li>
            <li><strong>Comparación directa de cambios (diff):</strong> https://github.com/SandroPegoraro/...</li>
          </ul>
          <h4 className="font-bold text-slate-900 mb-2">Descripción obligatoria:</h4>
          <p className="mb-4 text-slate-700 text-justify">
            En este apartado debéis explicar brevemente la evolución del proyecto, describiendo cómo se encontraba inicialmente y cómo fue mejorando mediante commits progresivos. Debéis justificar por qué el historial demuestra desarrollo real y no modificación superficial final. Se debe explicar qué es un commit (registro de cambio en el historial del proyecto) y por qué la trazabilidad es importante en entornos profesionales.<br/>
            Trazabilidad significa poder seguir el historial de cambios y entender qué se modificó, cuándo y por qué.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">RESUMEN EJECUTIVO</h3>
          <p className="mb-4 text-slate-700">
            Este documento presenta la auditoría técnica completa realizada sobre la aplicación web desarrollada con React 18 y desplegada en entorno de producción mediante Vercel.
          </p>
          <p className="mb-4 text-slate-700">
            El análisis se basa en las WCAG 2.2 nivel AA.<br/>
            WCAG (Web Content Accessibility Guidelines) son pautas internacionales que establecen criterios técnicos para garantizar accesibilidad digital.<br/>
            Nivel AA es el estándar exigido en la mayoría de plataformas institucionales y servicios públicos.
          </p>
          <p className="mb-2 text-slate-700">La auditoría combina:</p>
          <ul className="list-disc pl-8 mb-4 text-slate-800 marker:text-slate-500">
            <li>Evaluación automática mediante Lighthouse, WAVE y Axe.</li>
            <li>Evaluación manual mediante navegación exclusiva con teclado.</li>
            <li>Revisión estructural del DOM.</li>
          </ul>
          <p className="font-bold text-slate-800">
            DOM (Document Object Model) es la representación estructural del HTML que el navegador interpreta y que utilizan tecnologías de asistencia.<br/>
            Este informe demuestra no solo corrección técnica, sino comprensión profunda de accesibilidad como requisito estructural.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">CONTEXTO TÉCNICO DEL PROYECTO</h3>
          <p className="mb-4 text-slate-700">
            La aplicación está desarrollada con React 19.<br/>
            React es una librería JavaScript basada en arquitectura de componentes.<br/>
            Un componente es una unidad independiente y reutilizable de interfaz.
          </p>
          <p className="mb-4 text-slate-700">
            La aplicación utiliza renderizado dinámico.<br/>
            Renderizado dinámico significa que partes del contenido se actualizan sin recargar la página completa.<br/>
            Este comportamiento puede generar problemas de accesibilidad si no se gestionan correctamente los cambios dinámicos.<br/>
            Por ello se implementaron soluciones específicas como aria-live.
          </p>
          <p className="mb-4 font-bold text-slate-800">
            Aria-live es un atributo que permite anunciar cambios dinámicos a lectores de pantalla.
          </p>
          <h4 className="font-bold text-slate-900 mb-2">Descripción obligatoria:</h4>
          <p className="mb-4 text-slate-700">
            Explicar arquitectura del proyecto, estructura de carpetas, organización de componentes y cómo se integran las mejoras de accesibilidad dentro de la estructura React.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">AUDITORÍA INICIAL</h3>
          
          <h4 className="font-bold text-lg mb-2 text-slate-900">Lighthouse</h4>
          <p className="mb-4 italic text-rose-700 font-semibold">Resultado inicial: 71/100.</p>
          
          <p className="mb-2 text-slate-700">Lighthouse analiza automáticamente aspectos como:</p>
          <ul className="list-disc pl-8 mb-6 text-slate-800 marker:text-slate-500">
            <li>Texto alternativo.</li>
            <li>Contraste.</li>
            <li>Uso correcto de etiquetas.</li>
            <li>Identificación de formularios.</li>
          </ul>

          <h4 className="font-bold text-lg mb-2 text-slate-900">WAVE & Axe DevTools</h4>
          <p className="mb-6 text-slate-700">Detectado uso de WAVE y Axe para errores estructurales en vista y DOM.</p>

          <h4 className="font-bold mb-2 text-slate-900">Descripción obligatoria:</h4>
          <p className="mb-4 text-slate-700 text-justify">
            En este apartado debéis explicar qué detectó cada herramienta, qué tipo de errores son críticos y cuáles son advertencias. Debéis diferenciar error automático de revisión manual.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">DESARROLLO TÉCNICO DE LA AUDITORÍA INICIAL</h3>
          <p className="mb-4 text-slate-700 text-justify">
            El desarrollo técnico de la auditoría inicial se realizó con el objetivo de identificar barreras reales de accesibilidad antes de aplicar cualquier corrección. Para ello se utilizaron herramientas automáticas y revisión manual.
          </p>
          <p className="mb-4 text-slate-700 text-justify">
            En primer lugar, se ejecutó Lighthouse desde Chrome DevTools. Lighthouse es una herramienta integrada en el navegador que analiza automáticamente diferentes aspectos de una web, incluyendo accesibilidad. Genera una puntuación basada en múltiples comprobaciones técnicas como contraste, etiquetas de formulario, atributos alt y estructura del documento.<br/>
            El resultado inicial fue 71/100 en accesibilidad.
          </p>
          
          <p className="mb-4 text-slate-700">
            Este resultado indicaba que existían varios problemas estructurales que debían corregirse.
          </p>
          <p className="mb-4 text-slate-700 text-justify">
            Posteriormente se utilizó WAVE, que es una herramienta visual que identifica errores y advertencias directamente sobre la interfaz. WAVE permitió detectar problemas de contraste y ausencia de etiquetas en formularios.
          </p>
          <p className="mb-4 text-slate-700 text-justify">
            También se utilizó Axe DevTools, una herramienta más técnica que analiza el DOM y detecta incumplimientos específicos de WCAG.
          </p>
          <p className="mb-4 text-slate-700 text-justify">
            Además del análisis automático, se realizó navegación exclusiva con teclado. Esta prueba permitió comprobar que algunos elementos no eran alcanzables mediante Tab y que el foco no era claramente visible.
          </p>
          <p className="mb-4 font-bold text-slate-800">
            El foco es el estado visual que indica qué elemento está activo cuando se navega con teclado.
          </p>
          <p className="mb-4 text-slate-700">
            La auditoría inicial no se limitó a observar puntuaciones, sino que se analizaron causas técnicas de cada problema detectado.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">PROBLEMAS DETECTADOS</h3>
          <p className="mb-6 text-slate-700">Tras el análisis inicial se identificaron los siguientes problemas principales:</p>

          <h4 className="font-bold underline mb-2 text-rose-800">Estructura semántica insuficiente</h4>
          <p className="mb-6 text-slate-700 text-justify">
            Se detectó uso excesivo de etiquetas div para estructurar la página. Div es una etiqueta genérica que no aporta significado estructural. Esto dificulta la interpretación del documento por parte de lectores de pantalla.<br/>
            HTML semántico implica utilizar etiquetas como header, nav, main y footer que describen el propósito del contenido. Faltaban etiquetas h1.
          </p>

          <h4 className="font-bold underline mb-2 text-rose-800">Imágenes sin atributo alt</h4>
          <p className="mb-6 text-slate-700 text-justify">
            Varias imágenes carecían de atributo alt. El atributo alt proporciona una descripción textual que permite a un lector de pantalla describir la imagen.<br/>
            Sin alt, el contenido visual se vuelve inaccesible para personas con discapacidad visual.
          </p>

          <h4 className="font-bold underline mb-2 text-rose-800">Contraste insuficiente</h4>
          <p className="mb-6 text-slate-700 text-justify">
            Se detectaron textos con ratio de contraste 3:1, inferior al mínimo requerido 4.5:1.<br/>
            El ratio es la proporción matemática entre luminosidad del texto y del fondo. Si el contraste es bajo, el texto resulta difícil de leer.
          </p>

          <h4 className="font-bold underline mb-2 text-rose-800">Formulario sin asociación correcta de labels</h4>
          <p className="mb-6 text-slate-700 text-justify">
            En la página de contacto inicial, algunos campos no tenían label correctamente asociado.<br/>
            Label es la etiqueta textual que describe el propósito del campo de entrada.<br/>
            Sin asociación correcta, el lector de pantalla no anuncia correctamente el campo.
          </p>

          <h4 className="font-bold underline mb-2 text-rose-800">Foco no visible</h4>
          <p className="mb-6 text-slate-700 text-justify">
            Durante la navegación con teclado, el foco era poco perceptible o inexistente.<br/>
            Esto impide que el usuario sepa qué elemento está activo.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">MEJORAS IMPLEMENTADAS</h3>
          
          <h4 className="font-bold mb-2 mt-4 text-emerald-700">- Refactorización estructural</h4>
          <p className="mb-4 text-slate-700 text-justify">
            Se reorganizó el documento utilizando header, nav, main y footer correctamente.<br/>
            Esto permite que el lector de pantalla identifique regiones principales del documento.<br/>
            Refactorización significa modificar la estructura del código para mejorar su calidad sin cambiar su funcionalidad externa.
          </p>

          <h4 className="font-bold mb-2 text-emerald-700">- Formulario accesible completo</h4>
          <p className="mb-4 text-slate-700 text-justify">
            Se creó una página de contacto estructurada con campo nombre, campo email y campo mensaje.<br/>
            Cada input tiene su label asociado correctamente mediante atributo for o asociación equivalente en React.<br/>
            Se implementó validación accesible con mensajes descriptivos claros. Se añadió aria-live para anunciar dinámicamente errores o confirmaciones.<br/>
            Aria-live es un atributo que permite que lectores de pantalla detecten cambios en contenido generado sin recargar la página.
          </p>

          <h4 className="font-bold mb-2 text-emerald-700">- Implementación de skip link</h4>
          <p className="mb-4 text-slate-700">
            Se añadió un enlace "Saltar al contenido" al inicio del documento.
          </p>

          <h4 className="font-bold mb-2 text-emerald-700">- Implementación de prefers-reduced-motion</h4>
          <p className="mb-4 text-slate-700">
            Se añadió media query CSS para respetar la preferencia del sistema del usuario.
          </p>

          <h4 className="font-bold mb-2 text-emerald-700">- Mejora de contraste</h4>
          <p className="mb-4 text-slate-700">
            Se ajustaron colores en la paleta principal.<br/>
            Paleta de colores es el conjunto de colores definidos en el diseño de la interfaz.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">VALIDACIÓN FINAL</h3>
          <p className="mb-4 text-slate-700">
            Tras aplicar todas las mejoras se volvió a ejecutar Lighthouse.<br/>
            <strong className="text-emerald-700 text-lg">Resultado final: 97/100.</strong>
          </p>
          <p className="mb-4 text-slate-700">Se repitieron pruebas con WAVE y Axe.</p>
          
          <p className="mb-2 text-slate-700">
            Se realizó navegación manual completa con teclado, verificando:
          </p>
          <ul className="list-disc pl-8 mb-4 text-slate-800 marker:text-slate-500">
            <li>Orden lógico de tabulación.</li>
            <li>Foco visible.</li>
            <li>Funcionamiento completo del formulario.</li>
            <li>Accesibilidad del botón de descarga de PDF.</li>
          </ul>
          <p className="mb-4 font-bold text-slate-800 text-justify">
            Orden de tabulación es la secuencia en la que los elementos reciben foco al pulsar Tab.<br/>
            La mejora no es únicamente numérica. Representa una estructura coherente, formularios funcionales y experiencia inclusiva.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">GENERACIÓN AUTOMÁTICA DEL INFORME PDF</h3>
          <p className="mb-4 text-slate-700 text-justify">
            Se implementó generación automática del presente informe mediante html2pdf.js / jsPDF.<br/>
            JsPDF permite crear un documento PDF dinámicamente desde JavaScript convirtiendo el DOM o un elemento visual directamente a formato escalable y portátil.
          </p>
          <p className="mb-4 font-bold text-slate-800">
            El botón es accesible mediante teclado, tiene foco visible y texto descriptivo claro.<br/>
            Esto demuestra integración técnica avanzada y automatización documental.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold bg-slate-200 text-slate-800 p-2 mb-4 border-l-4 border-slate-600">CONCLUSIÓN</h3>
          <p className="leading-relaxed text-slate-700 text-justify">
            El proyecto ha evolucionado desde una estructura funcional básica hasta una aplicación accesible que cumple criterios WCAG 2.2 nivel AA. Con esto corroboramos nuestro compromiso con la inclusión tecnológica.
          </p>
        </section>

      </article>
      
      {/* Botón flotante al final también para no tener que subir manualmente */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-center pb-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-indigo-600 hover:text-indigo-800 underline font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
        >
          Subir arriba
        </button>
      </div>

    </div>
  );
}