"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "./components/ContactForm";

const services = [
  {
    number: "01",
    title: "Structurer votre présence",
    label: "Réseaux sociaux",
    text: "Définir une ligne éditoriale claire, organiser les prises de parole et construire une communication régulière.",
  },
  {
    number: "02",
    title: "Créer les bons contenus",
    label: "Photo · vidéo · formats courts",
    text: "Produire des images, réels, carrousels et contenus pensés pour capter l’attention et valoriser votre savoir-faire.",
  },
  {
    number: "03",
    title: "Construire votre vitrine",
    label: "Site internet",
    text: "Créer un site clair, crédible et bien fini pour présenter votre activité au-delà des réseaux sociaux.",
  },
  {
    number: "04",
    title: "Donner une direction claire",
    label: "Identité visuelle",
    text: "Poser une direction graphique cohérente pour rendre votre projet plus reconnaissable et professionnel.",
  },
];

const projects = [
  {
    name: "Didier Yvonnou",
    context: "Repositionnement d’un univers personnel autour du retour à soi.",
    mission: "Site internet · identité visuelle · direction éditoriale",
    image: "/images/didier.webp",
  },
  {
    name: "PL Yachting",
    context: "Valorisation d’une activité nautique entre bateaux, chantiers et expertise terrain.",
    mission: "Photo · contenus · réseaux sociaux",
    image: "/images/pl-yachting.webp",
  },
  {
    name: "Good Boats",
    context: "Création de contenus nautiques pour rendre les bateaux et les usages plus visibles.",
    mission: "Formats courts · communication digitale · storytelling",
    image: "/images/good-boats.webp",
  },
  {
    name: "SNIP Yachting",
    context: "Animation éditoriale autour de marques, bateaux, refits et actualités nautiques.",
    mission: "Réseaux sociaux · contenus · présence de marque",
    image: "/images/snip-yachting.webp",
  },
];

const photoEntries = [
  {
    title: "Action",
    text: "Sport, mer, mouvement, effort : des images qui donnent du rythme au récit.",
    image: "/images/hometrail5.webp",
    href: "/photographie/trail",
  },
  {
    title: "Présence humaine",
    text: "Portraits, métiers, coulisses : rendre visibles les personnes derrière les projets.",
    image: "/images/portrait2.webp",
    href: "/photographie/portraits",
  },
  {
    title: "Terrain maritime",
    text: "Course au large, pontons, bateaux, départs et retours : un univers que je connais de l’intérieur.",
    image: "/images/homecal5.webp",
    href: "/photographie/course-au-large",
  },
];

const domains = ["Nautisme", "Sport", "Outdoor", "Événementiel", "Artisanat"];

