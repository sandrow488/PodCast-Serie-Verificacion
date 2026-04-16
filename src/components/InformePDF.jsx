import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function InformePDF() {
  const contentRef = useRef(null);

  const handleDownloadPdf = () => {
    const elemento = contentRef.current;
    document.documentElement.classList.add('pdf-mode');
    const opciones = {
      margin: [15, 15, 15, 15],
      filename: 'informe-accesibilidad-misseries.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'], avoid: ['section', 'header'] },
    };
    html2pdf()
      .set(opciones)
      .from(elemento)
      .save()
      .then(() => document.documentElement.classList.remove('pdf-mode'))
      .catch(() => document.documentElement.classList.remove('pdf-mode'));
  };

  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="max-w-3xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center bg-white p-3 gap-3">
        <p className="text-black text-sm">Previsualización del informe</p>
        <button
          onClick={handleDownloadPdf}
          className="bg-black text-white font-semibold py-2 px-4 border border-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Descargar PDF
        </button>
      </div>

      <article
        ref={contentRef}
        id="informe-pdf"
        className="max-w-3xl mx-auto bg-white text-black font-sans leading-relaxed p-8"
      >
        <header className="mb-6 border-b border-gray-300 pb-3">
          <h1 className="text-2xl font-bold mb-1 text-black">INFORME DE ACCESIBILIDAD WEB</h1>
          <h2 className="text-base mb-4 text-black">Proyecto React - Nivel AA (WCAG 2.2)</h2>
          <div className="text-sm mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1 bg-white p-3">
            <p><strong>Alumno:</strong> Sandro Pegoraro</p>
            <p><strong>Curso:</strong> 2º DAW</p>
            <p><strong>Módulo:</strong> Diseño de Interfaces Web</p>
            <p><strong>Proyecto:</strong> Mis Series Imprescindibles</p>
          </div>
        </header>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">1. ENLACES DEL PROYECTO</h3>
          <p className="mb-2 text-black"><strong>Despliegue en Netlify:</strong> https://podcastverificacion.netlify.app</p>
          <p className="mb-4 text-black"><strong>Repositorio GitHub:</strong> https://github.com/sandrow488/PodCast-Serie-Verificacion.git</p>
          <p className="mb-4 text-black text-justify">
            En el repositorio se puede consultar el historial de commits donde se refleja toda la evolución del proyecto. Cada commit corresponde a un cambio concreto y documentado, lo que permite ver de forma clara qué archivos se modificaron en cada fase y por qué motivo.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">2. INTRODUCCIÓN Y OBJETIVOS</h3>
          <p className="mb-4 text-black text-justify">
            Este informe documenta el proceso de auditoría y mejora de accesibilidad web realizado sobre el proyecto "Mis Series Imprescindibles", una aplicación web desarrollada con React. El objetivo principal era conseguir que la web cumpliera con el nivel de conformidad AA de las pautas WCAG 2.2 (Web Content Accessibility Guidelines), que es el nivel que exige la legislación europea para sitios web públicos.
          </p>
          <p className="mb-4 text-black text-justify">
            La metodología seguida ha sido iterativa: primero analicé el estado inicial de la web con herramientas automáticas, después identifiqué los fallos manualmente, apliqué las correcciones correspondientes y finalmente volví a auditar para comprobar la mejora. Las herramientas que he utilizado para la auditoría son las siguientes:
          </p>
          <p className="mb-1 text-black"><strong>- Lighthouse (Chrome DevTools):</strong> auditoría automática integrada en el navegador que puntúa la accesibilidad de 0 a 100.</p>
          <p className="mb-1 text-black"><strong>- WAVE (Web Accessibility Evaluation Tool):</strong> extensión que señala visualmente los errores y alertas de accesibilidad directamente sobre la página.</p>
          <p className="mb-1 text-black"><strong>- Axe DevTools:</strong> extensión de Deque que detecta violaciones de WCAG y las clasifica por gravedad (critical, serious, moderate, minor).</p>
          <p className="mb-4 text-black"><strong>- Pruebas manuales de teclado:</strong> navegación completa por la web usando exclusivamente Tab, Shift+Tab y Enter para verificar que todos los elementos interactivos son alcanzables y operables.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">3. ESTRUCTURA Y TECNOLOGÍAS</h3>
          <p className="mb-4 text-black text-justify">
            La aplicación está construida con React 18 y empaquetada con Vite. El enrutamiento se gestiona con React Router DOM, lo que hace que sea una SPA (Single Page Application): el contenido se carga dinámicamente sin recargar la página completa. Esto da una experiencia de usuario muy fluida, pero genera problemas de accesibilidad específicos, ya que los lectores de pantalla no siempre detectan los cambios de contenido que ocurren sin recarga.
          </p>
          <p className="mb-4 text-black text-justify">
            Para los estilos he utilizado Tailwind CSS, un framework de utilidades que permite aplicar estilos directamente en las clases del HTML. La web está desplegada en Netlify con un archivo <code>_redirects</code> configurado para que todas las rutas de React Router funcionen correctamente en producción (sin esto, al recargar cualquier ruta que no sea la raíz, Netlify devuelve un 404).
          </p>
          <p className="mb-4 text-black">La web tiene las siguientes páginas y componentes principales:</p>
          <p className="mb-1 text-black"><strong>- Home.jsx:</strong> página de inicio con el hero, el catálogo de episodios y la sección de promoción.</p>
          <p className="mb-1 text-black"><strong>- EpisodeDetails.jsx:</strong> vista detallada de cada episodio con reproductor de audio y transcripción.</p>
          <p className="mb-1 text-black"><strong>- Contact.jsx:</strong> formulario de contacto con validación en tiempo real.</p>
          <p className="mb-1 text-black"><strong>- InformePDF.jsx:</strong> este mismo informe, que se puede descargar como PDF.</p>
          <p className="mb-4 text-black"><strong>- App.jsx:</strong> componente raíz con el enrutamiento, el header, el footer y el skip link.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">4. TESTEO INICIAL</h3>
          <p className="mb-2 text-black"><strong>Puntuación inicial en Lighthouse: 71/100</strong></p>
          <p className="mb-4 text-black text-justify">
            Al pasar Lighthouse por primera vez sobre la web, obtuve una puntuación de 71 en accesibilidad. El informe de Lighthouse señaló varios errores concretos: elementos de imagen sin atributo alt, contraste insuficiente entre texto y fondo en varias zonas, inputs de formulario sin label asociado, y falta de landmark regions en el HTML. WAVE confirmó estos resultados y además detectó que no existía un encabezado H1 en algunas páginas y que había enlaces vacíos sin texto descriptivo.
          </p>
          <p className="mb-4 text-black text-justify">
            La prueba manual de teclado reveló un problema grave: el indicador de foco (focus outline) era prácticamente invisible en la mayoría de elementos interactivos. Esto significa que un usuario que navegue solo con teclado no puede saber en qué botón o enlace está posicionado en cada momento, incumpliendo el criterio 2.4.7 (Focus Visible) de WCAG.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">5. FALLOS ENCONTRADOS Y CRITERIOS WCAG INCUMPLIDOS</h3>
          <p className="mb-4 text-black text-justify">A continuación detallo los fallos que encontré y el criterio WCAG concreto que incumplía cada uno:</p>

          <p className="mb-2 text-black"><strong>- Uso incorrecto de HTML semántico</strong></p>
          <p className="mb-4 text-black text-justify">
            La estructura de la página usaba casi exclusivamente elementos div genéricos. No había etiquetas semánticas como header, nav, main o footer. Esto impide que los lectores de pantalla identifiquen las diferentes regiones de la página y ofrezcan navegación por landmarks al usuario.
          </p>

          <p className="mb-2 text-black"><strong>- Imágenes sin texto alternativo</strong></p>
          <p className="mb-4 text-black text-justify">
            Las imágenes de las portadas de los episodios no tenían el atributo alt, o lo tenían vacío. Sin este atributo, una persona ciega que use un lector de pantalla no recibe ninguna información sobre el contenido de la imagen, solo escucha "imagen" o directamente el nombre del archivo.
          </p>

          <p className="mb-2 text-black"><strong>- Contraste insuficiente</strong></p>
          <p className="mb-4 text-black text-justify">
            Varios textos de la web tenían un ratio de contraste por debajo de 4.5:1, que es el mínimo que exige el nivel AA para texto normal. Esto afectaba sobre todo a textos gris claro sobre fondo blanco y a algunos botones con colores de fondo que no contrastaban lo suficiente con el texto.
          </p>

          <p className="mb-2 text-black"><strong>- Formulario sin labels vinculados</strong></p>
          <p className="mb-4 text-black text-justify">
            Los campos del formulario de contacto (nombre, email, asunto, mensaje) no estaban vinculados a sus respectivas etiquetas label mediante el atributo htmlFor/id. Esto hacía que los lectores de pantalla no anunciaran qué dato se esperaba en cada campo, lo que dificulta mucho su uso para personas con discapacidad visual.
          </p>

          <p className="mb-2 text-black"><strong>- Foco invisible</strong></p>
          <p className="mb-4 text-black text-justify">
            El outline de foco por defecto del navegador estaba eliminado con CSS (outline: none) sin ofrecer un estilo alternativo visible. Esto hacía imposible navegar con teclado de forma efectiva, ya que el usuario no puede ver qué elemento tiene el foco en cada momento.
          </p>

          <p className="mb-2 text-black"><strong>- Sin mecanismo de salto</strong></p>
          <p className="mb-4 text-black text-justify">
            No existía ningún enlace de tipo "skip to content" que permitiera a los usuarios de teclado saltarse el bloque de navegación repetido y acceder directamente al contenido principal de cada página.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">6. SOLUCIONES APLICADAS</h3>

          <p className="mb-2 text-black"><strong>- HTML semántico</strong></p>
          <p className="mb-4 text-black text-justify">
            Sustituí los div genéricos por etiquetas semánticas: la cabecera ahora usa header, el menú de navegación está dentro de un nav con aria-label="Navegación principal", el contenido de cada página se envuelve en un main con id="main-content", y el pie de página usa footer. También corregí la jerarquía de encabezados para que cada página tenga un solo H1 y el resto sigan un orden lógico (H2, H3...).
          </p>

          <p className="mb-2 text-black"><strong>- Textos alternativos en imágenes</strong></p>
          <p className="mb-4 text-black text-justify">
            Añadí atributos alt descriptivos a todas las imágenes del catálogo. Por ejemplo, en lugar de dejar alt vacío, ahora pone "Portada del episodio: Breaking Bad" o "Portada del episodio: Stranger Things". De esta forma el lector de pantalla transmite información útil sobre el contenido visual.
          </p>

          <p className="mb-2 text-black"><strong>- Corrección de contraste</strong></p>
          <p className="mb-4 text-black text-justify">
            Cambié la paleta de colores principal a tonos indigo oscuro (indigo-800 / indigo-950) sobre fondos blancos, consiguiendo ratios de contraste superiores a 7:1 en todos los textos importantes. Los textos secundarios se cambiaron a slate-700 sobre blanco, con un ratio de 5.3:1, que cumple sobradamente el mínimo de 4.5:1.
          </p>

          <p className="mb-2 text-black"><strong>- Formulario accesible</strong></p>
          <p className="mb-4 text-black text-justify">
            Vinculé cada input con su label usando htmlFor y id. Añadí atributos aria-required="true" a los campos obligatorios, aria-describedby para asociar los mensajes de error con su campo correspondiente, y un div con aria-live="assertive" que anuncia automáticamente cuando hay errores en el formulario. De esta manera, cuando un usuario con lector de pantalla envía el formulario con errores, escucha inmediatamente cuántos errores hay y puede corregirlos.
          </p>

          <p className="mb-2 text-black"><strong>- Foco visible personalizado</strong></p>
          <p className="mb-4 text-black text-justify">
            Implementé estilos de foco visibles en todos los elementos interactivos usando las utilidades focus:outline-none focus:ring-2 focus:ring-white (en el header) y focus:ring-indigo-500 (en el cuerpo). De esta forma, al navegar con Tab, aparece un anillo de color bien visible alrededor de cada enlace, botón o campo de formulario.
          </p>

          <p className="mb-2 text-black"><strong>- Skip Link</strong></p>
          <p className="mb-4 text-black text-justify">
            Añadí un enlace oculto al principio del DOM que apunta a #main-content. Este enlace es invisible visualmente pero aparece cuando recibe el foco con teclado (usando las clases sr-only y focus:not-sr-only de Tailwind). Al pulsarlo, el foco salta directamente al contenido principal de la página, evitando tener que pasar por todos los enlaces del menú.
          </p>

          <p className="mb-2 text-black"><strong>- Reducción de movimiento</strong></p>
          <p className="mb-4 text-black text-justify">
            En el archivo index.css añadí una media query @media (prefers-reduced-motion: reduce) que desactiva todas las transiciones y animaciones CSS cuando el usuario tiene activada la opción de "reducir movimiento" en su sistema operativo. Esto cumple con el criterio 2.3.3 de WCAG y beneficia a personas con trastornos vestibulares o epilepsia fotosensible.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">7. COMPROBACIÓN FINAL</h3>
          <p className="mb-4 text-black text-justify">
            Después de aplicar todas las correcciones anteriores y hacer los commits correspondientes, volví a ejecutar las herramientas de auditoría para verificar las mejoras.
          </p>
          <p className="mb-2 text-black"><strong>Puntuación final en Lighthouse: 97/100</strong></p>
          <p className="mb-4 text-black text-justify">
            La puntuación de accesibilidad subió de 71 a 97 puntos. WAVE ya no muestra errores (solo algunas alertas informativas que no son violaciones). Axe DevTools tampoco detecta violaciones de ningún nivel. La navegación por teclado funciona correctamente en todas las páginas: el foco es visible, el skip link funciona, y los mensajes de error del formulario se anuncian por el lector de pantalla.
          </p>
          <p className="mb-4 text-black text-justify">
            Los 3 puntos que faltan para llegar a 100 en Lighthouse se deben a que algunas imágenes externas no tienen un tamaño explícito definido en el HTML (width/height), lo que Lighthouse considera una buena práctica pero no es un error de accesibilidad en sí mismo.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-base font-bold text-black p-1.5 mb-3 border-l-4 border-black">8. CONCLUSIÓN</h3>
          <p className="mb-4 text-black text-justify">
            El proyecto ha pasado por una transformación significativa desde su estado inicial hasta la versión final. Cuando empecé, la web era funcional pero no tenía en cuenta a los usuarios con diversidad funcional: no había textos alternativos en las imágenes, la estructura del HTML no estaba organizada con etiquetas semánticas, el formulario de contacto no estaba correctamente etiquetado y era inutilizable con un lector de pantalla, los colores no cumplían con los requisitos mínimos de contraste, y la navegación por teclado era imposible porque no se veía el foco.
          </p>
          <p className="mb-4 text-black text-justify">
            Durante el proceso de mejora he aprendido que la accesibilidad web no es simplemente añadir unos cuantos atributos ARIA al código, sino que requiere un enfoque integral que abarca la estructura del HTML, los estilos CSS, la gestión del foco, y el comportamiento dinámico de la aplicación. Cada cambio que hice estaba motivado por un criterio concreto de las WCAG 2.2, como el 1.1.1 para los textos alternativos, el 1.3.1 para la semántica, el 1.4.3 para el contraste, el 2.4.1 para el skip link, o el 2.4.7 para el foco visible.
          </p>
          <p className="mb-4 text-black text-justify">
            Uno de los aprendizajes más importantes ha sido entender los problemas específicos que genera una SPA en términos de accesibilidad: al no recargar la página completa, los lectores de pantalla pueden perder el contexto cuando cambia el contenido dinámicamente. Para resolver esto fue clave el uso de aria-live en los mensajes de error del formulario y la correcta gestión del foco al cambiar de ruta.
          </p>
          <p className="mb-4 text-black text-justify">
            El resultado final es una aplicación con una puntuación de 97/100 en Lighthouse que cumple con los criterios de nivel AA de WCAG 2.2. De este trabajo me quedo con la idea de que la accesibilidad debería tenerse en cuenta desde el inicio del desarrollo, no como algo que se añade al final, ya que es mucho más costoso y complicado corregir los problemas a posteriori que diseñar con accesibilidad en mente desde el primer momento.
          </p>
        </section>

      </article>

      <div className="max-w-3xl mx-auto mt-4 flex justify-center pb-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-black hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          Subir arriba
        </button>
      </div>
    </div>
  );
}