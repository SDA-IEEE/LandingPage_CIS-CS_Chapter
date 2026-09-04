# Plan maestro — Landing IEEE Computer Society + Computational Intelligence Society UTB

> **Estado:** especificación de diseño, contenido y construcción.
> **Tecnología principal:** Astro + TypeScript. **No usar Next.js.**
> **Propósito del documento:** ser la fuente de verdad para la IA o equipo que implemente el sitio. Ante una decisión ambigua, priorizar la intención, las restricciones y los criterios de aceptación aquí definidos.

---

## 1. Encargo, objetivo y problema

La landing debe presentar el capítulo IEEE Computer Society (CS) + Computational Intelligence Society (CIS) de la Universidad Tecnológica de Bolívar (UTB) como una comunidad universitaria seria, activa y técnicamente capaz. No es un sitio de comercio ni una página para vender un producto: su misión es hacer visible quiénes son, qué investigan, qué construyen, cómo participan y cómo alguien puede unirse.

El problema de una web institucional convencional es que suele comunicar información, pero no evidencia capacidad. Una secuencia predecible de título, párrafo y tarjetas puede ser ordenada pero no transmite la energía, el rigor ni la habilidad de una comunidad de tecnología. La oportunidad es convertir la navegación en una demostración sobria y útil del criterio de diseño y desarrollo del capítulo.

### Objetivos prioritarios

1. Generar reconocimiento y confianza en el capítulo ante estudiantes, docentes, aliados y organizaciones.
2. Hacer comprensible la convergencia de CS y CIS: software, IA, investigación y proyectos reales.
3. Mostrar evidencia tangible de actividad y capacidad: proyectos, investigación, eventos y personas.
4. Conseguir interés cualificado para participar mediante un CTA claro: **Únete al capítulo**.
5. Mantener el carácter institucional de IEEE y UTB mientras se ofrece una experiencia contemporánea e inmersiva.

### Métricas a definir antes de publicar

- Clics en “Únete al capítulo” y tasa de finalización del formulario/destino.
- Visitas y profundidad de scroll hacia Proyectos, Investigación y Eventos.
- Clics a enlaces de proyectos, registros de eventos y redes oficiales.
- Rendimiento en Core Web Vitals y cumplimiento de accesibilidad.

No usar métricas de venta, carrito, conversión comercial o lenguaje de producto comercial como objetivo principal.

---

## 2. Concepto rector

### Idea central

> **Una experiencia digital que demuestra lo que este capítulo es capaz de construir.**

> **Una comunidad universitaria que construye tecnología.**

CS y CIS son dos mundos que convergen: Computer Society aporta la práctica y disciplina de la computación y el software; Computational Intelligence Society explora sistemas inteligentes, IA y métodos computacionales. La página debe hacer visible ese punto de encuentro mediante investigación, aprendizaje, eventos, productos y personas reales.

### Principio de balance

El resultado debe mantenerse en una proporción aproximada de:

- **70 % institucional y profesional:** jerarquía clara, lectura fácil, identidad IEEE/UTB, información verificable, sobriedad y accesibilidad.
- **30 % experimental y tecnológico:** movimiento intencional, ritmo narrativo, interacciones expresivas y composiciones memorables.

El porcentaje no se aplica de forma matemática a cada componente; es una guía de tono global. Cuando haya conflicto, gana la claridad institucional.

### Referencia de inmersión, no de imitación

Las páginas de lanzamiento de producto —como las de Apple— son una referencia para el **ritmo**, la progresión de la información, el uso de elementos sticky y la sensación de descubrir algo. No son una plantilla literal. Apple usa inmersión para vender un producto con activos y recursos de producción excepcionales. Este sitio usa inmersión para revelar una comunidad, sus capacidades y sus resultados.

No copiar layouts, textos, animaciones, lenguaje comercial ni complejidad técnica de Apple. En particular, no justificar 3D, WebGL o scrolls pesados solo para parecer una página de producto.

---

## 3. Audiencia y tono

| Audiencia | Necesidad | Respuesta del sitio |
|---|---|---|
| Estudiantes UTB | Encontrar comunidad, aprendizaje y oportunidades | Mostrar personas, actividades, proyectos, próximos pasos y CTA de ingreso |
| Docentes e investigadores | Entender seriedad, líneas y colaboración | Presentar investigación, resultados, eventos y vínculos institucionales |
| Empresas, aliados y comunidad | Evaluar capacidad y posibles conexiones | Dar evidencia mediante casos de proyecto, impacto y contactos oficiales |
| Miembros potenciales de IEEE | Identificar pertenencia y propósito | Explicar el capítulo, su cultura y rutas de participación |

