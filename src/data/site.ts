import type { NavItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'IEEE CS & CIS UTB',
  shortName: 'IEEE CS/CIS',
  university: 'Universidad Tecnológica de Bolívar',
  tagline: 'No solo aprendemos tecnología. La construimos.',
  description: 'Capítulo conjunto de IEEE Computer Society y Computational Intelligence Society en la Universidad Tecnológica de Bolívar. Una comunidad de estudiantes e investigadores creando software y sistemas inteligentes con impacto real.',
  url: 'https://cs-cis.utb.edu.co',
  mission: 'Avanzar en la teoría, práctica y aplicación de la ciencia y la tecnología de la computación y del procesamiento de la información, así como mantener una alta reputación profesional entre sus miembros.',
  vision: 'Ser reconocidos como referentes en información técnica y servicios comunitarios para profesionales de la computación, siendo esenciales para la comunidad técnica global y su desarrollo.',
  visionSource: 'https://www.computer.org/about/vision',
  joinUrl: 'https://formulario-ieee-utb.vercel.app/',
  socials: {
    instagram: 'https://instagram.com/ieeecs_cis_utb',
    linkedin: 'https://linkedin.com/company/ieeecs-cis-utb',
    github: 'https://github.com/ieee-cs-cis-utb',
    email: 'ieeecscis@utb.edu.co'
  }
};

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Investigación', href: '#investigacion' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Únete al capítulo', href: '#unete', isCta: true }
];
