export const metadata = {
  title: "Portraits — Photographies",
  description:
    "Galerie de portraits par Alexis Yvonnou : portraits naturels, incarnés, sportifs, professionnels et humains.",
  openGraph: {
    title: "Portraits — Photographies d’Alexis Yvonnou",
    description:
      "Une galerie de portraits naturels et incarnés, pensés pour raconter une personnalité, un métier ou un projet.",
    url: "https://alexisyvonnou.com/photographie/portraits",
    images: [
      {
        url: "/images/photos/portraits/1.webp",
        width: 1200,
        height: 630,
        alt: "Portrait photographique par Alexis Yvonnou",
      },
    ],
  },
};

export default function PortraitsLayout({ children }) {
  return children;
}