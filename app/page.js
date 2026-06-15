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
      

     <section id="top" className="px-4 pt-8 md:px-8 md:pt-28">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] bg-stone-950 shadow-[0_35px_120px_rgba(28,25,23,0.18)] md:rounded-[3rem]"
    >
      <div className="relative min-h-[650px] overflow-hidden md:min-h-[700px]">
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
            quality={75}
            sizes="100vw"
            className="object-cover object-center md:object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/16 to-transparent" />

        <div className="absolute left-5 top-5 z-10 hidden rounded-full bg-white/90 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-stone-950 shadow-sm backdrop-blur-md md:block">
          Alexis Yvonnou
        </div>

        <div className="absolute right-8 top-8 z-10 hidden rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur-md md:block">
          Concarneau · Bretagne
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white md:p-12 lg:p-14">
          <div className="grid gap-8 md:grid-cols-[0.64fr_0.36fr] md:items-end">
            <div>
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/55 md:mb-5 md:text-xs md:tracking-[0.34em]">
                Photographie · communication
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[6.6rem]">
                Raconter
                <br />
                le terrain.
              </h1>

              <p className="mt-5 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] text-white/88 md:mt-7 md:text-4xl">
                Un regard de terrain pour raconter ce qui compte.
              </p>
            </div>

            <div className="max-w-md md:translate-y-8">
              <p className="text-base leading-7 text-white/72 md:text-lg md:leading-8">
                Photographie, création de contenus et communication pour les entreprises, marques et événements.
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

          <div className="mt-7 flex flex-wrap gap-2 md:mt-14 md:gap-3">
            {["Nautisme", "Sport", "Outdoor", "Événementiel", "Artisanat"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/85 backdrop-blur-md md:px-4"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section id="services" className="bg-[#0b0b0a] px-5 py-28 text-white md:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 grid gap-10 md:grid-cols-[0.5fr_0.5fr] md:items-end">
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

    <div className="grid gap-5 md:grid-cols-2">
      {[
        {
          title: "Photographie",
          subtitle: "Images de terrain",
          text: "Reportages, portraits, événements, sport, nautisme et savoir-faire : produire des images fortes, utiles et sincères.",
          image: "/images/1.webp",
        },
        {
          title: "Création de contenus",
          subtitle: "Savoir-faire & storytelling",
          text: "Réels, stories, carrousels, posts : contenus pensés pour donner du rythme à votre présence digitale.",
          image: "/images/crea2.webp",
        },
        {
          title: "Réseaux sociaux",
          subtitle: "Ligne éditoriale & diffusion",
          text: "Structurer les prises de parole, organiser les contenus et faire vivre vos réseaux avec cohérence et régularité.",
          image: "/images/homesite.webp",
        },
        {
          title: "Site & identité",
          subtitle: "Présence digitale",
          text: "Créer ou renforcer les supports qui donnent de la crédibilité à votre communication : site internet, identité visuelle et direction graphique.",
          image: "/images/service-web.webp",
        },
      ].map((service, index) => (
        <article
          key={service.title}
          className={`group relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-black/20 md:min-h-[520px] ${
            index === 0 || index === 3 ? "md:translate-y-10" : ""
          }`}
        >
          <Image
            src={service.image}
            alt={`${service.title} par Alexis Yvonnou`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-72 transition duration-700 group-hover:opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/28 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md md:left-8 md:top-8">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
              {service.subtitle}
            </p>

            <h3 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              {service.title}
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
              {service.text}
            </p>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-20">
      <Link
        href="/creation-de-contenus"
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
      >
        Découvrir mes services
        <ArrowRight size={16} />
      </Link>
    </div>
  </div>
</section>

      <section id="projets" className="px-5 py-28 md:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 grid gap-8 md:grid-cols-[0.6fr_0.4fr] md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
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

    <div className="grid gap-8">
      {[
        {
          name: "Didier Yvonnou",
          context:
            "Créer un univers personnel autour du développement humain, de la transmission et du retour à soi.",
          mission: [
            "Site internet",
            "Identité visuelle",
            "Accompagnement éditorial",
          ],
          image: "/images/didier.webp",
        },
        {
          name: "PL Yachting",
          context:
            "Valoriser l’expertise d’un professionnel du nautisme par le biais de ses projets.",
          mission: [
            "Photographie",
            "Création de contenus",
            "Réseaux sociaux",
          ],
          image: "/images/pl-yachting.webp",
        },
        {
          name: "Good Boats",
          context:
            "Développer la visibilité d’un média nautique à travers des contenus réguliers, clairs et incarnés.",
          mission: [
            "Création de contenus",
            "Communication digitale",
            "Gestion éditoriale",
          ],
          image: "/images/good-boats.webp",
        },
        {
          name: "SNIP Yachting",
          context:
            "Rendre plus visibles les bateaux, les marques distribuées et les refits.",
          mission: [
            "Animation réseaux sociaux",
            "Création de contenus",
            "Communication digitale",
          ],
          image: "/images/snip-yachting.webp",
        },
      ].map((project, index) => (
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
              alt={`${project.name} - projet accompagné par Alexis Yvonnou`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-85 transition duration-1000 group-hover:opacity-70"
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

      <section id="qui-suis-je" className="px-5 py-28 md:px-8">
  <div className="mx-auto max-w-7xl">
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
        <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
            Qui suis-je ?
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Comprendre le terrain. Capter le vrai. Construire le récit.
          </h2>

          <div className="mt-10 grid gap-6 text-lg leading-9 text-white/70">
            <p>
              Basé à Concarneau, je travaille comme photographe et créateur de contenus auprès de marques, d’événements, de sportifs et d’entreprises qui ont besoin d’images fortes, utiles et sincères.
            </p>

            <p>
              Mon univers s’est construit autour du nautisme, de la course au large et du sport : des environnements où il faut comprendre vite, bouger juste et capter les moments qui comptent.
            </p>

            <p>
              Aujourd’hui, la photographie reste mon point de départ, mais elle s’inscrit dans une approche plus large : contenus digitaux, réseaux sociaux, storytelling, sites internet et communication visuelle.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Comprendre", "Capter", "Diffuser"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md"
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