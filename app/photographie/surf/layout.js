export const metadata = {
  title: "Surf — Photographies de glisse et d’océan",
  description:
    "Galerie photo surf par Alexis Yvonnou, photographe basé à Concarneau en Bretagne : glisse, océan, mouvement, concentration, lumière et instants suspendus.",
  alternates: {
    canonical: "https://alexisyvonnou.com/photographie/surf",
  },
  openGraph: {
    title: "Surf — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie photo dédiée au surf, entre énergie de l’océan, mouvement, équilibre, lumière et instants de glisse.",
    url: "https://alexisyvonnou.com/photographie/surf",
    images: [
      {
        url: "/images/photos/surf/3.webp",
        width: 1200,
        height: 630,
        alt: "Photographie de surf par Alexis Yvonnou",
      },
    ],
  },
};

export default function SurfLayout({ children }) {
  return children;
}