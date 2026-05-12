import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata = {
  title: "À propos — Photographe & créateur de contenus à Concarneau",
  description:
    "Découvrez le parcours d’Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne, spécialisé dans le nautisme, le sport, l’événementiel, l’outdoor et les récits humains.",
  alternates: {
    canonical: "https://alexisyvonnou.com/a-propos",
  },
  openGraph: {
    title: "À propos — Alexis Yvonnou",
    description:
      "Photographe et créateur de contenus basé à Concarneau en Bretagne. Un regard de terrain construit autour du nautisme, du sport, de l’événementiel et des récits humains.",
    url: "https://alexisyvonnou.com/a-propos",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alexis Yvonnou — Photographe et créateur de contenus en Bretagne",
      },
    ],
  },
};

const experiences = [
  "Tip & Shaft",
  "OC Sport",
  "Studio K37",
  "Solo Guy Cotten",
  "Good Boats",
  "PL Yachting",
  "Ino-Rope",
  "EFTM",
  "SNIP Yachting",
  "Trampoline Park",
];

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://alexisyvonnou.com/a-propos#webpage",
  url: "https://alexisyvonnou.com/a-propos",
  name: "À propos — Alexis Yvonnou",
  description:
    "Page à propos d’Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne.",
  inLanguage: "fr-FR",
  about: {
    "@type": "Person",
    "@id": "https://alexisyvonnou.com/#person",
    name: "Alexis Yvonnou",
    jobTitle: "Photographe et créateur de contenus",
    url: "https://alexisyvonnou.com",
    image: "https://alexisyvonnou.com/images/moi4.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Concarneau",
      addressRegion: "Bretagne",
      postalCode: "29900",
      addressCountry: "FR",
    },
    knowsAbout: [
      "Photographie nautique",
      "Course au large",
      "Sport outdoor",
      "Événementiel sportif",
      "Création de contenus",
      "Communication digitale",
      "Storytelling visuel",
    ],
  },
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(aboutPageStructuredData),
  }}
/>
      {/* HERO */}
<section className="page-offset px-5 pb-20 md:px-8 md:pb-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex items-center justify-between">
    </div>

    <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
      <div className="relative z-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
          À propos
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl">
          Derrière les images, un regard construit sur le terrain.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-600 md:text-xl">
          Je suis Alexis Yvonnou, photographe et créateur de contenus basé
à Concarneau, en Bretagne. Mon univers s’est construit autour du
sport, du nautisme, des événements, de l’outdoor et des récits humains.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
            Sport
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
            Nautisme
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
            Outdoor
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
            Événementiel
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700 shadow-sm">
            Artisanat
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-8 -top-8 hidden h-40 w-40 rounded-full bg-white/70 blur-2xl md:block" />
        <div className="absolute -bottom-8 -right-8 hidden h-56 w-56 rounded-full bg-stone-300/30 blur-3xl md:block" />

        <div className="premium-image">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src="/images/moi4.webp"
              alt="Portrait d’Alexis Yvonnou"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
          <p className="text-sm font-semibold text-stone-950">
            Alexis Yvonnou
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">
            Photographe & créateur de contenus
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* TEXTE */}
<section className="px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="premium-image">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/moi2.webp"
                alt="Alexis Yvonnou sur le terrain"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              Mon approche
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Photographier ce qui se passe autour de l’action.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-stone-700">
              <p>
                Mon parcours s’est construit entre communication, événementiel
                sportif et création de contenus. Avant la photographie, il y a
                eu des expériences en logistique, en marketing sportif, en
                gestion de projets et en communication.
              </p>

              <p>
                Aujourd’hui, cette polyvalence me permet de comprendre les
                besoins d’un projet dans son ensemble : les images bien sûr,
                mais aussi leur usage, leur diffusion et ce qu’elles doivent
                transmettre.
              </p>

              <p>
                J’aime les univers vivants : les événements, les
                ambiances sportives, les regards, les détails, les moments de
                tension ou les instants plus calmes qui racontent quelque chose
                de vrai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* BLOC SOMBRE */}
      <section className="bg-stone-950 px-5 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
              Ce que je cherche dans mes images
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Des images sincères, vivantes et utiles.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 p-7">
  <h3 className="text-2xl font-semibold">Terrain</h3>
  <p className="mt-5 leading-8 text-white/60">
    Être au plus proche des lieux, des équipes, des gestes et des moments pour raconter quelque chose de réel.
  </p>
</div>

<div className="rounded-[2rem] border border-white/10 p-7">
  <h3 className="text-2xl font-semibold">Humain</h3>
  <p className="mt-5 leading-8 text-white/60">
    Mettre en avant les visages, les émotions, les détails et les instants qui donnent du sens à un projet.
  </p>
</div>

<div className="rounded-[2rem] border border-white/10 p-7">
  <h3 className="text-2xl font-semibold">Immersion</h3>
  <p className="mt-5 leading-8 text-white/60">
    Produire des images vivantes, naturelles et sincères, au plus près de l’ambiance et de l’énergie du terrain.
  </p>
</div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* EXPERIENCES */}
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              Expériences & collaborations
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Des projets entre événementiel, sport et communication.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-600">
              Au fil des années, j’ai travaillé auprès d’événements, de médias,
              de marques et de projets liés au sport et au nautisme, en photo,
              communication ou événementiel.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {experiences.map((experience) => (
              <span
                key={experience}
                className="rounded-full border border-stone-300 bg-white/60 px-5 py-3 text-sm text-stone-700"
              >
                {experience}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* GALERIE VISUELLE */}
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="premium-image">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/marex.webp"
                alt="Projet nautique"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="premium-image">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/svr.webp"
                alt="Univers sportif et événementiel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

            {/* CTA */}
      <section className="px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-stone-950 p-8 text-white shadow-2xl shadow-stone-900/20 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                Contact
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Vous avez un projet à raconter en images ?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-white/60">
                Événement sportif, projet nautique, marque ou création de
                contenus : échangeons simplement autour de votre besoin.
              </p>

              <div className="mt-10 grid gap-3 text-sm text-white/45">
                <a
                  href="mailto:alexisyvonnou@hotmail.fr"
                  className="transition hover:text-white"
                >
                  alexisyvonnou@hotmail.fr
                </a>

                <a
    href="tel:+33602379318"
    className="transition hover:text-white"
  >
    06 02 37 93 18
  </a>

                <a
                  href="https://www.instagram.com/alexis_yvonnou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram · @alexis_yvonnou
                </a>

                <a
                  href="https://www.linkedin.com/in/alexis-yvonnou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn · Alexis Yvonnou
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:alexisyvonnou@hotmail.fr?subject=Demande%20de%20contact%20-%20site%20Alexis%20Yvonnou"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5 hover:bg-stone-200"
              >
                <Mail size={18} />
                Me contacter
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition hover:border-white/40 hover:text-white"
              >
                Retour à l’accueil
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}