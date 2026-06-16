import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Photographie — Galeries photo",
  description:
    "Toutes les galeries photo d’Alexis Yvonnou : portraits, nature, course au large, surf, wing foil, trail, Mini 6.50 et reportages nautiques.",
};

const galleries = [
  {
    title: "Portraits",
    text: "Des visages, des présences et des histoires.",
    href: "/photographie/portraits",
    image: "/images/portrait2.webp",
  },
  {
    title: "Nature & architecture",
    text: "Lignes, matières, paysages et lumières naturelles.",
    href: "/photographie/nature-paysage-architecture",
    image: "/images/IMG_0671.webp",
  },
  {
    title: "Course au large",
    text: "Marins, pontons, bateaux et récits de mer.",
    href: "/photographie/course-au-large",
    image: "/images/IMG_1003.webp",
  },
  {
    title: "Surf",
    text: "L’énergie de l’océan, entre puissance et équilibre.",
    href: "/photographie/surf",
    image: "/images/photos/surf/1.webp",
  },
  {
    title: "Wing Foil",
    text: "Vitesse, envol et mouvement au-dessus de l’eau.",
    href: "/photographie/wing-foil",
    image: "/images/photos/wing-foil/3.webp",
  },
  {
    title: "Trail",
    text: "L’effort, les visages et l’intensité du terrain.",
    href: "/photographie/trail",
    image: "/images/photos/trail/2.webp",
  },
  {
    title: "Retour Charlie Dalin",
    text: "Un retour populaire, maritime et profondément humain.",
    href: "/photographie/retour-charlie-dalin-vendee-globe-24-25",
    image: "/images/photos/retour-charlie-dalin/2.webp",
  },
  {
    title: "Banque images Mini 6.50",
    text: "Une banque d’images construite autour d’un projet Mini.",
    href: "/photographie/mini-650",
    image: "/images/IMG_1538.webp",
  },
];

export default function PhotographiePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <section className="page-offset px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.55fr_0.45fr] md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Photographie
              </p>

              <h1 className="max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[8rem]">
                Toutes mes galeries photo.
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-stone-600 md:text-xl">
              Portraits, nautisme, sport, paysages, reportages et projets de
              terrain : une sélection de galeries pour entrer dans chaque
              univers.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {galleries.map((gallery) => (
              <Link
                key={gallery.title}
                href={gallery.href}
                className="group relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/20 md:min-h-[520px]"
              >
                <Image
                  src={gallery.image}
                  alt={gallery.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                    Galerie photo
                  </p>

                  <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl">
                    {gallery.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                    {gallery.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Voir la galerie
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}