import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Création de contenus — Photo, vidéo & réseaux sociaux",
  description:
    "Création de contenus photo, vidéo courte, reels, carrousels, stories et communication digitale par Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne.",
  alternates: {
    canonical: "https://alexisyvonnou.com/creation-de-contenus",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Observer",
    subtitle: "Comprendre le terrain",
    text: "Identifier ce qui mérite d’être raconté : votre activité, vos publics, vos enjeux, vos angles.",
  },
  {
    number: "02",
    title: "Créer",
    subtitle: "Produire les bons contenus",
    text: "Photos, vidéos courtes, réels, stories, carrousels ou formats plus longs selon le contexte.",
  },
  {
    number: "03",
    title: "Diffuser",
    subtitle: "Faire vivre la communication",
    text: "Structurer la prise de parole et installer une présence claire, régulière et identifiable.",
  },
];

const services = [
  {
    title: "Produire",
    label: "Photo & vidéo",
    text: "Reportages, portraits, formats courts et images de terrain pour montrer votre activité avec justesse.",
    image: "/images/crea5.webp",
  },
  {
    title: "Diffuser",
    label: "Réseaux sociaux",
    text: "Réels, stories, publications, ligne éditoriale et contenus pensés pour être vus et compris.",
    image: "/images/crea2.webp",
  },
  {
    title: "Structurer",
    label: "Site & identité",
    text: "Supports digitaux, site internet, direction graphique et bases solides pour votre communication.",
    image: "/images/homesite.webp",
  },
];

const projectCases = [
  {
    name: "Good Boats",
    context:
      "Développer une présence nautique claire, régulière et identifiable.",
    mission: "Création de contenus · formats courts · communication digitale",
    actions: "Réels · stories · ligne éditoriale · contenus nautiques",
    image: "/images/good-boats.webp",
  },
  {
    name: "PL Yachting",
    context:
      "Valoriser les bateaux, les chantiers et l’expertise d’un professionnel du nautisme.",
    mission: "Photographie · contenus · réseaux sociaux",
    actions: "Reportages photo · publications · valorisation de projets",
    image: "/images/pl-yachting.webp",
  },
  {
    name: "SNIP Yachting",
    context:
      "Rendre visibles les marques, les refits et les projets accompagnés.",
    mission: "Animation réseaux sociaux · création de contenus",
    actions: "Posts · stories · contenus salons · mise en avant bateaux",
    image: "/images/snip-yachting.webp",
  },
];

export default function CreationContenusPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <section className="page-offset px-5 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20 md:rounded-[3rem]">
            <div className="grid md:grid-cols-[0.54fr_0.46fr]">
              <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8 md:min-h-[600px] md:p-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                    Création de contenus
                  </p>

                  <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] md:text-7xl lg:text-[5.8rem]">
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

              <div className="relative min-h-[380px] md:min-h-[600px]">
                <Image
                  src="/images/matos.webp"
                  alt="Matériel photo et vidéo pour la création de contenus"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/25 md:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e2d7] px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 md:grid-cols-[0.44fr_0.56fr] md:items-end">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
          Méthode
        </p>

        <h2 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
          Observer le terrain.
          <br />
          Créer juste.
          <br />
          Diffuser mieux.
        </h2>
      </div>

      <div className="max-w-2xl md:ml-auto">
        <p className="text-lg leading-9 text-stone-700">
          L’objectif n’est pas de publier pour remplir un calendrier. L’objectif
          est de construire une communication utile : comprendre ce qui compte,
          produire les bons contenus, puis les faire vivre avec cohérence.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
        <Image
          src="/images/crea5.webp"
          alt="Création de contenus sur le terrain"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
            Une approche terrain
          </p>

          <h3 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Partir du réel, pas d’une idée générique.
          </h3>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/70">
            Avant de produire, il faut comprendre : le lieu, les personnes,
            les contraintes, les usages et ce que votre public doit vraiment
            retenir.
          </p>
        </div>
      </div>

      <div className="grid gap-5">
        {[
          {
            number: "01",
            title: "Observer",
            subtitle: "Comprendre le terrain",
            text: "Identifier votre activité, vos publics, vos messages, vos angles et ce qui mérite d’être raconté.",
          },
          {
            number: "02",
            title: "Créer",
            subtitle: "Produire les bons contenus",
            text: "Photos, vidéos courtes, réels, stories, carrousels ou formats plus longs selon le contexte.",
          },
          {
            number: "03",
            title: "Diffuser",
            subtitle: "Faire vivre la communication",
            text: "Structurer la prise de parole, organiser les contenus et installer une présence régulière.",
          },
        ].map((step) => (
          <article
            key={step.title}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-950/10 bg-[#f7f4ef] p-7 shadow-xl shadow-stone-900/5 transition duration-500 hover:-translate-y-1 hover:bg-stone-950 hover:text-white md:p-8"
          >
            <div className="pointer-events-none absolute -right-5 -top-8 text-[7rem] font-semibold tracking-[-0.08em] text-stone-950/[0.04] transition duration-500 group-hover:text-white/[0.06]">
              {step.number}
            </div>

            <div className="relative z-10">
              <div className="mb-10 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.35em] text-[#e26a2c]">
                  {step.number}
                </p>

                <div className="h-2 w-2 rounded-full bg-[#e26a2c]" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 transition group-hover:text-white/35">
                {step.subtitle}
              </p>

              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                {step.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 transition group-hover:text-white/65">
                {step.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      <section
        id="services"
        className="bg-stone-950 px-5 py-24 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 md:grid-cols-[0.48fr_0.52fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Services
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                De l’image à la présence.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-white/60">
              J’interviens sur les étapes qui donnent de la cohérence à votre
              communication : produire les bons contenus, les diffuser avec
              régularité et structurer les supports qui les portent.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-stone-900 shadow-xl shadow-black/20 transition duration-500 hover:-translate-y-2"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-55"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-white/80 backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                    {service.label}
                  </p>

                  <h3 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
                    {service.title}
                  </h3>

                  <p className="mt-6 max-w-sm text-base leading-8 text-white/72">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
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
                className={`group grid overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/20 ${
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

                    <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] transition duration-500 group-hover:translate-x-1 md:text-6xl">
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

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Actions
                      </p>
                      <p className="mt-4 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                        {project.actions}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e2d7] px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[560px] overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20 md:min-h-[620px]">
            <Image
              src="/images/crea5.webp"
              alt="Création de contenus terrain"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

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

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
            <Image
              src="/images/matos.webp"
              alt="Projet à raconter"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />

            <div className="relative z-10 grid gap-12 p-8 md:grid-cols-[1fr_0.55fr] md:items-end md:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                  Contact
                </p>

                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                  Voyons ce qui mérite d’être raconté.
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/65">
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
        </div>
      </section>
    </main>
  );
}