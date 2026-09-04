import type { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 'presidente',
    name: 'Mariana Rojas',
    role: 'Presidenta del Capítulo',
    category: 'Liderazgo',
    focus: ['Computer Vision', 'Deep Learning', 'Liderazgo Comunitario'],
    bio: 'Estudiante de Ingeniería de Sistemas con énfasis en Inteligencia Artificial. Apasionada por liderar proyectos de investigación aplicada y articular la comunidad estudiantil.',
    image: '/images/member-1.jpg',
    linkedin: '#',
    github: '#'
  },
  {
    id: 'vicepresidente',
    name: 'David Gómez',
    role: 'Vicepresidente & Lead de Desarrollo',
    category: 'Liderazgo',
    focus: ['Arquitectura de Software', 'FastAPI', 'Sistemas Distribuidos'],
    bio: 'Desarrollador backend e investigador en pipelines de datos. Coordina los estándares de calidad de código y mentoría técnica para nuevos integrantes.',
    image: '/images/member-2.jpg',
    linkedin: '#',
    github: '#'
  },
  {
    id: 'lead-ia',
    name: 'Valeria Castillo',
    role: 'Líder del Semillero CIS',
    category: 'Desarrollo & IA',
    focus: ['Machine Learning', 'NLP', 'Data Science'],
    bio: 'Investigadora en modelos de procesamiento de lenguaje natural y organizadora de bootcamps técnicos en el campus UTB.',
    image: '/images/member-3.jpg',
    linkedin: '#',
    github: '#'
  },
  {
    id: 'advisor',
    name: 'Dr. Roberto Mendoza',
    role: 'Faculty Advisor',
    category: 'Asesoría',
    focus: ['Sistemas Complejos', 'Optimización', 'Investigación Académica'],
    bio: 'Profesor e investigador titular en la Facultad de Ingeniería UTB. Guía metodológica y enlace institucional entre IEEE y la universidad.',
    image: '/images/member-4.jpg',
    linkedin: '#'
  }
];
