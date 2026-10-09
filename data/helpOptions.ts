import { HandHeart, Users, Leaf } from "lucide-react";

export const helpOptions = [
  {
    id: "donate",
    href: "/donate",
    icon: HandHeart,
  },
  {
    id: "volunteer",
    href:
      "https://wa.me/506XXXXXXXX?text=Hola%20quiero%20sumarme%20al%20voluntariado",
    icon: Users,
    external: true,
  },
  {
    id: "alliances",
    href: "/alianzas",
    icon: Leaf,
  },
];