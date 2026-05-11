export const metadata = {
  title: "Course au large — Photographies",
  description:
    "Galerie photo dédiée à la course au large par Alexis Yvonnou : marins, bateaux, pontons, préparation, régates et atmosphères nautiques.",
  openGraph: {
    title: "Course au large — Photographies d’Alexis Yvonnou",
    description:
      "Une immersion photo dans l’univers de la course au large : marins, bateaux, pontons, préparation et émotions de course.",
    url: "https://alexisyvonnou.com/photographie/course-au-large",
    images: [
      {
        url: "/images/photos/course-au-large/1.webp",
        width: 1200,
        height: 630,
        alt: "Photographie de course au large par Alexis Yvonnou",
      },
    ],
  },
};

export default function CourseAuLargeLayout({ children }) {
  return children;
}