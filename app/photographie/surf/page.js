"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const getPhoto = (num) => `/images/photos/surf/${num}.webp`;

const gallery = [
  1, 2, 3, 5, 6, 7, 8, 9, 10, 4, 11, 13, 12, 27, 28, 21, 18, 26, 22, 23,
  25, 24, 15, 29, 30,
];

export default function SurfPage() {
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
    <button
      type="button"
      onClick={() => openImage(num)}
      className={`gallery-mobile-card relative block w-full overflow-hidden rounded-2xl bg-stone-200 text-left ${ratio}`}
    >
      <Image
        src={getPhoto(num)}
        alt={`Surf - photo ${num} par Alexis Yvonnou`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-300 hover:brightness-90"
      />
    </button>
  );

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <section className="gallery-mobile-hero relative h-[82vh] min-h-[560px] w-full overflow-hidden">
        <button type="button" onClick={() => openImage(3)} className="relative h-full w-full">
          <Image
            src={getPhoto(3)}
            alt="Surf - photographie Alexis Yvonnou"
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
            Surf
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            L’énergie de l’océan, le mouvement et les instants suspendus entre puissance et équilibre.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Galerie
            </p>
            <h2 className="gallery-mobile-intro-title mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Une série entre puissance, équilibre et mouvement.
            </h2>
            <p className="mt-6 text-lg leading-9 text-stone-600">
              Des images de glisse, de concentration et d’océan, où chaque vague devient un instant à saisir.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-mobile-section px-5 pb-24 md:px-8">
        <div className="gallery-mobile-spacing mx-auto max-w-7xl space-y-6">
          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={1} />
            <GalleryImage num={2} />
          </div>

          <GalleryImage num={3} ratio="aspect-[3/2]" />

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={5} />
            <GalleryImage num={6} />
            <GalleryImage num={7} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={8} />
            <GalleryImage num={9} />
            <GalleryImage num={10} />
          </div>

          <GalleryImage num={4} ratio="aspect-[3/2]" />

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={11} />
            <GalleryImage num={13} />
            <GalleryImage num={12} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={27} />
            <GalleryImage num={28} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={21} />
            <GalleryImage num={18} />
            <GalleryImage num={26} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={22} />
            <GalleryImage num={23} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-3">
            <GalleryImage num={25} />
            <GalleryImage num={24} />
            <GalleryImage num={15} />
          </div>

          <div className="gallery-mobile-spacing grid grid-cols-1 gap-6 md:grid-cols-2">
            <GalleryImage num={29} />
            <GalleryImage num={30} />
          </div>
        </div>
      </section>

      <section className="gallery-mobile-section px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Link
            href="/photographie/course-au-large"
            className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              Galerie précédente
            </p>
            <h3 className="text-3xl font-semibold tracking-tight">
              Course au large
            </h3>
            <p className="mt-4 text-stone-500 group-hover:text-stone-700">
              ← Voir la galerie
            </p>
          </Link>

          <Link
            href="/photographie/wing-foil"
            className="group rounded-[2rem] bg-stone-950 p-7 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Galerie suivante
            </p>
            <h3 className="text-3xl font-semibold tracking-tight">Wing Foil</h3>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 text-white"
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
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-5 top-5 z-50 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md hover:bg-white/20"
            >
              Fermer
            </button>

            <button
              type="button"
              onClick={previousImage}
              className="absolute left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-full bg-white/10 px-5 py-4 text-3xl backdrop-blur-md hover:bg-white/20 md:block"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-full bg-white/10 px-5 py-4 text-3xl backdrop-blur-md hover:bg-white/20 md:block"
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
                className="relative h-[90vh] w-[92vw]"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Image
                  src={activePhoto}
                  alt="Photo en plein écran"
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </motion.div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur-md">
                {activeIndex + 1} / {gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}