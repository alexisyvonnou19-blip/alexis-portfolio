"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ContactForm from "./components/ContactForm";

const terrainItems = [
  {
    number: "01",
    title: "Nautisme & course au large",
    text: "Marins, bateaux, régates et vie de ponton.",
    image: "/images/imoca.webp",
  },
  {
    number: "02",
    title: "Sport & événements",
    text: "Émotions, performance et moments de partage.",
    image: "/images/sport.webp",
  },
  {
    number: "03",
    title: "Entreprises & savoir-faire",
    text: "Métiers, équipes et gestes qui méritent d’être montrés.",
    image: "/images/artisanat.webp",
  },
  {
    number: "04",
    title: "Voyage & aventure",
    text: "Territoires, rencontres et récits de terrain.",
    image: "/images/outdoor.webp",
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PhotoTransition({ image, label }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f4ef] pt-0 pb-0">
      <FadeIn>
        <div className="relative h-[420px] w-full overflow-hidden bg-stone-950 shadow-2xl shadow-stone-900/15 md:h-[620px]">
          <Image
            src={image}
            alt={label ? `Photographie ${label} réalisée par Alexis Yvonnou` : "Photographie de transition réalisée par Alexis Yvonnou"}
            fill
            sizes="100vw"
            className="object-cover opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
}

export default function AlexisYvonnouHomepage() {
  const [activeTerrain, setActiveTerrain] = useState(terrainItems[0]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  const heroY = useTransform(scrollY, [0, 900], [0, -20]);
  const heroScale = useTransform(scrollY, [0, 900], [1, 1.025]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 500);
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-stone-950">
      <motion.div
        className="fixed left-0 top-0 z-[999] h-[2px] w-full origin-left bg-[#e26a2c]"
        style={{ scaleX: scrollYProgress }}
      />

      <section id="top" className="px-4 pt-10 md:px-8 md:pt-28">
  <div className="mx-auto max-w-7xl pt-14 md:pt-0">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] bg-stone-950 shadow-[0_35px_120px_rgba(28,25,23,0.18)] md:rounded-[3rem]"
    >
      <div className="relative min-h-[560px] overflow-hidden md:min-h-[700px]">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero5.webp"
            alt="Image principale du portfolio d’Alexis Yvonnou"
            fill
            priority
            fetchPriority="high"
            quality={70}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover object-[30%_center] md:object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/30 to-black/5 md:from-black/88 md:via-black/42 md:to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-black/12 to-transparent md:from-black/62 md:via-black/22" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_25%_70%,rgba(255,255,255,0.12),transparent_28%)] md:block" />

        <div className="absolute left-5 top-5 z-10 hidden rounded-full bg-white/90 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-950 shadow-sm backdrop-blur-md md:block">
          Alexis Yvonnou
        </div>

        <div className="absolute right-8 top-8 z-10 hidden rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur-md md:block">
          Concarneau · Bretagne
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 pb-12 text-white md:p-12 lg:p-14">
          <div className="grid gap-10 md:grid-cols-[0.66fr_0.34fr] md:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[6.6rem]">
                Raconter
                <br />
                le terrain.
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-light leading-snug tracking-[-0.035em] text-white/90 md:mt-7 md:text-2xl">
                Photographie · Création de contenus · Communication
              </p>
            </div>

            <div className="hidden max-w-md rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md md:block md:translate-y-24 md:p-6">
              <p className="text-base leading-7 text-white/76 md:text-lg md:leading-8">
                Pour les entreprises, marques et événements qui veulent être mieux vus,
                mieux compris et mieux racontés.
              </p>

              <div className="mt-6">
                <Link
                  href="#projets"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 md:px-6"
                >
                  Découvrir mon travail
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 hidden flex-wrap gap-2 md:mt-12 md:flex md:gap-3">
            {["Nautisme", "Sport", "Outdoor", "Événementiel", "Artisanat"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/85 backdrop-blur-md md:px-4"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950"
            >
              Découvrir mon travail
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section
  id="services"
  className="relative mt-24 bg-[#0b0b0a] px-5 py-28 text-white md:mt-32 md:px-8 md:py-32"
>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(226,106,44,0.16),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-14 grid gap-8 md:grid-cols-[0.52fr_0.48fr] md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                  Services
                </p>

                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                  Ce que je peux faire pour votre projet.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-9 text-white/60">
                Produire les bonnes images, construire les bons contenus et donner à votre
                communication une présence plus claire, plus vivante et plus identifiable.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Photographie",
                subtitle: "Images de terrain",
                text: "Reportages, portraits, sport, nautisme, événements et savoir-faire.",
                image: "/images/1.webp",
              },
              {
                number: "02",
                title: "Création de contenus",
                subtitle: "Formats courts & storytelling",
                text: "Réels, stories, carrousels et contenus pensés pour le digital.",
                image: "/images/crea2.webp",
              },
              {
                number: "03",
                title: "Réseaux sociaux",
                subtitle: "Ligne éditoriale & diffusion",
                text: "Structurer, publier et faire vivre votre présence dans le temps.",
                image: "/images/homers.webp",
              },
              {
                number: "04",
                title: "Site & identité",
                subtitle: "Présence digitale",
                text: "Une présence crédible, cohérente et durable.",
                image: "/images/homesite.webp",
              },
            ].map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.06}>
                <article
                  className={`group relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 md:min-h-[520px] ${
                    index === 0 || index === 3 ? "md:translate-y-10" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} par Alexis Yvonnou`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-72 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-55"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/28 to-black/5" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
                    {service.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                      {service.subtitle}
                    </p>

                    <h3 className="mt-3 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] transition duration-500 group-hover:translate-x-1 md:text-6xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                      {service.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16">
              <Link
                href="/creation-de-contenus"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Découvrir mes services
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <PhotoTransition
  image="/images/horizontal1.webp"
  label="Photo de transition montrant un paysage de terrain photographié par Alexis Yvonnou"
/>

      <section id="projets" className="relative px-3 pt-14 pb-20 md:px-8 md:pt-8 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,106,44,0.08),transparent_28%),linear-gradient(180deg,#f7f4ef_0%,#efe8dd_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16 grid gap-8 md:grid-cols-[0.6fr_0.4fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
  Réalisations
</p>

                <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  Des projets, des contextes, des résultats.
                </h2>
              </div>

              <p className="text-lg leading-9 text-stone-600">
                Quelques collaborations menées autour de l’image, des contenus, des réseaux sociaux,
                de l’identité et de la présence en ligne.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8">
            {[
              {
                name: "Didier Yvonnou",
                context:
                  "Créer un univers personnel autour du développement humain, de la transmission et du retour à soi.",
                mission: ["Site internet", "Identité visuelle", "Accompagnement éditorial"],
                image: "/images/didier.webp",
              },
              {
                name: "PL Yachting",
                context:
                  "Valoriser l’expertise d’un professionnel du nautisme par le biais de ses projets.",
                mission: ["Photographie", "Création de contenus", "Réseaux sociaux"],
                image: "/images/pl-yachting.webp",
              },
              {
                name: "Good Boats",
                context:
                  "Développer la visibilité d’un média nautique à travers des contenus réguliers, clairs et incarnés.",
                mission: ["Création de contenus", "Communication digitale", "Gestion éditoriale"],
                image: "/images/good-boats.webp",
              },
            ].map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.04}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group grid overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-stone-900/20 ${
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
                      alt={`${project.name} - projet accompagné par Alexis Yvonnou`}
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

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.mission.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="photographie" className="relative bg-[#e9e2d7] px-5 py-24 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.7),transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16 grid gap-10 md:grid-cols-[0.58fr_0.42fr] md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                  Photographie
                </p>

                <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-stone-950 md:text-7xl">
                  Des galeries pour entrer dans chaque univers.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-9 text-stone-600">
                  Une sélection de séries photo entre portraits, mer, sport, paysages et
                  récits de terrain.
                </p>

                <Link
                  href="/photographie"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  Voir toutes les galeries
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Portraits",
                text: "Des visages, des présences, des histoires.",
                href: "/photographie/portraits",
                image: "/images/portrait2.webp",
              },
              {
                title: "Course au large",
                text: "Départs de course, arrivées, manoeuvres, entraînements...",
                href: "/photographie/course-au-large",
                image: "/images/IMG_1003.webp",
              },
              {
                title: "Surf",
                text: "L’océan, le mouvement et les instants suspendus entre puissance et équilibre.",
                href: "/photographie/surf",
                image: "/images/photos/surf/1.webp",
              },
              {
                title: "Mini 6.50",
                text: "Une banque d’images construite autour d’un projet Mini.",
                href: "/photographie/mini-650",
                image: "/images/IMG_1538.webp",
              },
            ].map((gallery, index) => (
              <FadeIn key={gallery.title} delay={index * 0.05}>
                <Link
                  href={gallery.href}
                  className="group relative block min-h-[430px] overflow-hidden rounded-[2.5rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/20 md:min-h-[520px]"
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

                    <h3 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] transition duration-500 group-hover:translate-x-1 md:text-6xl">
                      {gallery.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                      {gallery.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Voir la galerie
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PhotoTransition
  image="/images/horizontal2.webp"
  label="Photo de transition autour du nautisme et du récit de terrain"
/>

      <section id="domaines" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="overflow-hidden rounded-[2.75rem] bg-stone-950 text-white">
              <div className="grid md:grid-cols-[0.44fr_0.56fr]">
                <div className="relative min-h-[420px] overflow-hidden md:min-h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTerrain.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeTerrain.image}
                        alt={activeTerrain.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 44vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                      Terrains de jeu
                    </p>

                    <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
                      Des univers différents. Une même approche.
                    </h2>
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {terrainItems.map((item) => (
                    <div
                      key={item.title}
                      onMouseEnter={() => setActiveTerrain(item)}
                      className="group px-8 py-8 transition duration-300 hover:bg-white/[0.04] md:px-12"
                    >
                      <div className="flex items-start gap-6">
                        <span className="mt-2 text-xs font-semibold tracking-[0.3em] text-[#e26a2c]">
                          {item.number}
                        </span>

                        <div>
                          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white transition duration-300 group-hover:translate-x-2 md:text-4xl">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-base leading-7 text-white/50">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="qui-suis-je" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-[0.44fr_0.56fr] md:items-stretch">
              <div className="relative overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10">
                <div className="relative min-h-[540px] md:min-h-full">
                  <Image
                    src="/images/moi.webp"
                    alt="Portrait d’Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne"
                    fill
                    sizes="(max-width: 768px) 100vw, 44vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-950 shadow-sm backdrop-blur-md md:left-8 md:top-8">
                    Concarneau · Bretagne
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                      Alexis Yvonnou
                    </p>

                    <p className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
                      Sur le terrain, avant d’être derrière l’écran.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.75rem] bg-stone-950 p-8 text-white shadow-xl shadow-stone-900/10 md:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e26a2c]/20 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                    Qui suis-je ?
                  </p>

                  <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                    Comprendre le terrain. Capter le vrai. Construire le récit.
                  </h2>

                  <div className="mt-10 grid gap-6 text-lg leading-9 text-white/70">
                    <p>
                      Basé à Concarneau, je travaille comme photographe et créateur de contenus
                      auprès de marques, d’événements, de sportifs et d’entreprises qui ont besoin
                      d’images fortes, utiles et sincères.
                    </p>

                    <p>
                      Mon univers s’est construit autour du nautisme, du sport et des récits de
                      terrain. La photographie reste mon point de départ, mais elle s’inscrit dans
                      une approche plus large : contenus digitaux, réseaux sociaux, storytelling,
                      sites internet et communication visuelle.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {["Comprendre", "Capter", "Diffuser"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/a-propos"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      En savoir plus
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
          <div className="grid md:grid-cols-[0.46fr_0.54fr]">
            <div className="relative overflow-hidden p-8 md:p-12">
              <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#e26a2c]/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                  Contact
                </p>

                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
                  Vous avez un projet à raconter ?
                </h2>

                <p className="mt-7 max-w-md text-base leading-8 text-white/62 md:text-lg">
                  Photo, contenus, réseaux sociaux ou site internet : un échange
                  suffit pour poser le contexte.
                </p>

                <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                  {[
                    ["Mail", "alexisyvonnou@hotmail.fr", "mailto:alexisyvonnou@hotmail.fr"],
                    ["Téléphone", "06 02 37 93 18", "tel:+33602379318"],
                    ["Instagram", "@alexis_yvonnou", "https://www.instagram.com/alexis_yvonnou"],
                    ["LinkedIn", "Alexis Yvonnou", "https://www.linkedin.com/in/alexis-yvonnou/"],
                  ].map(([label, value, href]) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-6 py-4"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                        {label}
                      </span>

                      <span className="text-right text-base font-semibold text-white/72 transition duration-300 group-hover:translate-x-1 group-hover:text-white">
                        {value}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/45">
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    Concarneau · Bretagne
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    Déplacements possibles
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2">
                    Photo · contenus · communication
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f3ef] p-8 text-stone-950 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Me contacter
              </p>

              <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Dites-moi simplement où vous en êtes.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
                Le projet, le contexte, la date, le lieu, les besoins déjà identifiés :
                quelques lignes suffisent pour démarrer l’échange.
              </p>

              <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-stone-900/10 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 right-5 z-40"
          >
            <Link
              href="#top"
              scroll={false}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white shadow-2xl shadow-stone-900/20 transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
            >
              <ChevronUp size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}