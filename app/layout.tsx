
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abuelaecologica.org"),
  title: {
    default: "Fundación Abuela Ecológica",
    template: "%s | Fundación Abuela Ecológica",
  },
  description:
    "Fundación Abuela Ecológica: educación ambiental, restauración ecológica y acción comunitaria desde San Carlos, Costa Rica.",
  applicationName: "Fundación Abuela Ecológica",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
