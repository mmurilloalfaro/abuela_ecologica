import {
  TreePine,
  Sprout,
  Camera,
  Users,
} from "lucide-react";

export const volunteeringOptions = [
  {
    id: "vivero",
    title: "Voluntariado en vivero",
    description:
      "Apoyo en la producción y cuidado de especies forestales nativas.",
    icon: Sprout,
    cta: "Ver detalles",
    details: {
      who: "Personas con interés en plantas, agricultura o conservación.",
      activities: [
        "Siembra y trasplante",
        "Mantenimiento de plantas",
        "Preparación de sustratos",
      ],
      environment:
        "Espacio de aprendizaje práctico, acompañamiento y trabajo colaborativo.",
    },
  },
  {
    id: "reforestacion",
    title: "Reforestación",
    description:
      "Jornadas de restauración ecológica en campo.",
    icon: TreePine,
    cta: "Ver detalles",
    details: {
      who: "Cualquier persona con disposición física básica.",
      activities: [
        "Siembra de árboles",
        "Apoyo logístico",
        "Educación ambiental en sitio",
      ],
      environment:
        "Trabajo en equipo, contacto directo con la naturaleza.",
    },
  },
  {
    id: "contenido",
    title: "Creación de contenido",
    description:
      "Apoyo en comunicación, fotografía, video y redes.",
    icon: Camera,
    cta: "Ver detalles",
    details: {
      who: "Personas creativas o con habilidades digitales.",
      activities: [
        "Fotografía y video",
        "Redacción de contenido",
        "Diseño gráfico básico",
      ],
      environment:
        "Trabajo remoto o híbrido, enfoque creativo.",
    },
  },
];
