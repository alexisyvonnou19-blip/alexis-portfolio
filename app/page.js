"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, ChevronUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "./components/ContactForm";

const photographyCategories = [
  {
    title: "Portraits",
    text: "Des portraits naturels, incarnés, pensés pour raconter une personnalité, un métier ou un projet.",
    image: "/images/portrait2.webp",
    href: "/photographie/portraits",
  },
  {
    title: "Nature & architecture",
    text: "Lumières, lignes, matières et atmosphères : une approche sensible des lieux, des paysages et des formes.",
    image: "/images/IMG_0671.webp",
    href: "/photographie/nature-paysage-architecture",
  },
  {
    title: "Course au large",
    text: "Au plus près des marins, des bateaux, des pontons et de l’intensité propre à la voile de compétition.",
    image: "/images/homecal5.webp",
    href: "/photographie/course-au-large",
  },
  {
    title: "Surf",
    text: "L’énergie de l’océan, le mouvement et les instants suspendus entre puissance et équilibre.",
    image: "/images/homesurf.webp",
    href: "/photographie/surf",
  },
  {
    title: "Wing Foil",
    text: "Une pratique aérienne et visuelle, entre glisse, vitesse et légèreté.",
    image: "/images/homewingfoil.webp",
    href: "/photographie/wing-foil",
  },
  {
    title: "Trail",
    text: "L’effort, le terrain, les visages et l’ambiance d’un sport outdoor en pleine nature.",
    image: "/images/hometrail5.webp",
    href: "/photographie/trail",
  },
  {
    title: "Charlie Dalin, le retour",
    text: "Un moment fort de course au large, entre émotion populaire, image sportive et récit maritime.",
    image: "/images/homecharliedalin2.webp",
    href: "/photographie/retour-charlie-dalin-vendee-globe-24-25",
  },
  {
    title: "Banque images Mini 6.50",
    text: "Une collection dédiée à l’univers Mini 6.50 : bateaux, marins, et moments de course.",
    image: "/images/IMG_1538.webp",
    href: "/photographie/mini-650",
  },
];