**Voz:** precisa, cercana, inteligente, orgullosa sin grandilocuencia y sin frases vacías. Usar español claro. Todo dato, logro, número, nombre de persona, fecha o alianza debe ser real y aprobado; si falta, utilizar un placeholder claramente rotulado para reemplazo editorial.

---

## 4. Narrativa completa del scroll

El scroll debe sentirse como una historia con cambios de ritmo, no como una colección de bloques idénticos. Cada sección tiene una pregunta, emoción y evidencia propios.

| Secuencia | Pregunta que responde | Emoción/efecto buscado | Evidencia principal |
|---|---|---|---|
| Header / Hero | “¿Quiénes son y por qué importa?” | Intriga y confianza | Identidad clara, declaración potente, imagen real |
| Qué hacemos | “¿Qué ocurre dentro del capítulo?” | Claridad y energía | Convergencia software–IA–investigación–comunidad |
| Nosotros | “¿Qué los mueve?” | Conexión humana y pertenencia | Manifiesto, historia y fotografías auténticas |
| Investigación | “¿Qué preguntas exploran?” | Curiosidad y rigor | Líneas, retos y conexiones de conocimiento |
| Eventos | “¿Dónde se activa la comunidad?” | Dinamismo y posibilidad | Calendario/timeline y registro de experiencias |
| Proyectos | “¿Qué son capaces de construir?” | El momento wow: prueba y credibilidad | Case studies con resultados y demos, sin código visible |
| Equipo | “¿Quién lo hace posible?” | Cercanía y reconocimiento | Personas, roles, perfiles y cultura |
| Join Us | “¿Cómo participo?” | Impulso para actuar | Ruta simple, inclusiva y concreta para entrar |
| Footer | “¿Dónde verifico y continúo?” | Cierre confiable | Identidad, enlaces oficiales y contacto institucional |

### Ritmo visual

- Alternar áreas respirables con momentos densos de contenido y momentos de foco.
- Usar cambios de escala, alineación, fondo, imagen y ritmo; no repetir “título + texto + tres tarjetas”.
- Mantener una sola acción principal visible por momento. El CTA global es “Únete al capítulo”.
- La experiencia debe funcionar en navegación rápida: el usuario puede escanear, detenerse en una sección y entenderla sin depender de la animación.

---

## 5. Arquitectura de información y secciones

### 5.1 Header / navegación

Navegación exacta de escritorio: **Inicio · Nosotros · Investigación · Eventos · Proyectos · Equipo · Únete al capítulo**.

- No incluir **Blog** ni **Contacto** en el header.
- “Inicio” puede llevar al Hero; el CTA debe diferenciarse visualmente y llevar a Join Us o a un destino de inscripción oficial.
- Header inicialmente transparente sobre el Hero; al avanzar, transformar suavemente a una superficie sólida/legible con sombra o borde sutil si hace falta contraste.
- En móvil, usar menú accesible con foco contenido, cierre por Escape, etiquetas adecuadas y CTA persistente sin ocultar contenido.
- Indicar la sección activa de manera discreta. No usar efectos de menú llamativos que distraigan.

### 5.2 Hero — declaración y primera impresión

**Función:** establecer identidad, propósito y calidad desde el primer segundo. Debe ser de alto impacto, pero sobrio.

- Contenido: identificadores oficiales, titular corto y memorable, una línea de apoyo y CTA principal. Ejemplo de intención (no copiar si no es el texto aprobado): “Construimos el futuro de la computación, juntos.”
- Visual: fotografía real fuerte del capítulo/UTB, o composición de varias fotografías reales tratada como una pieza editorial. Priorizar personas en acción, no pantallas genéricas.
- Movimiento: entrada progresiva contenida, desplazamiento/parallax muy leve de medios o capas y transición natural hacia la siguiente sección. Nunca hacer que el texto sea difícil de leer.
- Debe cargar rápido y ser entendible si no se reproduce JS ni animación.
- Evitar: esferas 3D decorativas, malla neón, lluvia de código, partículas aleatorias, gradientes multicolor y promesas comerciales.

### 5.3 Qué hacemos — hacer tangible la convergencia

**Función:** explicar con rapidez el territorio del capítulo: software, inteligencia computacional, investigación y proyectos reales.

