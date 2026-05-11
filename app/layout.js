import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  metadataBase: new URL("https://alexisyvonnou.com"),
  title: {
    default: "Alexis Yvonnou — Photographe & créateur de contenus en Bretagne",
    template: "%s — Alexis Yvonnou",
  },
  description:
  "Photographe et créateur de contenus basé à Concarneau en Bretagne, spécialisé dans le nautisme, le sport, l’outdoor, l’événementiel et l’artisanat.",
  keywords: [
    "Alexis Yvonnou",
    "photographe Bretagne",
    "photographe Concarneau",
    "photographe nautisme",
    "photographe sport",
    "photographe événementiel",
    "créateur de contenus Bretagne",
    "communication digitale",
    "course au large",
"photographe Finistère",
"photographe nautisme Bretagne",
"photographe course au large Bretagne",
"créateur de contenus Concarneau",
"créateur de contenus Bretagne",
  ],
  authors: [{ name: "Alexis Yvonnou" }],
  creator: "Alexis Yvonnou",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alexisyvonnou.com",
    siteName: "Alexis Yvonnou",
    title: "Alexis Yvonnou — Photographe & créateur de contenus en Bretagne",
description:
  "Photographe et créateur de contenus basé à Concarneau en Bretagne. Nautisme, sport, outdoor, événementiel et artisanat.",
    images: [
  {
    url: "/og-cover.jpg",
    width: 1200,
    height: 630,
    alt: "Alexis Yvonnou — Photographe et créateur de contenus en Bretagne",
  },
],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Yvonnou — Photographe & créateur de contenus",
    description:
      "Photographe et créateur de contenus en Bretagne, entre nautisme, sport, outdoor, événementiel et artisanat.",
    images: ["/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Alexis Yvonnou",
      url: "https://alexisyvonnou.com",
      image: "https://alexisyvonnou.com/og-cover.jpg",
      description:
        "Photographe et créateur de contenus basé à Concarneau en Bretagne, spécialisé dans le nautisme, le sport, l’événementiel, l’outdoor et l’artisanat.",
      founder: {
        "@type": "Person",
        name: "Alexis Yvonnou",
        jobTitle: "Photographe et créateur de contenus",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Concarneau",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
      areaServed: ["Bretagne", "Finistère", "France"],
      sameAs: [
        "https://www.instagram.com/alexis_yvonnou",
        "https://www.linkedin.com/in/alexis-yvonnou/",
      ],
    }),
  }}
/>

  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}