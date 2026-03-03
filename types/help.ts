import { LucideIcon } from "lucide-react";

export type HelpOption = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};