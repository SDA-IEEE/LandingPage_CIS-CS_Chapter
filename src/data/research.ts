import type { ResearchArea } from '../types';

export const researchAreas: ResearchArea[] = [
  {
    id: 'computer-vision',
    title: 'Visión Computacional & Percepción',
    society: 'CIS',
    tagline: 'Extracción de conocimiento semántico a partir de imágenes, video y flujos sensoriales en tiempo real.',
    description: 'Investigamos arquitecturas convolucionales ligeras, transformadores de visión (ViTs) y algoritmos de tracking orientados a inspección de infraestructura y bio-monitoreo.',
    keyQuestions: [
      '¿Cómo optimizar modelos de detección profunda para hardware de borde de bajo consumo energético?',
      '¿Qué técnicas de aumento sintético preservan la fidelidad diagnóstica en datasets reducidos?'
    ],
    applications: ['Agricultura de precisión', 'Diagnóstico médico asistido', 'Monitoreo de fauna regional'],
    technologies: ['PyTorch', 'OpenCV', 'TensorRT', 'YOLOv8', 'Albumentations'],
    status: 'active'
  },
  {
    id: 'distributed-systems',
    title: 'Sistemas Distribuidos & Arquitectura de Software',
    society: 'CS',
    tagline: 'Diseño de infraestructuras concurrentes, tolerantes a fallos y con escalabilidad elástica.',
    description: 'Exploramos protocolos de consenso, orquestación contenerizada, arquitecturas guiadas por eventos y metodologías de ingeniería de software con énfasis en rendimiento y seguridad.',
    keyQuestions: [
      '¿Cuáles son los trade-offs de consistencia en bases de datos distribuidas bajo redes intermitentes?',
      '¿Cómo minimizar la latencia de procesamiento de eventos en pipelines de telemetría masiva?'
    ],
    applications: ['Plataformas de alta concurrencia', 'Microservicios financieros', 'Telemetría IoT universitaria'],
    technologies: ['Golang', 'Rust', 'Kafka', 'Docker', 'Kubernetes', 'gRPC'],
    status: 'active'
  },
  {
    id: 'machine-learning-optimization',
    title: 'Machine Learning & Optimización Heurística',
    society: 'CIS',
    tagline: 'Algoritmos genéticos, optimización de enjambre y modelos probabilísticos para problemas NP-difíciles.',
    description: 'Desarrollamos modelos híbridos que combinan redes neuronales con metaheurísticas para resolver problemas complejos de rutas logísticas y balanceo de recursos energéticos.',
    keyQuestions: [
      '¿Cómo hibridar algoritmos bioinspirados con redes neuronales para acelerar la convergencia?',
      '¿Qué formulaciones reducen el costo computacional en ruteo dinámico urbano?'
    ],
    applications: ['Ruteo de flotas urbanas', 'Gestión de microrredes energéticas', 'Planificación académica'],
    technologies: ['Scikit-Learn', 'DEAP', 'Optuna', 'SciPy', 'JAX'],
    status: 'active'
  },
  {
    id: 'nlp-information-retrieval',
    title: 'Procesamiento de Lenguaje Natural & RAG',
    society: 'CONVERGENCE' as any,
    tagline: 'Sistemas de recuperación de información semántica, arquitecturas RAG y análisis de texto no estructurado.',
    description: 'Diseñamos pipelines de indexación vectorial y afinamiento de modelos abiertos para extracción de conocimiento en corpus técnicos y normativos.',
    keyQuestions: [
      '¿Cómo reducir alucinaciones en respuestas generativas mediante validación cruzada vectorial?',
      '¿Qué estrategias de chunking preservan mejor el contexto en documentos multi-idioma?'
    ],
    applications: ['Asistentes de consulta académica', 'Auditoría automática de normativas', 'Resumen técnico'],
    technologies: ['Hugging Face', 'LangChain', 'ChromaDB', 'Transformers', 'FastAPI'],
    status: 'active'
  }
];
