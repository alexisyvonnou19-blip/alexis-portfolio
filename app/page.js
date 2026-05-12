"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

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
    title: "Retour Charlie Dalin - Vendée Globe 24-25",
    text: "Un moment fort de course au large, entre émotion populaire, image sportive et récit maritime.",
    image: "/images/homecharlie.webp",
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
    title: "Nautisme",
    text: "Un univers que je connais de l’intérieur, entre pontons, entraînements, événements, marques nautiques et projets de course au large.",
  },
  {
    title: "Sport",
    text: "Capturer l’effort, le mouvement, les émotions et l’énergie d’une pratique, d’un événement ou d’un projet sportif.",
  },
  {
    title: "Outdoor",
    text: "Raconter les pratiques en extérieur, les environnements naturels, les aventures et les expériences vécues sur le terrain.",
  },
  {
    title: "Événementiel",
    text: "Documenter une journée dans son ensemble : ambiance, public, coulisses, moments clés, détails et images fortes.",
  },
  {
    title: "Artisanat",
    text: "Mettre en valeur les gestes, les savoir-faire, les matières, les ateliers et les projets portés par des indépendant·es, marques ou commerces.",
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
  return (
    <main className="min-h-screen bg-[#f7f4ef] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%)] text-stone-950">
      

      <section id="top" className="px-5 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-6xl text-center"
          >
            <p className="mb-5 text-sm text-stone-600">Bretagne · France</p>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-stone-950 md:text-7xl lg:text-8xl">
              Alexis Yvonnou
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-stone-700 md:text-2xl">
              Photographe & créateur de contenus basé à Concarneau, en Bretagne.
            </p>
            <p className="mx-auto mt-5 max-w-5xl text-2xl font-medium leading-9 text-stone-950 md:text-4xl md:leading-[1.15]">
              Raconter en images des histoires, des savoir-faire et des émotions.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#photographie">Voir mon travail</Button>
              <Button href="#contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-900/15"
          >
            <div className="relative h-[52vh] min-h-[340px] w-full md:h-[68vh]">
  <Image
    src="/images/hero5.webp"
    alt="Image principale du portfolio d’Alexis Yvonnou"
    fill
    priority
    quality={82}
    sizes="100vw"
    className="object-cover"
  />
</div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6 md:p-10">
              <div className="max-w-3xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                  Univers
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                  Nautisme · Sport · Événementiel · Artisanat
                </p>
              </div>
            </div>
          </motion.div>
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
                className="group relative overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-stone-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
  src={category.image}
  alt={`Galerie photo ${category.title} par Alexis Yvonnou`}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover opacity-90 transition duration-1000 group-hover:scale-[1.015] group-hover:opacity-75"
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

      <section id="contenus" className="px-5 py-20 md:px-8 md:py-24">
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
              Création de contenus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Des contenus visuels pensés pour le digital.
            </h2>
            <p className="mt-6 text-lg leading-9 text-stone-700">
              Les réseaux sociaux sont devenus un véritable outil de visibilité. Photos, réels, carrousels ou stories : je crée des contenus pensés pour aider un projet, une marque ou un événement à communiquer de manière claire, cohérente et incarnée.
            </p>
            <div className="mt-8 grid gap-3 text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">Photographie</div>
<div className="rounded-2xl bg-white p-5">Réels & vidéos verticales</div>
<div className="rounded-2xl bg-white p-5">Carrousels</div>
<div className="rounded-2xl bg-white p-5">Stories & contenus immersifs</div>
            </div>
            <div className="mt-10">
  <Button href="/creation-de-contenus" variant="secondary">
    En savoir plus
  </Button>
</div>
          </div>
        </div>
      </section>

      <section id="domaines" className="bg-stone-950 px-5 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
    Mes terrains de jeu
  </p>

  <h2 className="max-w-7xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-[7rem]">
    Là où mon regard prend
    <br />
    tout son sens.
  </h2>

  <div className="mt-10 grid gap-8 md:grid-cols-12">
    <p className="md:col-span-9 text-xl leading-10 text-white/68 lg:text-[1.45rem] lg:leading-[2.4rem]">
      Le nautisme, le sport, l’événementiel, l’artisanat et les projets humains font partie des univers avec lesquels je travaille le plus souvent. Ce sont des terrains qui ont façonné mon regard, ma manière de raconter des histoires et ma compréhension des enjeux d’image, tout en gardant une approche ouverte et adaptable à chaque projet.
    </p>
  </div>
</div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {domains.map((domain, index) => (
              <article
                key={domain.title}
                className="group grid gap-6 py-8 md:grid-cols-[0.18fr_0.82fr] md:items-start md:py-10"
              >
                <p className="text-sm font-medium text-white/35 md:text-base">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="grid gap-4 md:grid-cols-[0.45fr_0.55fr] md:items-start">
                  <h3 className="text-3xl font-semibold tracking-tight text-white transition group-hover:translate-x-2 md:text-5xl">
                    {domain.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                    {domain.text}
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
      <div className="p-8 md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
          Contact
        </p>

        <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Discutons de votre projet.
        </h2>

        <p className="mt-8 max-w-md text-lg leading-9 text-white/65">
          Chaque projet commence par un échange simple autour de vos besoins, de votre univers et des images à créer.
        </p>

        <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/40">
          Basé à Concarneau en Bretagne · Déplacements possibles partout en France
        </p>
      </div>

      <div className="flex flex-col justify-between bg-white p-8 text-stone-950 md:p-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Me contacter
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Un mail suffit pour commencer.
          </h3>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Présentez-moi brièvement votre projet, la date, le lieu et vos besoins. Je réponds généralement sous 24 à 48h.
          </p>
        </div>

        <a
          href="mailto:alexisyvonnou@hotmail.fr?subject=Demande%20de%20contact%20-%20site%20Alexis%20Yvonnou"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          <Mail size={18} />
          Écrire un mail
        </a>

        <div className="mt-10 grid gap-3 text-sm text-stone-500">
          <a href="mailto:alexisyvonnou@hotmail.fr" className="hover:text-stone-950">
            alexisyvonnou@hotmail.fr
          </a>

          <a href="tel:+33602379318" className="hover:text-stone-950">
            06 02 37 93 18
          </a>

          <a
            href="https://www.instagram.com/alexis_yvonnou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950"
          >
            Instagram · @alexis_yvonnou
          </a>

          <a
            href="https://www.linkedin.com/in/alexis-yvonnou/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950"
          >
            LinkedIn · Alexis Yvonnou
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <Link
        href="#top"
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white shadow-2xl shadow-stone-900/20 transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
      >
        <ChevronUp size={18} />
      </Link>
    </main>
  );
}