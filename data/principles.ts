import { Leaf, Scale, Handshake, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PrincipleItem {
  id: string;
  icon: LucideIcon;
}

export const principles: PrincipleItem[] = [
  {
    id: "responsibility",
    icon: Leaf,
  },
  {
    id: "community",
    icon: Handshake,
  },
  {
    id: "sustainability",
    icon: Scale,
  },
  {
    id: "education",
    icon: Globe,
  },
];