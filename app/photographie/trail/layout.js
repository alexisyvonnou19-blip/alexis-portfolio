export const metadata = {
  title: "Trail — Photographies outdoor et sportives",
  description:
    "Galerie photo trail par Alexis Yvonnou, photographe basé à Concarneau en Bretagne : effort, terrain, nature, émotions, sport outdoor et instants de course.",
  alternates: {
    canonical: "https://alexisyvonnou.com/photographie/trail",
  },
  openGraph: {
    title: "Trail — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie photo dédiée au trail, entre effort, terrain, nature, émotions et énergie du sport outdoor.",
    url: "https://alexisyvonnou.com/photographie/trail",
    images: [
      {
        url: "/images/photos/trail/1.webp",
        width: 1200,
        height: 630,
        alt: "Photographie de trail par Alexis Yvonnou",
      },
    ],
  },
};

export default function TrailLayout({ children }) {
  return children;
}