- Usar una composición conectada, por ejemplo cuatro áreas/verbos que convergen en un núcleo, una secuencia horizontal que se organiza al hacer scroll o capas editoriales. No cuatro cards idénticas.
- Cada área incluye una descripción breve y, cuando exista, un enlace a contenido de la página relacionado.
- La interacción puede mostrar relaciones entre áreas, pero debe permanecer útil con teclado y en móvil.
- Emoción: “Aquí hay un ecosistema, no actividades aisladas”.

### 5.4 Nosotros — manifiesto y storytelling humano

**Función:** explicar propósito, cultura y origen con humanidad.

- Contar la historia mediante frases progresivas sincronizadas con fotografías reales: aprender, investigar, construir, compartir y representar a UTB/IEEE.
- Combinar texto editorial de gran escala con una secuencia de fotos de talleres, reuniones, presentaciones y trabajo colaborativo. Evitar una simple sección “Misión / Visión” en columnas.
- Las frases deben revelar ideas, no ocultar toda la información hasta terminar una animación. Incluir una versión legible y semántica en el DOM.
- Puede incluir misión, valores y relación con IEEE/UTB solo con información oficial validada.
- Emoción: pertenencia; “esto es una comunidad de personas reales que hace trabajo serio”.

### 5.5 Investigación — mapa de exploración

**Función:** mostrar rigor y curiosidad sin crear un dashboard ni una infografía sobrecargada.

- Presentar líneas de investigación como un mapa/constelación sobria o un recorrido visual de preguntas, temas y aplicaciones.
- Cada línea debe poder abrir/expandir una ficha breve: propósito, problemas que aborda, responsables solo si se validan y trabajos relacionados cuando existan.
- Las conexiones visuales deben explicar una relación real; no dibujar nodos y líneas por adorno.
- Mantener texto suficiente, leyendas claras y alternativa lineal accesible. En móvil, convertir el mapa a lista/accordion ordenado.
- Emoción: exploración disciplinada; “aquí las ideas se investigan y se convierten en práctica”.

### 5.6 Eventos — una comunidad en movimiento

**Función:** comunicar actividad presente y memoria colectiva.

- Usar timeline editorial o calendario narrativo interactivo, no una cuadrícula repetitiva de tarjetas.
- Diferenciar próximos eventos, eventos destacados y archivo/recapitulaciones, con fecha, tipo, lugar/modalidad, estado y CTA real cuando aplique.
- En escritorio, el scroll puede avanzar por hitos mientras un visual/foto cambia; en móvil, priorizar una línea de tiempo vertical clara.
- No mostrar eventos ficticios. Si los datos aún no existen, usar `[Próximo evento: pendiente de confirmar]` y no una fecha inventada.
- Emoción: urgencia amable y sensación de comunidad activa.

### 5.7 Proyectos — showcase de capacidad (sección estrella)

**Función:** ser la prueba tangible de que el capítulo sabe construir. Este es el mayor “momento wow”, por contenido y ejecución, no por artificio.

- Tratar cada proyecto como un **case study** breve: contexto/reto, solución, resultado o estado, imágenes/demostración, tecnologías usadas, integrantes y enlaces oficiales (demo, repositorio si existe, nota o contacto).
- **No mostrar código**, editores, snippets, terminales, lluvia de sintaxis ni decoración de código. La capacidad se demuestra mediante la calidad de la narrativa, interfaz, resultado y explicación.
- Estructura recomendada: un proyecto destacado de gran formato con medio visual dominante; los demás en una secuencia con composición variable, no cards iguales.
- Si hay demo embebida, debe ser ligera, opcional y disponer de imagen de portada/estado de carga. Un enlace externo puede ser preferible a un iframe pesado.
- La interacción puede usar un panel sticky, transición entre imágenes o una galería controlada por scroll, con alternativa de controles explícitos y contenido accesible sin scroll animado.
- No afirmar impacto, clientes, usuarios, resultados o tecnologías sin validación. Usar placeholders editoriales como `[Resultado pendiente de validar]`.

### 5.8 Equipo — personas antes que organigrama

**Función:** reconocer a quienes construyen la comunidad y hacerla cercana.

