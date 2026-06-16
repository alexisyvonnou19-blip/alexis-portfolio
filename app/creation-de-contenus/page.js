import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Smartphone,
  Monitor,
} from "lucide-react";

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
    { "@type": "AdministrativeArea", name: "Bretagne" },
    { "@type": "AdministrativeArea", name: "Finistère" },
    { "@type": "Country", name: "France" },
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

const services = [
  {
    icon: Camera,
    title: "Photographier",
    label: "Images de terrain",
    text: "Reportages, portraits, événements, nautisme, sport et savoir-faire.",
  },
  {
    icon: Clapperboard,
    title: "Créer",
    label: "Formats courts",
    text: "Réels, stories, vidéos verticales, carrousels et contenus sociaux.",
  },
  {
    icon: Smartphone,
    title: "Diffuser",
    label: "Réseaux sociaux",
    text: "Ligne éditoriale, calendrier, animation et cohérence de prise de parole.",
  },
  {
    icon: Monitor,
    title: "Structurer",
    label: "Site & identité",
    text: "Une présence digitale claire, crédible et alignée avec votre image.",
  },
];

const projectCases = [
  {
    name: "Good Boats",
    context:
      "Développer une présence nautique claire, régulière et identifiable.",
    mission: "Création de contenus · formats courts · communication digitale",
    image: "/images/good-boats.webp",
  },
  {
    name: "PL Yachting",
    context:
      "Valoriser les bateaux, les chantiers et l’expertise d’un professionnel du nautisme.",
    mission: "Photographie · contenus · réseaux sociaux",
    image: "/images/pl-yachting.webp",
  },
  {
    name: "SNIP Yachting",
    context:
      "Rendre visibles les marques, les refits et les projets accompagnés.",
    mission: "Animation réseaux sociaux · création de contenus",
    image: "/images/snip-yachting.webp",
  },
];

export default function CreationContenusPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contentCreationStructuredData),
        }}
      />

      <section className="page-offset px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
            <div className="grid md:grid-cols-[0.55fr_0.45fr]">
              <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-8 md:p-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                    Création de contenus
                  </p>

                  <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] md:text-7xl lg:text-[6.5rem]">
                    Des contenus qui donnent du relief à votre activité.
                  </h1>
                </div>

                <div>
                  <p className="max-w-xl text-lg leading-9 text-white/68 md:text-xl">
                    Photographie, vidéos courtes, réseaux sociaux, site internet
                    et communication digitale pour les projets qui veulent être
                    mieux vus, mieux compris et mieux racontés.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="#services"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      Voir les services
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-stone-950"
                    >
                      Me contacter
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[520px] md:min-h-[620px]">
                <Image
                  src="/images/matos.webp"
                  alt="Création de contenus photo et vidéo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/20 md:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.45fr_0.55fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Méthode
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Observer. Créer. Diffuser.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-stone-600">
              L’objectif n’est pas de produire du contenu pour remplir un
              calendrier. L’objectif est de créer des images et des formats qui
              servent réellement votre message, votre visibilité et votre
              crédibilité.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Comprendre",
                text: "Votre activité, vos publics, vos enjeux et ce qui mérite d’être raconté.",
              },
              {
                title: "Produire",
                text: "Des images, vidéos et contenus adaptés au terrain comme aux plateformes.",
              },
              {
                title: "Faire vivre",
                text: "Une communication plus régulière, plus claire et plus identifiable.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-stone-200 bg-white/65 p-7 shadow-xl shadow-stone-900/5"
              >
                <p className="text-xs font-semibold tracking-[0.3em] text-[#e26a2c]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-stone-950 px-5 py-24 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 md:grid-cols-[0.5fr_0.5fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Services
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Une présence construite de l’image à la diffusion.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-white/60">
              J’interviens sur les étapes qui donnent de la cohérence à votre
              communication : création d’images, formats digitaux, réseaux
              sociaux, site internet et identité visuelle.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.07]"
                >
                  <div className="pointer-events-none absolute -right-6 -top-8 text-8xl font-semibold tracking-[-0.08em] text-white/[0.035] transition duration-500 group-hover:text-[#e26a2c]/15">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e26a2c]">
                      <Icon size={24} />
                    </div>

                    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                      {service.label}
                    </p>

                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-8 text-white/62">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.58fr_0.42fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Projets
              </p>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Quelques contextes déjà accompagnés.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-stone-600">
              Nautisme, entreprises, événements ou communication digitale : des
              projets différents, avec une même volonté de rendre le réel plus
              lisible et plus vivant.
            </p>
          </div>

          <div className="grid gap-6">
            {projectCases.map((project, index) => (
              <article
                key={project.name}
                className={`group grid overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 ${
                  index % 2 === 1
                    ? "md:grid-cols-[0.42fr_0.58fr]"
                    : "md:grid-cols-[0.58fr_0.42fr]"
                }`}
              >
                <div
                  className={`relative min-h-[340px] md:min-h-[440px] ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} - création de contenus par Alexis Yvonnou`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-85 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div
                  className={`flex flex-col justify-between p-8 md:p-10 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                      Projet accompagné
                    </p>

                    <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                      {project.name}
                    </h3>
                  </div>

                  <div className="mt-12 grid gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Contexte
                      </p>

                      <p className="mt-4 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                        {project.context}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Mission
                      </p>

                      <p className="mt-4 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                        {project.mission}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[620px] overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
            <Image
              src="/images/crea5.webp"
              alt="Création de contenus terrain"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Vision
              </p>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
                Du contenu utile. Pas du contenu pour faire du contenu.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
                Chaque image, chaque vidéo, chaque publication doit aider votre
                projet à être mieux compris, mieux identifié et mieux raconté.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-stone-950 p-8 text-white shadow-2xl shadow-stone-900/20 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Contact
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Vous avez une activité à rendre plus visible ?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-white/60">
                Photo, contenus, réseaux sociaux ou site internet : échangeons
                simplement autour de votre projet, de vos besoins et de votre
                contexte.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Me contacter
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white"
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