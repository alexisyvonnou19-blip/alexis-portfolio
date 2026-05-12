export const metadata = {
  title: "Nature & architecture — Photographies de paysages et détails",
  description:
    "Galerie photo nature, paysages, architecture, détails, textures et lumières par Alexis Yvonnou, photographe basé à Concarneau en Bretagne.",
  alternates: {
    canonical:
      "https://alexisyvonnou.com/photographie/nature-paysage-architecture",
  },
  openGraph: {
    title: "Nature & architecture — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie plus calme autour des paysages, des formes, des matières, des lignes architecturales, des détails et des lumières.",
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

export default function NaturePaysageArchitectureLayout({ children }) {
  return children;
}