- Evitar una pared de retratos o cuadrícula repetitiva de cards.
- Propuesta: retrato/persona destacada que cambia por grupos de rol, recorrido de contribuciones, o composición editorial donde una selección de miembros abre perfiles breves. Incluir liderazgo, miembros y asesores solo según datos aprobados.
- Un perfil puede mostrar nombre, rol, foco/intereses, fotografía real y enlace profesional autorizado. No publicar datos personales sensibles.
- Garantizar igualdad de atención: el efecto no debe hacer que las personas no destacadas parezcan irrelevantes.
- Emoción: confianza y deseo de conocer/participar.

### 5.9 Join Us — cierre orientado a la acción

**Función:** transformar interés en un siguiente paso simple.

- Repetir el CTA “Únete al capítulo” con una propuesta clara: a quién está dirigido, qué se puede esperar y proceso de participación.
- Incluir 3–4 pasos reales si el proceso está definido; si no, enlazar al canal/formulario oficial y marcar los textos pendientes.
- Puede cerrar visualmente retomando el sistema de conexiones o una fotografía de comunidad, con animación sutil que sugiera convergencia.
- No crear urgencia artificial, promesas de carrera ni lenguaje comercial.

### 5.10 Footer

- Logos oficiales y vínculo a entidades autorizadas, conforme a las reglas de marca.
- Enlaces secundarios: redes oficiales, política de privacidad si aplica, accesibilidad y canal de contacto institucional fuera del header si se aprueba.
- Copyright y atribución verificados. Mantenerlo simple, legible y estático.

---

## 6. Sistema visual y marca

### Paleta y uso

La fuente de valores exactos debe ser el manual de marca IEEE/Computer Society suministrado por el usuario. **No inventar hexadecimales ni sustituir valores oficiales por aproximaciones.** Extraer los tokens finales del manual aprobado antes de implementar.

| Rol | Directriz |
|---|---|
| Azul IEEE | Color predominante para identidad, navegación, jerarquía institucional y CTAs principales cuando corresponda |
| Naranja Computer Society | Acento controlado para énfasis, estados o hitos de CS; nunca cubrir grandes superficies sin validar el manual |
| Celeste CIS | Acento controlado para inteligencia computacional, conexiones o estados relacionados; no competir con el azul base |
| Blanco, grises y azul oscuro | Fondos, lectura, contraste, capas y estructura visual |

- Usar pocos colores simultáneamente. Un acento debe significar algo.
- Evitar neón, arcoíris, brillos intensos, glassmorphism excesivo y gradientes genéricos de IA.
- Los gradientes, si se usan, deben ser muy sutiles, cortos y funcionales (profundidad o transición), no decorativos.
- Definir tokens CSS semánticos (`--color-brand-primary`, `--color-accent-cs`, `--color-accent-cis`, `--color-surface`, `--color-text`) y luego mapearlos a los valores oficiales aprobados.

### Logotipos y convivencia de marca

- Usar exclusivamente los logos oficiales que el usuario proporcionó y los archivos autorizados de IEEE/CS/CIS/UTB.
- Respetar proporciones originales, área de seguridad, tamaño mínimo, variante cromática, co-branding y fondos permitidos según el manual. Nunca estirar, recolorear, recortar, inclinar, aplicar sombra o usar sobre fotografía cargada sin una superficie de contraste apropiada.
- Si una regla específica no está disponible en este repositorio, dejar el asset y su uso marcados como **pendiente de revisión de marca**, no improvisar.

### Tipografía

- **Montserrat:** titulares, navegación, cifras y elementos destacados.
- **Open Sans:** párrafos, metadatos y textos de lectura prolongada.
- Solo cambiar esta combinación por una razón técnica o de licencia documentada y aprobada; no sustituirla por una fuente “futurista”.
- Definir escala tipográfica fluida, line-height generoso, máximo de ancho de lectura y pesos limitados para rendimiento y coherencia.

### Dirección fotográfica

Priorizar fotografía real del capítulo y UTB: estudiantes programando o colaborando, talleres, charlas, presentaciones, reuniones, prototipos, actividades y proyectos en contexto.

- Buscar escenas naturales con acción, diversidad de participantes, contexto reconocible y luz limpia; evitar poses corporativas rígidas.
- Dar prioridad a manos, colaboración, pantallas como parte de una actividad y expresiones humanas; no usar pantallas genéricas como héroe recurrente.
- Tratamiento: recorte editorial, contraste contenido, temperatura consistente y overlay solo cuando sea necesario para legibilidad. No usar filtros cian/magenta ni efectos de ciencia ficción.
- Las imágenes generadas y stock genérico no deben ser la base del relato. Solo pueden suplir temporalmente un hueco con aprobación explícita y nunca hacerse pasar por actividad real del capítulo.
- Gestionar consentimiento, créditos y derechos de imagen antes de publicar. Redactar `alt` descriptivo; no repetir texto ornamental para imágenes decorativas.

