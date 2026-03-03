export interface Report {
  year: string;
  title: string;
  description: string;
  file?: string; 
  status: "published" | "pending";
}

export const reports: Report[] = [
  {
    year: "2025",
    title: "Informe Anual de Labores",
    description:
      "Resumen de proyectos, impacto social y ambiental, y gestión institucional del año 2025.",
    status: "pending",
  },  
  {
    year: "2024",
    title: "Informe Anual de Labores",
    description:
      "Resumen de proyectos, impacto social y ambiental, y gestión institucional del año 2024.",
    status: "pending",
  },
  {
    year: "2023",
    title: "Informe Anual de Labores",
    description:
      "Resultados, acciones comunitarias y procesos de conservación desarrollados durante el 2023.",
    file: "/reports/informe_anual_2023.pdf",
    status: "published",
  },
  {
    year: "2022",
    title: "Informe Anual de Labores",
    description:
      "Documento institucional sobre las acciones ambientales y sociales realizadas en 2022.",
    status: "pending",
  },
];
