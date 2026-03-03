export interface Founder {
  name: string;
  role: string;
  description: string;
  image: string;
  highlight?: boolean;
}

export const founders: Founder[] = [
  {
    name: "Bertalia González Villalobos",
    role: "Fundadora · Legado e inspiración",
    description:
      "Referente comunitaria en reforestación, protección del agua y cuidado del ambiente. Su trabajo altruista dio origen a la misión y valores que hoy guían a la Fundación Abuela Ecológica.",
    image: "/founder/bertalia01.JPG",
    highlight: true,
  },
  {
    name: "Laura Alfaro González",
    role: "Fundadora",
    description:
      "Ambientalista y lideresa social de la Región Huetar Norte. Impulsa procesos de restauración ecológica, educación ambiental y fortalecimiento comunitario, con énfasis en el liderazgo de mujeres rurales, la articulación interinstitucional y la conservación de la biodiversidad.",
    image: "/founder/laura00.JPG",
  },
  {
    name: "María Fernanda Murillo Alfaro",
    role: "Fundadora",
    description:
      "Ingeniera en software. Comprometida con la acción climática y el trabajo comunitario. Parte activa en la consolidación de la fundación y sus procesos de educación ambiental.",
    image: "/founder/fernanda.JPG",
  },
];