---

## 7. Movimiento, interacción y “momentos wow”

### Regla principal

La inmersión proviene del ritmo, la narrativa y el propósito de cada interacción, **no** de la cantidad de efectos. La animación debe orientar, conectar secciones, revelar una relación o dar feedback; si no hace una de esas cosas, eliminarla.

### Recursos permitidos y propósito

| Recurso | Uso recomendado | Límites |
|---|---|---|
| Scroll storytelling | Encadenar la revelación de ideas y medios | El contenido debe ser accesible sin la secuencia |
| Sticky elements | Fijar un mensaje, medio o control mientras cambia el contexto | No secuestrar el scroll ni bloquear lectura en móvil |
| Parallax sutil | Añadir profundidad al Hero o fotografías | Desplazamiento pequeño, sin mareo ni texto moviéndose en exceso |
| Reveal progresivo | Jerarquizar frases, imágenes y datos | Duración corta; nada importante solo aparece al final |
| Transformaciones entre secciones | Crear continuidad temática | Respetar contraste, foco y orden de lectura |
| Hover y microinteracciones | Confirmar clic, exploración y estados | Deben tener equivalente por foco/teclado/touch |
| Tipografía cinética | Reforzar una frase o transición clave | Usarla selectivamente, nunca como decoración constante |

### Momentos wow propuestos

1. **Hero:** composición fotográfica y entrada editorial que transmite organización y ambición, no artificio futurista.
2. **Nosotros:** manifiesto que avanza entre momentos reales de comunidad, haciendo sentir el paso de aprender a construir.
3. **Investigación:** visualización sobria donde temas y aplicaciones revelan conexiones reales.
4. **Proyectos (principal):** proyecto destacado que evoluciona como caso de estudio visual, haciendo tangible la solución y su equipo sin mostrar código.
5. **Join Us:** cierre de convergencia que convierte la curiosidad en participación.

### Movimiento responsable

- Implementar `prefers-reduced-motion: reduce`: eliminar parallax, scroll-linked transforms, autoplay y transiciones no esenciales; conservar estado final y controles funcionales.
- No usar scroll hijacking, smooth scroll obligatorio, audio automático, flashes, velocidad excesiva ni animaciones que oculten el foco del teclado.
- Probar con dispositivos de gama media y conexión limitada. Una animación que degrada la navegación no es un momento wow.

---

## 8. Tecnología y decisiones de implementación

### Base recomendada

- **Astro** como framework principal y generador estático/híbrido. No usar Next.js.
- **TypeScript** con tipos estrictos para datos y props.
- **Tailwind CSS** es recomendable si acelera el sistema de tokens y composición; centralizar tokens de marca y evitar clases arbitrarias repetidas. CSS Modules o CSS global con capas también es válido si conserva la arquitectura.
- Componentes Astro para contenido estático y estructural; islas de cliente solo para interacciones que realmente requieren JavaScript.
- **Lucide** (o un único set de iconos aprobado) para iconografía utilitaria. No mezclar bibliotecas ni usar emojis como iconos de UI.

### Animación: recomendación y límites

1. Usar **CSS** para hover, focus, fades, transiciones de color/opacidad/transform simples y `prefers-reduced-motion`.
2. Usar **Motion** compatible con Astro o **GSAP + ScrollTrigger** solo en componentes aislados que requieren timeline, scroll storytelling o sincronización compleja. La recomendación inicial es GSAP/ScrollTrigger para 2–4 momentos cuidadosamente seleccionados, cargado de forma diferida y únicamente en el cliente.
3. Evitar registrar listeners globales o animar grandes cantidades de nodos. Destruir timelines/observers al desmontar y no ejecutar JS en la versión reducida de movimiento si no aporta valor.
4. Considerar **View Transitions** de Astro para transiciones entre páginas futuras; en una landing de una sola ruta, no añadirlas por obligación. Usarlas si se crean rutas de detalle o si la navegación lo justifica.

### Three.js / WebGL

No incorporar Three.js/WebGL de inicio. Solo aprobarlo si existe una única visualización que explica de forma material una línea de investigación o proyecto y supera a una solución SVG/CSS/canvas en valor comunicativo. Debe tener fallback estático, presupuesto de rendimiento y aprobación explícita. Nunca usarlo como decoración del Hero.

