import type { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'vision-agro-ai',
    title: 'AgroVision: Detección Temprana con Visión Computacional',
    featured: true,
    society: 'CONVERGENCE',
    category: 'Computer Vision & Edge Computing',
    tagline: 'Sistema de inferencia en tiempo real para detección de patologías en cultivos agrícolas de la región Caribe.',
    problem: 'La identificación tardía de plagas agrícolas genera pérdidas de hasta un 35% en pequeños productores que no cuentan con laboratorios fitosanitarios especializados.',
    solution: 'Desarrollamos una red neuronal convolucional optimizada (YOLOv8 + TensorRT) montada sobre microcontroladores Edge que procesa imágenes in-situ sin necesidad de conectividad a internet permanente, sincronizando métricas a un panel web cuando hay cobertura.',
    technologies: ['PyTorch', 'YOLOv8', 'FastAPI', 'React', 'Docker', 'PostgreSQL'],
    team: ['Mariana Rojas (Líder IA)', 'David Gómez (Software)', 'Camilo Peña (Hardware)'],
    status: 'Desarrollo Activo',
    image: '/images/project-vision.jpg',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'distributed-campus-telemetry',
    title: 'UTB NetPulse: Telemetría y Análisis de Red Distribuida',
    featured: false,
    society: 'CS',
    category: 'Sistemas Distribuidos & Cloud',
    tagline: 'Arquitectura de monitoreo concurrente para infraestructura universitaria con streaming de eventos.',
    problem: 'La monitorización de servicios de red en el campus requería centralizar logs heterogéneos con alta latencia e incapacidad de alertamiento preventivo.',
    solution: 'Implementación de un pipeline de ingesta de eventos basado en Go y Kafka que analiza anomalías de latencia en microsegundos y expone un dashboard de observabilidad reactivo en tiempo real.',
    technologies: ['Golang', 'Apache Kafka', 'Next.js', 'Prometheus', 'Grafana', 'Redis'],
    team: ['Sebastián Mora', 'Valeria Castillo'],
    status: 'Completado',
    image: '/images/project-platform.jpg',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'satellite-urban-segmentation',
    title: 'GeoScan AI: Segmentación Semántica de Imágenes Satelitales',
    featured: false,
    society: 'CIS',
    category: 'Deep Learning & Procesamiento Espacial',
    tagline: 'Modelos de segmentación para análisis de expansión urbana y recursos hídricos en la Bahía de Cartagena.',
    problem: 'El monitoreo del crecimiento urbano desordenado y cuerpos de agua costeros requiere análisis periódicos que manualmente toman semanas de interpretación cartográfica.',
    solution: 'Entrenamiento de modelos U-Net con capas de atención sobre imágenes multiespectrales de Sentinel-2, logrando un IoU de 89.4% en la delimitación de zonas húmedas y asentamientos.',
    technologies: ['TensorFlow', 'GDAL', 'GeoPandas', 'Python', 'FastAPI', 'TailwindCSS'],
    team: ['Andrés Martínez', 'Elena Fuentes'],
    status: 'Investigación',
    image: '/images/project-satellite.jpg',
    demoUrl: '#',
    repoUrl: '#'
  }
];
