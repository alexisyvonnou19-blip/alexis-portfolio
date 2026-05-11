export const metadata = {
  title: "Trail — Photographies",
  description:
    "Galerie photo trail par Alexis Yvonnou : effort, sport outdoor, terrain, émotions, coureurs et ambiance de course.",
  openGraph: {
    title: "Trail — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie dédiée au trail, entre effort, terrain, paysages, visages, fatigue, ambiance et émotions sportives.",
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