export const metadata = {
  title: "Wing Foil — Photographies",
  description:
    "Galerie photo wing foil par Alexis Yvonnou : glisse, vitesse, envol, équilibre et sensations au-dessus de l’eau.",
  openGraph: {
    title: "Wing Foil — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie autour du wing foil, entre mouvement, lumière, vitesse, équilibre et instants suspendus.",
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