const domains = [
  {
    number: "01",
    title: "Nautisme",
    description:
      "Un univers que je connais de l’intérieur, entre pontons, entraînements, événements, marques nautiques et projets de course au large.",
    image: "/images/imoca.webp",
  },
  {
    number: "02",
    title: "Sport",
    description:
      "Capturer l’effort, le mouvement, les émotions et l’énergie d’une pratique, d’un événement ou d’un projet sportif.",
    image: "/images/sport.webp",
  },
  {
    number: "03",
    title: "Outdoor",
    description:
      "Raconter les pratiques en extérieur, les environnements naturels, les aventures et les expériences vécues sur le terrain.",
    image: "/images/outdoor.webp",
  },
  {
    number: "04",
    title: "Événementiel",
    description:
      "Documenter une journée dans son ensemble : ambiance, public, coulisses, moments clés, détails et images fortes.",
    image: "/images/event.webp",
  },
  {
    number: "05",
    title: "Artisanat",
    description:
      "Mettre en valeur les gestes, les savoir-faire, les matières et les personnes qui font vivre un métier.",
    image: "/images/artisanat.webp",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

function Button({ children, href = "#contact", variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-stone-950 text-white hover:-translate-y-0.5 hover:bg-stone-800"
      : "border border-stone-300 text-stone-950 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export default function AlexisYvonnouHomepage() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);
  const { scrollY } = useScroll();

const heroY = useTransform(scrollY, [0, 900], [0, -20]);
const heroScale = useTransform(scrollY, [0, 900], [1, 1.025]);
  return (
    <main className="min-h-screen bg-[#f7f4ef] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%)] text-stone-950">
      

     <section id="top" className="px-5 pt-24 md:px-8 md:pt-32">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
          Photographe & créateur de contenus · Bretagne
        </p>

        <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-stone-950 md:text-8xl lg:text-[9.5rem]">
          Alexis Yvonnou
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.035em] text-stone-950 md:text-4xl md:leading-[1.12]">
          Des images et des contenus pour raconter votre projet, renforcer votre visibilité et nourrir votre communication.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
          Basé à Concarneau, j’accompagne les marques, entreprises, événements et projets de terrain dans la création de contenus photo, vidéo et réseaux sociaux.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="#photographie">
            Découvrir mes photos
          </Button>

          <Button href="/creation-de-contenus">
            Création de contenus
          </Button>

          <Button href="#contact" variant="secondary">
            Me contacter
          </Button>
        </div>
      </div>

      <div className="mt-14">
        <div className="relative overflow-hidden rounded-[2.75rem] shadow-[0_35px_120px_rgba(28,25,23,0.14)]">
          <div className="relative h-[48vh] min-h-[380px] w-full overflow-hidden md:h-[64vh]">
            <motion.div
              style={{
                y: heroY,
                scale: heroScale,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero5.webp"
                alt="Image principale du portfolio d’Alexis Yvonnou"
                fill
                priority
                quality={86}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/8" />

            <div className="absolute left-5 top-5 rounded-full bg-white/80 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-950 shadow-sm backdrop-blur-md md:left-8 md:top-8">
              Concarneau · France
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 md:bottom-8 md:left-8 md:right-8 md:flex-row md:items-end md:justify-between">
  <p className="inline-flex w-fit rounded-full bg-white/82 px-5 py-3 text-sm font-medium text-stone-950 shadow-sm backdrop-blur-md md:text-base">
    Nautisme · Sport · Événementiel · Artisanat
  </p>

  <p className="inline-flex w-fit rounded-full bg-black/35 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur-md md:ml-auto">
    Photo · Vidéo · Réseaux sociaux
  </p>
</div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section id="services" className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-stone-900/10 max-h-[620px]">
            <div className="relative aspect-[4/5] w-full">
  <Image
    src="/images/crea2.webp"
    alt="Création de contenus photo, vidéo et réseaux sociaux par Alexis Yvonnou"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              MES SERVICES
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Développer votre visibilité grâce à des contenus cohérents et authentiques qui valorisent votre savoir-faire.
            </h2>
            <p className="mt-6 text-lg leading-9 text-stone-700">
              Aujourd’hui, être visible ne se résume plus à publier quelques photos. J’accompagne les entreprises, marques, événements, artisans et commerçants dans la création de contenus et l’animation de leurs réseaux sociaux, afin de développer leur visibilité, valoriser leur savoir-faire et construire une communication claire, cohérente et régulière.
            </p>
            <div className="mt-8 grid gap-3 text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">Photographie</div>
<div className="rounded-2xl bg-white p-5">Contenus digitaux</div>
<div className="rounded-2xl bg-white p-5">Stratégie éditoriale</div>
<div className="rounded-2xl bg-white p-5">Sites internet & newsletters</div>
            </div>
            <div className="mt-10">
  <Button href="/creation-de-contenus" variant="secondary">
    En savoir plus
  </Button>
</div>
          </div>
        </div>
      </section>

      <section id="projets" className="px-5 py-28 md:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
        Réalisations
      </p>

      <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
        Quelques projets accompagnés.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-9 text-stone-600">
        Des projets menés autour de l’identité, des contenus, des réseaux sociaux
        et de la présence en ligne.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          name: "Didier Yvonnou",
          text: "Site internet · identité visuelle · accompagnement éditorial",
          image: "/images/didier.webp",
        },
        {
          name: "PL Yachting",
          text: "Création de contenus photographiques · réseaux sociaux · valorisation des chantiers",
          image: "/images/pl-yachting.webp",
        },
        {
          name: "Good Boats",
          text: "Création de contenus · communication digitale · gestion de projet",
          image: "/images/good-boats.webp",
        },
        {
          name: "SNIP Yachting",
          text: "Création de contenus · animation réseaux sociaux",
          image: "/images/snip-yachting.webp",
        },
      ].map((project) => (
        <article
          key={project.name}
          className="group relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-stone-900/10"
        >
          <Image
            src={project.image}
            alt={`${project.name} - projet accompagné par Alexis Yvonnou`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-65"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Projet accompagné
            </p>

            <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {project.name}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              {project.text}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="photographie" className="px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Photographie
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-stone-950 md:text-7xl">
              Des galeries pour entrer dans chaque univers.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-600">
              Chaque série raconte un terrain, une ambiance, une lumière ou une énergie particulière.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {photographyCategories.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className="group premium-hover premium-image-hover relative overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-stone-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
  src={category.image}
  alt={`Galerie photo ${category.title} par Alexis Yvonnou`}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover opacity-90"
/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Galerie photo
                  </p>
                  <h3 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                    {category.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                    {category.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section id="qui-suis-je" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <SectionTitle
                eyebrow="Qui suis-je ?"
                title="Un regard de terrain, entre sport, mer et récits humains."
              />
              <div className="space-y-6 text-lg leading-9 text-stone-700">
  <p>
    Basé à Concarneau, en Bretagne, je travaille comme photographe et créateur de contenus auprès de marques, d’événements, de sportifs et de projets qui ont besoin d’images fortes, utiles et sincères.
  </p>
  <p>
    Mon univers s’est construit autour du nautisme, de la course au large et du sport. J’aime être au plus près de l’action, mais aussi des moments plus calmes : les préparations, les visages, les détails et tout ce qui raconte une histoire au-delà de l’image seule.
  </p>
  <p>
    Au-delà de la photographie, j’accompagne aussi des projets dans la création de contenus pensés pour le digital : réseaux sociaux, formats courts, vidéo, storytelling et communication visuelle.
  </p>
</div>

<div className="mt-10">
  <Button href="/a-propos" variant="secondary">
    En savoir plus
  </Button>
</div>
          
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-stone-900/10">
                <div className="relative aspect-[4/5] w-full">
  <Image
    src="/images/moi.webp"
    alt="Portrait d’Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg">
                <p className="text-sm font-medium text-stone-900">Alexis Yvonnou</p>
                <p className="text-xs text-stone-500">
                  Photographe & créateur de contenus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="domaines" className="bg-[#f7f4ef] px-5 py-28 text-stone-950 md:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 grid gap-8 md:grid-cols-[0.65fr_0.35fr] md:items-end">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
          Mes terrains de jeu
        </p>

        <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
          Des univers concrets, vivants et visuels.
        </h2>
      </div>

      <p className="text-lg leading-9 text-stone-600">
        Nautisme, sport, événementiel ou artisanat : je travaille au plus près du terrain,
        des gestes, des lieux et des personnes.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {domains.map((domain, index) => (
        <article
          key={domain.title}
          className={`group relative overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-stone-900/10 ${
            index === 0 ? "md:col-span-2 min-h-[520px]" : "min-h-[420px]"
          }`}
        >
          <Image
            src={domain.image}
            alt={domain.title}
            fill
            sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover opacity-85 transition duration-1000 group-hover:scale-[1.035] group-hover:opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full bg-[#d8c6ad]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-950 backdrop-blur-md md:left-8 md:top-8">
            {domain.number}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
            <h3 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              {domain.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {domain.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
    <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
      <div className="flex flex-col justify-between p-8 md:p-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Discutons de votre projet.
          </h2>

          <p className="mt-10 max-w-md text-lg leading-9 text-white/65">
            Chaque projet commence par un échange simple autour de vos besoins,
            de votre univers et des images à créer.
          </p>
        </div>

          <div className="mt-10 grid gap-3 text-sm text-white/75">
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

        <div className="mt-14 grid gap-3 text-sm text-white/45">
          <p>Basé à Concarneau, en Bretagne</p>
          <p>Déplacements possibles en France</p>
          <p>Photo · contenus · communication digitale</p>
        </div>
      </div>

      <div className="bg-white p-8 text-stone-950 md:p-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Me contacter
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Un mail suffit pour commencer.
          </h3>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Expliquez-moi simplement votre projet, le contexte, la date et le
            lieu si vous les connaissez déjà. Je reviendrai vers vous dans les
            plus brefs délais.
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>

      <Link
        href="#top" scroll={false}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white shadow-2xl shadow-stone-900/20 transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
      >
        <ChevronUp size={18} />
      </Link>
    </main>
  );
}