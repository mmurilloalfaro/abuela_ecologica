
export interface Project {
  slug: string;
  status: "active" | "completed";
  year: string;
  image: string;
  heroImages?: string[];
}

export const projects: Project[] = [
  {
    slug: "arboles-plumas",
    status: "active",
    year: "2025 - 2026",
    image: "/projects/arboles/arboles_01.jpeg",
    heroImages: [
      "/projects/arboles/arboles_01.jpeg",
      "/projects/arboles/arboles2.jpeg",
      "/projects/arboles/arboles3.jpeg",
      "/projects/arboles/arboles3.jpeg",
    ],
  },

  {
    slug: "bosque-los-lolos",
    status: "completed",
    year: "2025 - 2026",
    image: "/projects/sanvi/image06.JPG",
    heroImages: [
      "/projects/sanvi/image01.JPG",
      "/projects/sanvi/image02.JPG",
      "/projects/sanvi/image03.JPG",
      "/projects/sanvi/image04.JPG",
      "/projects/sanvi/image05.JPG",
      "/projects/sanvi/image06.JPG",
      "/projects/sanvi/image09.JPG",
    ],
  },

  {
    slug: "nietos-abuela-ecologica",
    status: "active",
    year: "2020-2025",
    image: "/projects/nietos/nietos00.png",
    heroImages: [
      "/projects/nietos/nietos01.png",
      "/projects/nietos/nietos02.png",
      "/projects/nietos/nietos03.png",
      "/projects/nietos/nietos04.png",
      "/projects/nietos/nietos05.png",
    ],
  },

  {
    slug: "reforestacion-consciente",
    status: "completed",
    year: "2020",
    image: "/projects/reforestacion_consciente/img01.JPG",
    heroImages: [
      "/projects/reforestacion_consciente/img01.JPG",
      "/projects/reforestacion_consciente/img02.JPG",
      "/projects/reforestacion_consciente/img03.JPG",
      "/projects/reforestacion_consciente/img04.JPG",
      "/projects/reforestacion_consciente/img05.JPG",
      "/projects/reforestacion_consciente/img06.JPG",
      "/projects/reforestacion_consciente/img07.JPG",
    ],
  },

  {
    slug: "un-norte-lapa-verde",
    status: "completed",
    year: "2020",
    image: "/projects/lapa_verde/lapaverde1.JPG",
    heroImages: [
      "/projects/lapa_verde/lapaverde1.JPG",
      "/projects/lapa_verde/lapaverde2.JPG",
    ],
  },

  {
    slug: "inclusion-intercultural",
    status: "completed",
    year: "2019",
    image: "/projects/inclusion_intercultural/inclusion00.png",
    heroImages: [
      "/projects/inclusion_intercultural/inclusion01.jpeg",
      "/projects/inclusion_intercultural/inclusion02.JPG",
      "/projects/inclusion_intercultural/inclusion00.png",
    ],
  },
];
