export const metadata = {
  title: "Surf — Photographies",
  description:
    "Galerie photo surf par Alexis Yvonnou : glisse, océan, lumière et instants suspendus entre puissance et équilibre.",
  openGraph: {
    title: "Surf — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie photo dédiée au surf, entre mouvement, énergie et atmosphères marines.",
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