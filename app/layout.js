import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alexisyvonnou.com/#person",
      name: "Alexis Yvonnou",
      url: "https://alexisyvonnou.com",
      image: "https://alexisyvonnou.com/images/moi4.webp",
      sameAs: [
        "https://www.instagram.com/alexis_yvonnou",
        "https://www.linkedin.com/in/alexis-yvonnou/",
      ],
      jobTitle: "Photographe et créateur de contenus",
      description:
        "Alexis Yvonnou est photographe et créateur de contenus basé à Concarneau en Bretagne, spécialisé dans le nautisme, le sport, l’outdoor, l’événementiel et l’artisanat.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Concarneau",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
      knowsAbout: [
        "Photographie",
        "Création de contenus",
        "Photographie nautique",
        "Course au large",
        "Sport outdoor",
        "Événementiel sportif",
        "Communication digitale",
        "Storytelling visuel",
        "Nautisme en Bretagne",
      ],
    },

    {
  "@type": "ProfessionalService",
  "@id": "https://alexisyvonnou.com/#business",
  name: "Alexis Yvonnou",
  url: "https://alexisyvonnou.com",
  logo: "https://alexisyvonnou.com/favicon.ico",
  image: "https://alexisyvonnou.com/og-cover.jpg",

  description:
    "Photographe et créateur de contenus basé à Concarneau en Bretagne, spécialisé dans le nautisme, le sport, l’outdoor, l’événementiel et l’artisanat.",

  founder: {
    "@id": "https://alexisyvonnou.com/#person",
  },

  email: "mailto:alexisyvonnou@hotmail.fr",
  telephone: "+33602379318",

  priceRange: "€€",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Concarneau",
    addressRegion: "Bretagne",
    postalCode: "29900",
    addressCountry: "FR",
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Bretagne",
    },
    {
      "@type": "AdministrativeArea",
      name: "Finistère",
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
      serviceType: [
        "Photographie",
        "Création de contenus",
        "Photographie nautique",
        "Photographie sportive",
        "Photographie événementielle",
        "Communication digitale",
        "Création de contenus réseaux sociaux",
      ],
      sameAs: [
        "https://www.instagram.com/alexis_yvonnou",
        "https://www.linkedin.com/in/alexis-yvonnou/",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://alexisyvonnou.com/#website",
      url: "https://alexisyvonnou.com",
      name: "Alexis Yvonnou",
      inLanguage: "fr-FR",
      publisher: {
        "@id": "https://alexisyvonnou.com/#person",
      },
    },

    {
      "@type": "WebPage",
      "@id": "https://alexisyvonnou.com/#webpage",
      url: "https://alexisyvonnou.com",
      name: "Alexis Yvonnou — Photographe & créateur de contenus en Bretagne",
      description:
        "Photographe et créateur de contenus basé à Concarneau en Bretagne. Nautisme, sport, outdoor, événementiel et artisanat.",
      isPartOf: {
        "@id": "https://alexisyvonnou.com/#website",
      },
      about: {
        "@id": "https://alexisyvonnou.com/#person",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://alexisyvonnou.com/og-cover.jpg",
      },
      inLanguage: "fr-FR",
    },
  ],
};

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
    "photographe Finistère",
    "photographe nautisme",
    "photographe nautisme Bretagne",
    "photographe course au large",
    "photographe course au large Bretagne",
    "photographe sport",
    "photographe événementiel",
    "créateur de contenus Bretagne",
    "créateur de contenus Concarneau",
    "communication digitale",
    "course au large",
    "nautisme",
    "sport outdoor",
  ],

  authors: [{ name: "Alexis Yvonnou" }],

  creator: "Alexis Yvonnou",

  publisher: "Alexis Yvonnou",

  verification: {
    google: "sHbK5ZGDzN9NQfX4KPbwg3Giosm4LN90QtpjpXcESts",
  },

  alternates: {
    canonical: "https://alexisyvonnou.com",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alexisyvonnou.com",
    siteName: "Alexis Yvonnou",
    title:
      "Alexis Yvonnou — Photographe & créateur de contenus en Bretagne",
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
            __html: JSON.stringify(structuredData),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}