import Link from "next/link";
import { Mail, Camera, LinkIcon, ArrowRight } from "lucide-react";

const navigationLinks = [
  { label: "Qui suis-je ?", href: "/#qui-suis-je" },
  { label: "Photographie", href: "/#photographie" },
  { label: "Création de contenus", href: "/#contenus" },
  { label: "Terrains de jeu", href: "/#domaines" },
  { label: "Contact", href: "/#contact" },
];

const galleryLinks = [
  { label: "Portraits", href: "/photographie/portraits" },
  { label: "Nature & architecture", href: "/photographie/nature-paysage-architecture" },
  { label: "Course au large", href: "/photographie/course-au-large" },
  { label: "Surf", href: "/photographie/surf" },
  { label: "Wing Foil", href: "/photographie/wing-foil" },
  { label: "Trail", href: "/photographie/trail" },
  { label: "Retour Charlie Dalin", href: "/photographie/retour-charlie-dalin-vendee-globe-24-25" },
  { label: "Banque images Mini 6.50", href: "/photographie/mini-650" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 px-5 pt-20 text-white md:px-8 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e26a2c]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Alexis Yvonnou
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
                Des images.
                <br />
                Des contenus.
                <br />
                Du terrain.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-9 text-white/60">
                Photographe & créateur de contenus basé à Concarneau. J’accompagne
                les projets qui ont besoin d’être mieux vus, mieux compris et
                mieux racontés.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:alexisyvonnou@hotmail.fr"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Écrire un mail
                  <ArrowRight
                    size={16}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://www.instagram.com/alexis_yvonnou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#e26a2c]/70 hover:text-white"
                >
                  <Camera size={16} />
                  Instagram
                </a>

                <a
                  href="https://www.linkedin.com/in/alexis-yvonnou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#e26a2c]/70 hover:text-white"
                >
                  <LinkIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-[0.9fr_0.7fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Localisation
            </p>

            <div className="mt-5 space-y-3 text-sm leading-7 text-white/55">
              <p>Concarneau · Bretagne</p>
              <p>Déplacements possibles en France</p>
              <p>Photo · contenus · communication digitale</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Galeries
            </p>

            <div className="mt-5 grid gap-x-8 gap-y-3 text-sm text-white/55 sm:grid-cols-2">
              {galleryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/a-propos"
                className="w-fit transition duration-300 hover:translate-x-1 hover:text-white"
              >
                À propos
              </Link>

              <Link
                href="/creation-de-contenus"
                className="w-fit transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Création de contenus
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-sm text-white/38 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alexis Yvonnou</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="transition hover:text-white">
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="transition hover:text-white"
            >
              Politique de confidentialité
            </Link>
          </div>

          <p>Bretagne · Nautisme · Sport · Outdoor</p>
        </div>
      </div>
    </footer>
  );
}