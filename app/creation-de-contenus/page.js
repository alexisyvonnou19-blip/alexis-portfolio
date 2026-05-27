import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Camera, Clapperboard, Smartphone } from "lucide-react";

export const metadata = {
  title: "Création de contenus — Photo, vidéo & réseaux sociaux",
  description:
    "Création de contenus photo, vidéo courte, reels, carrousels, stories et communication digitale par Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne.",
  alternates: {
    canonical: "https://alexisyvonnou.com/creation-de-contenus",
  },
  openGraph: {
    title: "Création de contenus — Alexis Yvonnou",
    description:
      "Photographie, vidéos courtes, reels, storytelling, réseaux sociaux et communication digitale pour marques, événements, projets nautiques et sportifs.",
    url: "https://alexisyvonnou.com/creation-de-contenus",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alexis Yvonnou — Création de contenus en Bretagne",
      },
    ],
  },
};

const services = [
  {
    icon: Camera,
    title: "Photographie",
    text: "Reportage, portraits, images de marque, événements, sport, nautisme, artisanat et contenus pensés pour la communication.",
  },
  {
    icon: Clapperboard,
    title: "Création de contenus",
    text: "Réels, vidéos verticales, carrousels, stories et contenus adaptés aux usages des réseaux sociaux.",
  },
  {
    icon: Smartphone,
    title: "Communication digitale",
    text: "Ligne éditoriale, stratégie de contenus, animation de réseaux sociaux, communication visuelle et accompagnement global.",
  },
  {
    icon: ArrowRight,
    title: "Site internet",
    text: "Création ou accompagnement sur des sites vitrines simples, clairs et cohérents avec votre image.",
  },
];

const projects = [
  "Solo Guy Cotten",
  "Tip & Shaft",
  "Studio K37",
  "Good Boats",
  "Reboat",
  "Ino-Rope",
  "PL Yachting",
  "EFTM",
  "SNIP Yachting",
  "Trampoline Park",
];

const contentCreationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://alexisyvonnou.com/creation-de-contenus#service",
  name: "Création de contenus photo, vidéo et réseaux sociaux",
  url: "https://alexisyvonnou.com/creation-de-contenus",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://alexisyvonnou.com/#business",
    name: "Alexis Yvonnou",
    url: "https://alexisyvonnou.com",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Bretagne",
    },
    {
      "@type": "AdministrativeArea",
      name: "Finistère",
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
  serviceType: [
    "Création de contenus",
    "Photographie",
    "Vidéo courte",
    "Reels",
    "Stories",
    "Carrousels",
    "Communication digitale",
    "Storytelling de marque",
    "Réseaux sociaux",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Marques, événements, entreprises, projets nautiques, projets sportifs et acteurs de l’artisanat",
  },
  description:
    "Service de création de contenus par Alexis Yvonnou : photographie, vidéos courtes, reels, carrousels, stories, storytelling et communication digitale pour marques, événements, projets nautiques, sportifs et artisanaux.",
};

export default function CreationContenusPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(contentCreationStructuredData),
  }}
/>
      {/* HERO */}
      <section className="page-offset px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">

          <div className="mt-14 grid gap-14 md:grid-cols-[1fr_0.95fr] md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Création de contenus
              </p>

              <h1 className="max-w-5xl text-2xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Créer des contenus pensés pour raconter, valoriser et diffuser.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-600 md:text-xl">
                Aujourd’hui, les réseaux sociaux sont devenus un véritable outil d’image, de visibilité et de communication. Mon rôle est de créer des contenus cohérents, incarnés et adaptés aux usages actuels : formats courts, photographie, vidéos, stories, carrousels et communication digitale.
              </p>
            </div>

            <div className="premium-image">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/matos.webp"
                  alt="Création de contenus photo et vidéo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* APPROCHE */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="premium-image">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/crea5.webp"
                alt="Production de contenus"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl pt-6 md:pt-10">
  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
    Mon approche
  </p>

  <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
    Comprendre un projet avant de produire des images.
  </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-stone-700">
              <p>
                Mon parcours entre événementiel, communication et terrain me
                permet d’aborder un projet dans son ensemble : ses besoins, son
                public, son image et la manière dont les contenus seront utilisés.
              </p>

              <p>
                L’idée n’est pas seulement de produire de “belles images”, mais
                de créer des contenus cohérents avec une identité et une stratégie pour atteindre les objectifs fixés.
              </p>

              <p>
                Le sport, le nautisme, l’événementiel, l’artisanat et les projets humains font partie des univers avec lesquels je travaille le plus régulièrement. Des expériences qui nourrissent aujourd’hui ma compréhension des enjeux d’image, de visibilité et de communication digitale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* SERVICES */}
      <section className="bg-stone-950 px-5 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
              Services
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Des contenus adaptés aux usages actuels.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-white/10 p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-white/60">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
  <div className="mx-auto max-w-7xl soft-divider" />
</section>

      {/* EXEMPLES */}
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              Exemples de projets
            </p>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Des projets entre événementiel, sport et communication.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-600">
              Ces dernières années, j’ai accompagné différents projets en
              photographie, communication et création de contenus digitaux, ainsi qu'en événementiel.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {projects.map((project) => (
              <span
                key={project}
                className="rounded-full border border-stone-300 bg-white/60 px-5 py-3 text-sm text-stone-700"
              >
                {project}
              </span>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="premium-image">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/crea6.webp"
                  alt="Projet de création de contenus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="premium-image">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/crea7.webp"
                  alt="Projet nautique et storytelling"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
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
              <Link
  href="/#contact"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5 hover:bg-stone-200"
>
  <Mail size={18} />
  Me contacter
</Link>

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