### Imágenes y assets

- Usar `astro:assets`/`<Image />` cuando aplique, dimensiones conocidas y variantes responsive.
- Generar AVIF y WebP con fallback adecuado; definir `sizes`, reservar espacio para evitar CLS y marcar el medio crítico del Hero con prioridad de carga solo si está optimizado.
- Lazy-load para imágenes fuera del primer viewport, iframes y widgets no esenciales.
- Evitar video de fondo automático. Si un video es verdaderamente necesario, tener poster, controles/pausa y alternativa de imagen.

---

## 9. Arquitectura Astro recomendada

```text
pagina_ieee_cs_cis/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicons/
│   ├── logos/                 # archivos oficiales aprobados, sin modificar
│   └── social/                # imagen Open Graph final
├── src/
│   ├── assets/
│   │   ├── images/            # fotos fuente y optimizadas por temática
│   │   ├── illustrations/     # SVG propios y aprobados
│   │   └── fonts/             # solo si la licencia/estrategia lo permite
│   ├── components/
│   │   ├── layout/            # Header, Nav, Footer, SkipLink
│   │   ├── sections/          # Hero, WhatWeDo, About, Research, Events,
│   │   │                       # Projects, Team, JoinUs
│   │   ├── projects/          # ProjectFeature, ProjectCaseStudy, ProjectMedia
│   │   ├── research/          # ResearchMap, ResearchDetail
│   │   ├── events/            # EventsTimeline, EventItem
│   │   ├── team/              # TeamStory, MemberProfile
│   │   ├── ui/                # Button, Link, Icon, SectionHeading, Modal
│   │   └── motion/            # clientes aislados: ScrollScene, Reveal, etc.
│   ├── content/
│   │   ├── config.ts          # schemas de Astro Content Collections
│   │   ├── projects/
│   │   ├── events/
│   │   ├── members/
│   │   └── research/
│   ├── data/
│   │   ├── site.ts            # navegación, identidad, enlaces oficiales
│   │   ├── landing.ts         # copy transversal y CTAs aprobados
│   │   └── placeholders.ts    # marcadores editoriales explícitos
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── robots.txt.ts
│   │   └── sitemap-index.xml.ts  # o integración oficial de sitemap
│   ├── scripts/               # utilidades cliente mínimas y aisladas
│   ├── styles/
│   │   ├── tokens.css         # valores aprobados: color, tipografía, espacio
│   │   ├── global.css
│   │   └── motion.css
│   ├── types/
│   └── utils/                 # fechas, URLs seguras, helpers de datos
└── README.md
```

La landing puede iniciar en `src/pages/index.astro`. Si en el futuro hay detalle de proyectos/eventos, crear rutas estáticas desde Content Collections sin rediseñar el modelo. Mantener la lógica de datos fuera de los componentes visuales.

---

## 10. Modelo de contenido preparado para crecer

No construir backend, panel administrativo ni autenticación en esta fase. Usar colecciones de contenido locales y tipadas; después pueden conectarse a un CMS/API sin cambiar los contratos de los componentes.

### Proyecto

```ts
type Project = {
  title: string;
  slug: string;
  status: 'active' | 'completed' | 'research';
  featured: boolean;
  summary: string;
  challenge?: string;
  solution?: string;
  outcome?: string; // solo validado
  cover: ImageMetadata;
  gallery?: ImageMetadata[];
  technologies: string[];
  members: string[]; // referencias a miembros
  links?: { label: string; href: string }[];
  date?: Date;
  order?: number;
};
```

### Evento

```ts
type Event = {
  title: string;
  slug: string;
  startDate: Date;
  endDate?: Date;
  status: 'upcoming' | 'past' | 'cancelled';
  type: string;
  location?: string;
  modality?: 'in-person' | 'online' | 'hybrid';
  summary: string;
  image?: ImageMetadata;
  registrationUrl?: string;
  recapUrl?: string;
};
```

### Miembro

```ts
type Member = {
  name: string;
  slug: string;
  role: string;
  group?: 'leadership' | 'member' | 'advisor';
  focus?: string[];
  photo?: ImageMetadata;
  bio?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
  order?: number;
};
```

### Línea de investigación

