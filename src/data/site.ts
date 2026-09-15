import type { NavItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'IEEE CS & CIS UTB',
  shortName: 'IEEE CS/CIS',
  university: 'Universidad Tecnológica de Bolívar',
  tagline: 'No solo aprendemos tecnología. La construimos.',
  description: 'Capítulo conjunto de IEEE Computer Society y Computational Intelligence Society en la Universidad Tecnológica de Bolívar. Una comunidad de estudiantes e investigadores creando software y sistemas inteligentes con impacto real.',
  // Debe coincidir siempre con "site" en astro.config.mjs (canonical/OG/sitemap se generan de ahí).
  url: 'https://landing-page-cis-cs-chapter.vercel.app',
  mission: 'Avanzar en la teoría, práctica y aplicación de la ciencia y la tecnología de la computación y del procesamiento de la información, así como mantener una alta reputación profesional entre sus miembros.',
  vision: 'Ser el proveedor líder de información técnica, servicios comunitarios y servicios personalizados para los profesionales de la informática de todo el mundo.',
  visionGoal: 'Ser esenciales para la comunidad técnica global y reconocidos universalmente por las contribuciones de los profesionales técnicos en el desarrollo y la aplicación de la tecnología para mejorar las condiciones globales.',
  visionSource: 'https://www.computer.org/about/vision',
  joinUrl: 'https://formulario-ieee-utb.vercel.app/',
  socials: {
    instagram: 'https://www.instagram.com/ieee.cscis.utb?stkn=MWZjdnNrazlhazJlZA==',
    linkedin: 'https://linkedin.com/company/ieeecs-cis-utb',
    github: 'https://github.com/ieee-cs-cis-utb',
    email: 'ieeecscis@utb.edu.co'
  }
};

// Nota: Header.astro define su propia navegación en HTML y no importa este
// arreglo todavía. Se mantiene sincronizado con los id= reales de cada
// sección por si se conecta más adelante.
export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Investigación', href: '#research' },
  { label: 'Eventos', href: '#events' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Equipo', href: '#team' },
  { label: 'Únete al capítulo', href: '#join', isCta: true }
];
