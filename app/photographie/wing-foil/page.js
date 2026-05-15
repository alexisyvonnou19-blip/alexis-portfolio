"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const getPhoto = (num) => `/images/photos/wing-foil/${num}.webp`;

const gallery = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const wingFoilStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://alexisyvonnou.com/photographie/wing-foil#gallery",
  name: "Wing Foil — Photographies d’Alexis Yvonnou",
  url: "https://alexisyvonnou.com/photographie/wing-foil",
  description:
    "Galerie photo dédiée au wing foil, à la glisse, à l’équilibre et au sport nautique par Alexis Yvonnou, photographe basé à Concarneau en Bretagne.",
  inLanguage: "fr-FR",
  creator: {
    "@type": "Person",
    "@id": "https://alexisyvonnou.com/#person",
    name: "Alexis Yvonnou",
    jobTitle: "Photographe et créateur de contenus",
    url: "https://alexisyvonnou.com",
  },
  about: [
    "Wing Foil",
    "Photographie de glisse",
    "Sport nautique",
    "Glisse",
    "Voile légère",
    "Océan",
    "Sport outdoor",
    "Photographie sportive",
    "Bretagne",
    "Concarneau",
    "Finistère",
  ],
  image: gallery.map((num) => ({
    "@type": "ImageObject",
    url: `https://alexisyvonnou.com${getPhoto(num)}`,
    name: `Photographie de wing foil ${num}`,
    caption:
      "Photographie de wing foil, de glisse et de sport nautique par Alexis Yvonnou.",
    creator: {
      "@id": "https://alexisyvonnou.com/#person",
    },
  })),
};

export default function WingFoilPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const activePhoto = activeIndex !== null ? getPhoto(gallery[activeIndex]) : null;

  const openImage = (num) => {
    setActiveIndex(gallery.indexOf(num));
  };

  const closeImage = () => setActiveIndex(null);

  const previousImage = (e) => {
    e?.stopPropagation();
    setActiveIndex((index) => (index === 0 ? gallery.length - 1 : index - 1));
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setActiveIndex((index) => (index === gallery.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  const GalleryImage = ({ num, ratio = "aspect-[2/3]" }) => (
    <motion.button
      type="button"
      onClick={() => openImage(num)}
      className={`gallery-mobile-card group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-stone-200 text-left ${ratio}`}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={getPhoto(num)}
        alt={`Wing Foil - photo ${num} par Alexis Yvonnou`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.018] group-hover:brightness-90"
      />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-950 backdrop-blur-md">
          Voir
        </div>
      </div>
    </motion.button>
  );

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(wingFoilStructuredData),
  }}
/>
      <section className="gallery-mobile-hero relative mt-[92px] h-[calc(82vh-92px)] min-h-[468px] w-full overflow-hidden">
        <button type="button" onClick={() => openImage(1)} className="relative h-full w-full cursor-zoom-in">
          <Image
            src={getPhoto(1)}
            alt="Wing Foil - photographie Alexis Yvonnou"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </button>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <div className="pointer-events-none absolute bottom-8 left-5 right-5 text-white md:bottom-12 md:left-10 md:right-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Photographie
          </p>
          <h1 className="gallery-mobile-title max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Wing Foil
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Une pratique aérienne et visuelle, entre glisse, vitesse, équilibre et légèreté.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Galerie
            </p>
            <h2 className="gallery-mobile-intro-title mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Entre envol, vitesse et équilibre.
            </h2>
            <p className="mt-6 text-lg leading-9 text-stone-600">
              Cette galerie rassemble des images de wing foil entre glisse, vitesse, équilibre et lumière. Une série pensée pour capter l’envol, le mouvement, les sensations et ces instants suspendus au-dessus de l’eau propres aux sports nautiques.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-mobile-section px-5 pb-24 md:px-8">
        <div className="gallery-mobile-spacing mx-auto max-w-7xl space-y-6">
          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={3} />
            <GalleryImage num={2} />
            <GalleryImage num={4} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={5} />
            <GalleryImage num={6} />
          </div>

          <GalleryImage num={7} ratio="aspect-[3/2]" />

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={8} />
            <GalleryImage num={9} />
            <GalleryImage num={10} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={11} />
            <GalleryImage num={12} />
          </div>
        </div>
      </section>

      <section className="gallery-mobile-section px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Link
            href="/photographie/surf"
            className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              Galerie précédente
            </p>
            <h3 className="text-3xl font-semibold tracking-tight">
              Surf
            </h3>
            <p className="mt-4 text-stone-500 group-hover:text-stone-700">
              ← Voir la galerie
            </p>
          </Link>

          <Link
            href="/photographie/trail"
            className="group rounded-[2rem] bg-stone-950 p-7 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Galerie suivante
            </p>
            <h3 className="text-3xl font-semibold tracking-tight">
              Trail
            </h3>
            <p className="mt-4 text-white/60 group-hover:text-white">
              Voir la galerie →
            </p>
          </Link>
        </div>
      </section>

      <section className="gallery-mobile-section px-5 pb-24 md:px-8">
        <div className="mx-auto flex max-w-7xl justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-4 text-sm font-medium text-stone-950 transition hover:border-stone-950 hover:bg-white"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && activePhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 text-white md:p-6"
            onClick={closeImage}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;

              const touchEnd = e.changedTouches[0].clientX;
              const distance = touchStart - touchEnd;

              if (distance > 50) nextImage(e);
              if (distance < -50) previousImage(e);

              setTouchStart(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="absolute left-4 top-4 z-50 rounded-full bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur-md md:left-6 md:top-6">
              {activeIndex + 1} / {gallery.length}
            </div>

            <button
              type="button"
              onClick={closeImage}
              className="absolute right-4 top-4 z-50 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/20 md:right-6 md:top-6"
            >
              Fermer
            </button>

            <button
              type="button"
              onClick={previousImage}
              className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl backdrop-blur-md transition hover:bg-white/20 md:left-6 md:h-14 md:w-14"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl backdrop-blur-md transition hover:bg-white/20 md:right-6 md:h-14 md:w-14"
            >
              ›
            </button>

            <motion.div
              className="relative flex h-full w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                key={activePhoto}
                className="relative h-[88vh] w-[94vw] md:h-[90vh] md:w-[92vw]"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Image
                  src={activePhoto}
                  alt="Photo en plein écran"
                  fill
                  sizes="94vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}