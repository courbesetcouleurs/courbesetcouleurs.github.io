import type { Metadata } from "next";
import "./globals.css";
import "./testimonials.css";
import "./final-overrides.css";
import "./about-page.css";
import "./service-pages.css";
import ContactModal from "./contact-modal";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://courbesetcouleurs.github.io",
  ),
  title: {
    default: "Graphiste identité visuelle en Ariège | Courbes & Couleurs",
    template: "%s | Courbes & Couleurs",
  },
  description:
    "Graphiste spécialisée en identité visuelle et stratégie de marque en Ariège. Logos, chartes graphiques, univers de marque, packaging et web design pour indépendants, artisans et petites entreprises.",
  keywords: [
    "graphiste Ariège",
    "identité visuelle Ariège",
    "création logo Ariège",
    "branding Occitanie",
    "charte graphique",
    "stratégie de marque",
    "designer graphique freelance",
  ],
  authors: [{ name: "Cristina — Courbes & Couleurs" }],
  creator: "Courbes & Couleurs",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Courbes & Couleurs",
    title: "Courbes & Couleurs — Identités visuelles singulières",
    description:
      "Stratégie de marque, identité visuelle et supports pour les entrepreneurs qui veulent devenir reconnaissables.",
    images: [
      {
        url: "/portfolio/maison-venus-hero.webp",
        width: 1600,
        height: 900,
        alt: "Création d’identité visuelle par Courbes & Couleurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courbes & Couleurs — Identités visuelles singulières",
    description:
      "Stratégie de marque, identité visuelle et supports pour les entrepreneurs qui veulent devenir reconnaissables.",
    images: ["/portfolio/maison-venus-hero.webp"],
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className="antialiased">{children}<ContactModal /></body>
    </html>
  );
}