function Button({ children, href = "#contact", variant = "dark" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5";

  const styles = {
    dark: "bg-stone-950 text-white hover:bg-stone-800",
    light: "bg-white text-stone-950 hover:bg-stone-100",
    outline:
      "border border-stone-300 text-stone-950 hover:border-stone-950 hover:bg-white",
    outlineDark:
      "border border-white/20 text-white hover:border-white hover:bg-white hover:text-stone-950",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export default function AlexisYvonnouHomepage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, -40]);
  const heroScale = useTransform(scrollY, [0, 900], [1, 1.06]);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden px-5 pt-24 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          >
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
                Alexis Yvonnou · Concarneau
              </p>

              <h1 className="max-w-5xl text-6xl font-semibold leading-[0.86] tracking-[-0.07em] md:text-8xl lg:text-[8.7rem]">
                Images, contenus & communication de terrain.
              </h1>
            </div>

            <div className="max-w-xl lg:pb-4">
              <p className="text-2xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
                J’aide les entreprises, marques et événements à rendre leur projet plus visible, plus clair et plus mémorable.
              </p>

              <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
                Photographie, création de contenus, réseaux sociaux, site internet et identité visuelle — avec une approche indépendante, directe et ancrée dans le réel.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#projets">Voir les projets</Button>
                <Button href="#services" variant="outline">Mes services</Button>
              </div>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[3rem] bg-stone-950 shadow-[0_35px_120px_rgba(28,25,23,0.16)] md:min-h-[660px]">
              <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
                <Image
                  src="/images/hero5.webp"
                  alt="Photographie terrain par Alexis Yvonnou"
                  fill
                  priority
                  quality={88}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/85 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-stone-950 backdrop-blur-md md:left-8 md:top-8">
                Photo · contenus · digital
              </div>

              <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                <p className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                  Comprendre le terrain. Produire les bons contenus. Construire une présence.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2.5rem] bg-stone-950 p-8 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                  Positionnement
                </p>
                <p className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Pas une agence. Un profil hybride, créatif, autonome et proche du terrain.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-stone-300/70 bg-white/55 p-8 backdrop-blur md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Univers
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <span
                      key={domain}
                      className="rounded-full border border-stone-300 bg-[#f7f4ef] px-4 py-2 text-sm font-medium"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-y border-stone-300 py-12 md:py-16">
            <p className="max-w-6xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Je ne viens pas d’un bureau de communication. Je viens des pontons, des événements, des terrains de sport, des ateliers et des projets qui bougent.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#0b0b0a] px-5 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Services
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                De l’image à la diffusion.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-white/62">
              J’interviens là où votre communication a besoin de clarté : stratégie éditoriale, contenus, réseaux sociaux, site internet ou identité visuelle.
            </p>
          </div>

          <div className="border-y border-white/10">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-6 border-b border-white/10 py-9 last:border-b-0 md:grid-cols-[0.12fr_0.36fr_0.18fr_0.34fr] md:items-center md:py-12"
              >
                <p className="text-sm font-semibold tracking-[0.3em] text-[#e26a2c]">
                  {service.number}
                </p>

                <h3 className="text-4xl font-semibold tracking-[-0.05em] transition duration-500 group-hover:translate-x-2 md:text-6xl">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                  {service.label}
                </p>

                <p className="max-w-xl text-base leading-8 text-white/58 md:text-lg">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/creation-de-contenus" variant="outlineDark">
              Découvrir mes services
            </Button>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.62fr_0.38fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Réalisations
              </p>

              <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Des projets accompagnés, pas seulement des images.
              </h2>
            </div>

            <p className="text-lg leading-9 text-stone-600">
              Chaque projet est pensé comme un ensemble : comprendre le contexte, produire les bons contenus, structurer la présence et rendre le résultat lisible.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`group grid overflow-hidden rounded-[2.75rem] bg-stone-950 text-white shadow-xl shadow-stone-900/10 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[360px] md:min-h-[500px]">
                  <Image
                    src={project.image}
                    alt={`${project.name} - projet accompagné par Alexis Yvonnou`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-85 transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e26a2c]">
                      Projet accompagné
                    </p>

                    <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                      {project.name}
                    </h3>
                  </div>

                  <div className="mt-14 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Contexte
                      </p>
                      <p className="mt-4 text-base leading-8 text-white/70">
                        {project.context}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Mission
                      </p>
                      <p className="mt-4 text-base leading-8 text-white/70">
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

      {/* PHOTO */}
      <section id="photographie" className="bg-[#ede6da] px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.55fr_0.45fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Photographie
              </p>

              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                La photo reste mon point d’entrée.
              </h2>
            </div>

            <p className="text-lg leading-9 text-stone-600">
              Avant les réseaux, les sites et les identités, il y a une chose essentielle : produire des images justes, incarnées et utiles.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {photoEntries.map((entry, index) => (
              <Link
                href={entry.href}
                key={entry.title}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-stone-950 shadow-xl shadow-stone-900/10 ${
                  index === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 transition duration-1000 group-hover:scale-[1.05] group-hover:opacity-70"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-8">
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {entry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                    {entry.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/photographie" variant="dark">
              Voir les séries photo
            </Button>
          </div>
        </div>
      </section>

      {/* QUI SUIS-JE */}
      <section id="qui-suis-je" className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.46fr_0.54fr] md:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.75rem] shadow-xl shadow-stone-900/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/moi.webp"
                  alt="Portrait d’Alexis Yvonnou"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-lg md:-right-6 md:left-auto">
              <p className="text-sm font-semibold text-stone-950">
                Alexis Yvonnou
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Photographe · créateur de contenus · Bretagne
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              Profil
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Un indépendant polyvalent, avec une vraie culture terrain.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-9 text-stone-700">
              <p>
                Basé à Concarneau, j’accompagne des entreprises, marques, événements et projets de terrain dans leur communication visuelle et digitale.
              </p>

              <p>
                Mon approche repose sur un équilibre simple : comprendre vite les enjeux, produire des contenus justes, puis les diffuser avec cohérence.
              </p>

              <p>
                La photographie reste centrale, mais elle s’inscrit aujourd’hui dans une démarche plus large : rendre un projet visible, lisible et identifiable.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Comprendre", "Produire", "Diffuser"].map((item) => (
                <div key={item} className="rounded-3xl border border-stone-300 bg-white/45 p-5">
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/a-propos" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UNIVERS */}
      <section id="domaines" className="bg-stone-950 px-5 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Terrains de jeu
          </p>

          <h2 className="max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Des univers où l’image doit être vraie, lisible et vivante.
          </h2>

          <div className="mt-16 border-y border-white/10">
            {domains.map((domain, index) => (
              <div
                key={domain}
                className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[0.15fr_0.45fr_0.4fr] md:items-center"
              >
                <p className="text-sm font-semibold tracking-[0.3em] text-[#e26a2c]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                  {domain}
                </h3>

                <p className="text-base leading-8 text-white/55 md:text-lg">
                  Comprendre les codes, les contraintes, les moments importants et les images qui peuvent vraiment servir le projet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
          <div className="grid md:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between p-8 md:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
                  Contact
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  Vous avez un projet à rendre visible ?
                </h2>

                <p className="mt-10 max-w-md text-lg leading-9 text-white/65">
                  Parlez-moi de votre activité, de votre contexte et de ce que vous souhaitez améliorer. On verra rapidement ce qui peut être pertinent.
                </p>
              </div>

              <div className="mt-12 grid gap-3 text-sm text-white/75">
                <a href="mailto:alexisyvonnou@hotmail.fr" className="transition hover:text-white">
                  alexisyvonnou@hotmail.fr
                </a>
                <a href="tel:+33602379318" className="transition hover:text-white">
                  06 02 37 93 18
                </a>
                <a href="https://www.instagram.com/alexis_yvonnou" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Instagram · @alexis_yvonnou
                </a>
                <a href="https://www.linkedin.com/in/alexis-yvonnou/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  LinkedIn · Alexis Yvonnou
                </a>
              </div>

              <div className="mt-14 grid gap-3 text-sm text-white/45">
                <p>Basé à Concarneau, en Bretagne</p>
                <p>Déplacements possibles en France</p>
                <p>Photo · contenus · réseaux sociaux · site internet</p>
              </div>
            </div>

            <div className="bg-white p-8 text-stone-950 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Me contacter
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Un message suffit pour commencer.
              </h3>

              <p className="mt-5 text-lg leading-8 text-stone-600">
                Expliquez simplement votre projet, vos besoins, la date et le lieu si vous les connaissez déjà.
              </p>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link
        href="#top"
        scroll={false}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white shadow-2xl shadow-stone-900/20 transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
      >
        <ChevronUp size={18} />
      </Link>
    </main>
  );
}