export const metadata = {
  title: "Wing Foil — Photographies de glisse et sport nautique",
  description:
    "Galerie photo wing foil par Alexis Yvonnou, photographe basé à Concarneau en Bretagne : glisse, vitesse, équilibre, envol, sport nautique et instants suspendus au-dessus de l’eau.",
  alternates: {
    canonical: "https://alexisyvonnou.com/photographie/wing-foil",
  },
  openGraph: {
    title: "Wing Foil — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie photo dédiée au wing foil, entre envol, vitesse, équilibre, lumière, sensations de glisse et sport nautique.",
    url: "https://alexisyvonnou.com/photographie/wing-foil",
    images: [
      {
        url: "/images/photos/wing-foil/1.webp",
        width: 1200,
        height: 630,
        alt: "Photographie de wing foil par Alexis Yvonnou",
      },
    ],
  },
};

export default function WingFoilLayout({ children }) {
  return children;
}