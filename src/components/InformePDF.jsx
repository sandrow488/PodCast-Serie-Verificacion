import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function InformePDF() {
  const contentRef = useRef(null);

  const handleDownloadPdf = () => {
    const elemento = contentRef.current;
    
    document.documentElement.classList.add("pdf-mode");
 
    const opciones = {
      margin: [15, 15, 15, 15],
      filename: "informe-accesibilidad-misseries.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="max-w-3xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center border border-gray-300 bg-gray-50 p-3 gap-3">
        <p className="text-gray-600 text-sm">
          Previsualización del informe
        </p>
        <button
          onClick={handleDownloadPdf}
          className="bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Descargar PDF
        </button>
      </div>

      <article
        ref={contentRef}
        id="informe-pdf"
        className="max-w-3xl mx-auto bg-white text-black font-sans leading-relaxed border border-gray-300 p-8"
      >
        <header className="mb-6 border-b border-gray-400 pb-3">
          
          <h1 className="text-2xl font-bold mb-1 text-gray-900">INFORME DE ACCESIBILIDAD</h1>
          <h2 className="text-base mb-4 text-gray-600">Proyecto React</h2>
          
          <div className="text-sm mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1 bg-gray-50 p-3 border border-gray-200">

            <p><strong>Alumno:</strong> Sandro Pegoraro</p>
            <p><strong>Curso:</strong> 2º DAW</p>
            <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
            <p><strong>Módulo:</strong> Diseño de Interfaces Web</p>
            <p className="col-span-1 md:col-span-2"><strong>Proyecto:</strong> Mis Series Imprescindibles</p>
          </div>
        </header>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">ENLACES DEL PROYECTO</h3>
          <ul className="mb-6 pl-5 space-y-1 text-slate-800 list-disc marker:text-slate-500">
            <li><strong>Despliegue en Netlify:</strong> https://podcast-serie-accesible.netlify.app</li>
            <li><strong>Repositorio GitHub:</strong> https://github.com/SandroPegoraro/proyecto-accesible</li>
          </ul>
          <p className="mb-4 text-slate-700 text-justify">
            En este apartado explico la evolución del proyecto. Al principio la página web era muy básica y no cumplía con casi ningún requisito de accesibilidad. Fui mejorando el código poco a poco mediante distintos "commits". Un commit es básicamente guardar un cambio en el historial del proyecto. Así se puede ver claramente la evolución y qué archivos fui modificando paso a paso.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">INTRODUCCIÓN</h3>
          <p className="mb-4 text-slate-700">
            Este PDF es un informe técnico sobre mi proyecto de React. El objetivo era cumplir con las normas de accesibilidad web (WCAG 2.2 nivel AA).
          </p>
          <p className="mb-2 text-slate-700">Para hacer esta auditoría he utilizado:</p>
          <ul className="list-disc pl-6 mb-3 text-gray-800">
            <li>Herramientas automáticas como Lighthouse en Chrome, WAVE y Axe.</li>
            <li>Pruebas manuales navegando por toda la web usando únicamente el tabulador y el teclado.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">ESTRUCTURA DEL PROYECTO</h3>
          <p className="mb-4 text-slate-700">
            La web está hecha con React y está desplegada en Netlify. React es una librería que nos permite crear componentes, que son como piezas de lego que puedes volver a usar en diferentes partes de la página.
          </p>
          <p className="mb-4 text-slate-700">
            Como he utilizado React, la web carga el contenido dinámicamente. Esto significa que la pantalla cambia sin tener que recargar la página entera en el navegador. Esto es muy rápido pero me dio problemas de accesibilidad porque los lectores de pantalla a veces no se enteran de las cosas que aparecen de repente en la pantalla (como cuando envías un mensaje en un formulario y sale un error). Por eso tuve que usar atributos especiales como "aria-live".
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">TESTEO INICIAL</h3>
          
          <h4 className="font-bold underline mb-2 text-red-700">Resultados de Lighthouse</h4>
          <p className="mb-3 italic text-red-600 font-semibold">Nota inicial: 71/100.</p>
          
          <p className="mb-3 text-gray-700">
            La primera vez que probé la web en Lighthouse saqué un 71. Me avisó de bastantes cosas por arreglar, sobre todo con contraste de colores, textos alternativos para las fotos, y etiquetas de formularios que no estaban bien puestas. Al usar el ordenador con teclado vi rápidamente que no se notaba cuándo tenía un botón seleccionado.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">FALLOS ENCONTRADOS</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-red-500">
            <li>
              <strong>Mal uso del HTML:</strong> Tenía casi todo metido dentro de etiquetas genéricas div, lo que está mal porque hay que usar header, nav, main o footer para que tenga sentido.
            </li>
            <li>
              <strong>Imágenes sueltas:</strong> Faltaba el atributo "alt" en las fotos, y sin eso las personas que usan lectores de pantalla no saben de qué trata la imagen.
            </li>
            <li>
              <strong>Poco contraste:</strong> Algunos textos sobre fondos claros no se podían leer muy bien.
            </li>
            <li>
              <strong>Formularios rotos:</strong> Los campos del formulario de contacto no estaban vinculados a su "label", con lo cual era difícil rellenarlos usando tecnología de asistencia.
            </li>
            <li>
              <strong>Foco invisible:</strong> Si apretabas el tabulador en vez de usar el ratón, te perdías porque no sabías dónde estabas.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">SOLUCIONES APLICADAS</h3>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-green-700">
            <li>
              <strong>Arreglé las etiquetas HTML:</strong> Usé etiquetas semánticas y arreglé que el H1 del título fuera realmente un H1.
            </li>
            <li>
              <strong>Formulario funcional:</strong> Ahora todos los inputs están vinculados, y los avisos de error los he preparado con "aria-live" para que el lector los anuncie cantando el mensaje.
            </li>
            <li>
              <strong>Añadí el enlace Skip Link:</strong> Es un enlace oculto arriba del todo que deja a la gente saltarse el menú y pasar al contenido si usan teclado.
            </li>
            <li>
              <strong>Movimiento reducido:</strong> Puse código CSS que detecta si el usuario de Windows o Mac tiene configurado "quitar animaciones" y, si es así, quita mis transiciones para no marear.
            </li>
            <li>
              <strong>Arreglé los colores fuertes:</strong> Aumenté el contraste usando un tono violeta e índigo muy concreto porque tiene un ratio muy alto comparado con blanco.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">COMPROBACIÓN FINAL</h3>
          <p className="mb-4 text-slate-700">
            Después de hacer todos mis commits y meter estas soluciones, volví a pasar Lighthouse por la web.
          </p>
          <p className="mb-4 text-slate-700">
            <strong className="text-green-800 text-base">Puntuación de ahora: 97/100.</strong>
          </p>
          <p className="mb-4 text-slate-700 text-justify">
            La página web por fin es totalmente amigable. Puedes navegarla tocando tabulador y verás una caja bonita que sigue tus pasos para que todo quede clarísimo. De paso, le implementé a la web la librería JS que hace que te estés descargando este mismo reporte automáticamente montado sobre el HTML, así es mucho más práctico.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-base font-bold bg-gray-200 text-gray-800 p-1.5 mb-3 border-l-4 border-gray-500">CONCLUSIÓN</h3>
          <p className="mb-4 text-gray-700 text-justify">
            El proyecto comenzó como una página web sencilla sin ninguna consideración de accesibilidad. En la primera versión los colores, los textos alternativos de las imágenes y la estructura del HTML eran muy básicos y no cumplían con los requisitos de WCAG 2.2 nivel AA. A medida que avanzaba el trabajo, fui añadiendo mejoras paso a paso: cambié los colores para que el contraste fuera suficiente, añadí atributos <code>alt</code> a todas las imágenes, utilicé etiquetas semánticas (<code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>) y vinculé correctamente los <code>label</code> con los campos del formulario. También implementé un enlace <em>skip link</em> para que los usuarios de teclado pudieran saltar directamente al contenido, y usé <code>aria-live</code> para anunciar los errores del formulario. Todas estas modificaciones fueron probadas con herramientas automáticas como Lighthouse, WAVE y Axe, y con pruebas manuales de navegación por teclado. El resultado final es una aplicación React que no solo funciona, sino que también es accesible para personas con diferentes capacidades, alcanzando una puntuación de 97/100 en Lighthouse. Con este informe demuestro que, siguiendo una metodología iterativa y documentando cada cambio, es posible transformar una aplicación básica en un producto que cumple con los estándares de accesibilidad web.
          </p>
        </section>
      </article>
      
      <div className="max-w-3xl mx-auto mt-4 flex justify-center pb-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-blue-700 hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Subir arriba
        </button>
      </div>

    </div>
  );
}