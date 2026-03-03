import { HandHeart, Users, Leaf } from "lucide-react";
import { HelpOption } from "@/types/help";

export const helpOptions: HelpOption[] = [
  {
    id: "donate",
    title: "Doná",
    description:
      "Tu aporte se transforma en educación ambiental, restauración ecológica y trabajo comunitario sostenible.",
    href: "/donate",
    icon: HandHeart,
  },
  {
    id: "volunteer",
    title: "Voluntariado",
    description:
      "Participá activamente en talleres, jornadas ambientales y acciones junto a las comunidades.",
    href: "https://wa.me/506XXXXXXXX?text=Hola%20quiero%20sumarme%20al%20voluntariado",
    icon: Users,
    external: true,
  },
  {
    id: "alliances",
    title: "Alianzas",
    description:
      "Empresas y organizaciones pueden escalar el impacto ambiental y social junto a nosotros.",
    href: "/alianzas",
    icon: Leaf,
  },
];