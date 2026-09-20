import type { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: 'workshop-llm-fine-tuning',
    title: 'Workshop: De Concepto a Producción con Modelos de Lenguaje',
    type: 'Workshop',
    date: '25 Sep 2026',
    time: '3:00 PM - 6:00 PM',
    location: 'Laboratorio de Cómputo Avanzado, Edificio A',
    modality: 'Presencial',
    status: 'featured',
    summary: 'Aprende las bases de cuantización, fine-tuning con LoRA e integración de RAG aplicado a bases de conocimiento técnicas.',
    speaker: 'Ing. David Gómez',
    speakerRole: 'Investigador en NLP & Miembro Senior CS',
    registrationUrl: '#',
    image: '/images/event-workshop.webp'
  },
  {
    id: 'hackathon-caribe-ai',
    title: 'UTB HackTech 2026: Soluciones de Software e Inteligencia Computacional',
    type: 'Hackathon',
    date: '14 - 15 Oct 2026',
    time: '48 Horas Continuas',
    location: 'Campus Casa Lemaitre & Streaming',
    modality: 'Híbrido',
    status: 'upcoming',
    summary: 'La competencia anual de desarrollo del capítulo: 48 horas resolviendo retos de optimización urbana, visión artificial y plataformas seguras con mentoría especializada.',
    registrationUrl: '#',
    image: '/images/event-hackathon.webp'
  },
  {
    id: 'talk-systems-architecture',
    title: 'Tech Talk: Arquitectura de Microservicios Resilientes a Gran Escala',
    type: 'Tech Talk',
    date: '08 Nov 2026',
    time: '5:00 PM - 6:30 PM',
    location: 'Auditorio Principal UTB',
    modality: 'Presencial',
    status: 'upcoming',
    summary: 'Charla técnica con ingenieros de la industria sobre patrones de resiliencia, circuit breakers y observabilidad en arquitecturas distribuidas de alta demanda.',
    speaker: 'Ing. Mateo Arango',
    speakerRole: 'Staff Software Engineer & Alumno Destacado',
    registrationUrl: '#',
    image: '/images/event-tech-talk.webp'
  }
];