```ts
type ResearchArea = {
  title: string;
  slug: string;
  description: string;
  questions?: string[];
  applications?: string[];
  relatedProjects?: string[];
  accent?: 'ieee' | 'cs' | 'cis';
  order?: number;
};
```

Validar el frontmatter con Zod/Content Collections. Usar relaciones por `slug` o referencias tipadas. Los datos aún no confirmados deben ser omitidos o llevar el prefijo `[Pendiente de validar]` durante el desarrollo, nunca presentarse como hechos.

---

## 11. Responsive, accesibilidad y experiencia base

### Responsive

- **Móvil:** contenido prioritario en una columna, tipografía legible, timeline vertical, mapa de investigación convertido en lista/accordion, galerías manejables por touch y sin secciones sticky invasivas.
- **Tablet:** aprovechar composición editorial sin asumir hover; validar nav, densidad de fotos y altura de escenas.
- **Desktop:** habilitar las composiciones inmersivas, sticky scenes y medios de mayor formato siempre que no afecten rendimiento.
- Diseñar desde contenido real y probar 320 px, ~768 px, ~1024 px y pantallas amplias. No ocultar información esencial por falta de espacio.

### Accesibilidad — mínimo WCAG 2.1 AA

- HTML semántico: un `h1`, jerarquía lógica de encabezados, `main`, `nav`, `section`, `footer`, listas y botones reales.
- Enlace “Saltar al contenido”, foco visible, orden de tabulación lógico, menús/dialogs correctos y Escape para cerrar capas.
- Contraste AA para texto, controles y estados; no comunicar estados únicamente con color.
- `alt` contextual para fotos informativas; `alt=""` únicamente para medios decorativos. Incluir subtítulos/transcripción en multimedia relevante.
- Todas las interacciones hover deben poder realizarse por teclado/touch. Los elementos de scroll no deben requerir arrastrar ni precisión de puntero.
- Respetar `prefers-reduced-motion`; no bloquear zoom, selección de texto o configuración del navegador.

---

## 12. Rendimiento, SEO, seguridad y despliegue

### Rendimiento y Core Web Vitals

- Preservar LCP: Hero optimizado, pocas fuentes/pesos, CSS crítico pequeño y no bloquear con animaciones/JS.
- Evitar CLS: reservar dimensiones de imagen, banners y fuentes (`font-display: swap` o estrategia evaluada).
- Reducir INP: islas pequeñas, listeners pasivos cuando proceda, no animar propiedades costosas ni ejecutar librerías globales.
- Auditar con Lighthouse/PageSpeed y dispositivos reales antes de lanzar. Establecer presupuesto para JS, imágenes y fuentes durante la implementación.

### SEO

- Título, metadescripción, canonical, idioma `es`, favicon y metadata social por página.
- Imagen Open Graph oficial y optimizada; no usar capturas de mockups como única tarjeta.
- Sitemap y `robots.txt` correctos; evitar indexar ambientes de prueba.
- JSON-LD solo para información que exista y sea verificable (Organization/Event), sin marcar datos de ejemplo como reales.

### Seguridad y privacidad

- No exponer tokens, claves, correos privados ni datos personales en el repositorio o bundles.
- Validar y permitir únicamente URLs seguras/aprobadas para enlaces externos y formularios.
- Si se añaden analítica o formularios, informar y cumplir las políticas aplicables de UTB/IEEE y la normativa pertinente; no implementarlos por defecto.
- Configurar cabeceras de seguridad y HTTPS en el proveedor de despliegue cuando sea posible (CSP, `X-Content-Type-Options`, `Referrer-Policy`, protección de framing según necesidades).

### Despliegue

- Priorizar hosting estático compatible con Astro y dominio/subdominio institucional aprobado.
- Definir ambientes de preview y producción, variables de entorno solo para integraciones futuras y una revisión editorial/de marca antes de cada publicación.
- Conservar los assets oficiales en una ubicación controlada y documentar el origen/licencia de fotos.

---

## 13. Estados e interacciones que deben diseñarse

Cada componente no trivial debe contemplar, como mínimo:

- Estado normal, hover (si aplica), focus visible, activo, disabled y loading.
- Estados vacíos: sin eventos próximos, sin proyectos publicados, sin miembros con foto, sin enlaces disponibles.
- Error/fallback: imagen ausente, demo externa no disponible, JavaScript desactivado, animación reducida y conexión lenta.
- Estados de navegación: header inicial/scrolleado, menú móvil abierto/cerrado y enlace de sección activa.
- Feedback claro al abrir enlaces externos, modales o registros; no usar microinteracciones que oculten cambios de estado.

