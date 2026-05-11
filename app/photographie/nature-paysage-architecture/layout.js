export const metadata = {
  title: "Nature & architecture — Photographies",
  description:
    "Galerie photo nature, paysage et architecture par Alexis Yvonnou : lumières, lignes, matières, atmosphères et détails.",
  openGraph: {
    title: "Nature & architecture — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie sensible autour des paysages, de l’architecture, des lumières, des matières et des atmosphères.",
    url: "https://alexisyvonnou.com/photographie/nature-paysage-architecture",
    images: [
      {
        url: "/images/photos/nature/1.webp",
        width: 1200,
        height: 630,
        alt: "Photographie nature et architecture par Alexis Yvonnou",
      },
    ],
  },
};

export default function NatureLayout({ children }) {
  return children;
}