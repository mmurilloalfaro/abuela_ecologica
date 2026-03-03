import { Leaf, Scale, Handshake, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PrincipleItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const principles: PrincipleItem[] = [
  {
    id: "ambiente",
    title: "Derecho a un ambiente sano",
    icon: Leaf,
  },
  {
    id: "equidad",
    title: "Equidad intergeneracional",
    icon: Scale,
  },
  {
    id: "liderazgo",
    title: "Liderazgo comunitario",
    icon: Handshake,
  },
  {
    id: "saberes",
    title: "Saberes diversos",
    icon: Globe,
  },
];