---

## 14. Reglas anti-desvío para la IA implementadora

1. No inventar nombres, cifras, logros, fechas, eventos, miembros, alianzas, resultados, logos ni colores oficiales. Usar datos recibidos o placeholders claros.
2. No transformar el sitio en dashboard, portal de métricas ni catálogo comercial.
3. No usar tarjetas para absolutamente todo; variar composiciones según la intención narrativa de cada sección.
4. No mostrar código como representación de proyectos: sin snippets, terminales, editores ni lluvia de sintaxis.
5. No usar neón, arcoíris, gradientes intensos, estética cyberpunk ni elementos genéricos de IA.
6. No exceder la paleta ni usar los acentos CS/CIS como colores de fondo constantes.
7. No perder institucionalidad, legibilidad ni respeto de IEEE/UTB para obtener un aspecto “futurista”.
8. No copiar Apple literalmente ni intentar igualar su nivel de producción; adoptar solo el principio de narrativa inmersiva con propósito.
9. No sacrificar rendimiento, accesibilidad, contenido o navegación por animaciones.
10. No crear backend, CMS, autenticación o panel administrativo sin una necesidad aprobada; dejar el contenido local y tipado listo para migrar.
11. No cargar librerías de animación/3D en todo el sitio; cada uso debe responder a una razón concreta y tener fallback.
12. No añadir Blog o Contacto a la navegación principal. El CTA global es “Únete al capítulo”.

---

## 15. Criterios de aceptación antes de entregar

### Concepto y contenido

- [ ] La página expresa “una comunidad universitaria que construye tecnología” y demuestra capacidad, no solo enumera actividades.
- [ ] Cada sección responde a la narrativa y tiene composición propia sin romper la identidad visual.
- [ ] Proyectos funciona como showcase/case studies con resultados, medios, tecnologías, integrantes y enlaces cuando existan; no contiene código visual.
- [ ] Header contiene exactamente Inicio, Nosotros, Investigación, Eventos, Proyectos, Equipo y CTA Únete al capítulo; no contiene Blog ni Contacto.
- [ ] No hay datos ficticios presentados como reales.

### Marca y diseño

- [ ] Colores, logos, área de seguridad, variantes y tipografías se cotejaron con el manual/activos oficiales antes de publicar.
- [ ] Montserrat y Open Sans se utilizan según su función, salvo excepción documentada.
- [ ] Las fotografías representan actividad real del capítulo/UTB o están identificadas como reemplazos temporales autorizados.
- [ ] La proporción de tono se percibe profesional/institucional con experimentación controlada (70/30).

### Interacción y calidad técnica

- [ ] Las animaciones tienen propósito, funcionan con teclado/touch y respetan reducción de movimiento.
- [ ] La versión sin JavaScript conserva contenido, navegación y CTA funcionales.
- [ ] Se probaron móvil, tablet y escritorio; no hay scroll bloqueado ni texto cortado.
- [ ] Se cumple WCAG 2.1 AA en estructura, contraste, foco, teclado, labels y alternativas textuales.
- [ ] Imágenes, fuentes, JS y medios cumplen presupuesto de rendimiento; Lighthouse/Core Web Vitals se revisaron antes de producción.
- [ ] Metadata, Open Graph, sitemap, robots y enlaces externos están configurados y verificados.

---

## 16. Orden de implementación recomendado

1. Recopilar y validar contenido real, manual de marca, logos, fotografías, permisos y destinos del CTA.
2. Definir tokens oficiales, tipografía, escala, grid y wireframe narrativo para los tres breakpoints.
3. Crear el esqueleto Astro, layout, navegación, content collections y versión estática semántica de toda la landing.
4. Implementar el sistema visual, las fotografías y el showcase de Proyectos con datos reales/placeholder explícito.
5. Añadir animaciones de mayor valor en Hero, Nosotros, Investigación, Proyectos y Join Us, una a una y con fallback.
6. Validar accesibilidad, responsive, rendimiento, SEO y comportamiento sin JavaScript/reduced motion.
7. Realizar revisión editorial, de marca IEEE/CS/CIS/UTB y de enlaces antes de desplegar.

La implementación final debe dar la impresión de un capítulo capaz de pensar, investigar y construir con criterio: memorable por su claridad, su ritmo y su evidencia, nunca por efectos vacíos.
