export interface Report {
  year: "2025" | "2024" | "2023" | "2022";
  file?: string;
  status: "published" | "pending";
}

export const reports: Report[] = [
  {
    year: "2025",
    status: "pending",
  },
  {
    year: "2024",
    status: "pending",
  },
  {
    year: "2023",
    file: "/reports/informe_anual_2023.pdf",
    status: "published",
  },
  {
    year: "2022",
    status: "pending",
  },
];