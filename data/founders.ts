export interface Founder {
  name: string;
  key: "bertalia" | "laura" | "fernanda";
  image: string;
  highlight?: boolean;
}

export const founders: Founder[] = [
  {
    name: "Bertalia González Villalobos",
    key: "bertalia",
    image: "/founder/bertalia01.JPG",
    highlight: true,
  },
  {
    name: "Laura Alfaro González",
    key: "laura",
    image: "/founder/laura00.JPG",
  },
  {
    name: "María Fernanda Murillo Alfaro",
    key: "fernanda",
    image: "/founder/fernanda.JPG",
  },
];