export const metadata = {
  title: "Portraits — Photographe portrait en Bretagne",
  description:
    "Galerie de portraits réalisés par Alexis Yvonnou, photographe basé à Concarneau en Bretagne : portraits naturels, lifestyle, sportifs, professionnels et projets humains.",
  alternates: {
    canonical: "https://alexisyvonnou.com/photographie/portraits",
  },
  openGraph: {
    title: "Portraits — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie de portraits naturels et incarnés entre spontanéité, personnalité, sport, projets humains et storytelling visuel.",
    url: "https://alexisyvonnou.com/photographie/portraits",
    images: [
      {
        url: "/images/photos/portraits/1.webp",
        width: 1200,
        height: 630,
        alt: "Portrait photographié par Alexis Yvonnou",
      },
    ],
  },
};

export default function PortraitsLayout({ children }) {
  return children;
}