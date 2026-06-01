import Link from "next/link";
import { Mail, Camera, LinkIcon } from "lucide-react";

const navigationLinks = [
  { label: "Qui suis-je ?", href: "/#qui-suis-je" },
  { label: "Photographie", href: "/#photographie" },
  { label: "Création de contenus", href: "/#contenus" },
  { label: "Terrains de jeu", href: "/#domaines" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 px-5 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
              Alexis Yvonnou
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Disponible pour vos projets photo, contenus & récits visuels.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/55 md:text-lg">
              Photographe & créateur de contenus en Bretagne. Sport, nautisme,
              outdoor, événementiel et artisanat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:alexisyvonnou@hotmail.fr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5 hover:bg-stone-200"
              >
                <Mail size={16} />
                Écrire un mail
              </a>

              <a
                href="https://www.instagram.com/alexis_yvonnou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <Camera size={16} />
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/alexis-yvonnou/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <LinkIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Navigation</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/#contact" scroll={false} className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Galeries & pages</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <Link href="/a-propos" scroll={false} className="transition hover:text-white">
                À propos
              </Link>

              <Link
                href="/creation-de-contenus"
                scroll={false}
                className="transition hover:text-white"
              >
                Création de contenus
              </Link>

              <Link href="/photographie/portraits" scroll={false} className="transition hover:text-white">
                Portraits
              </Link>

              <Link
                href="/photographie/nature-paysage-architecture"
                scroll={false}
                className="transition hover:text-white"
              >
                Nature & architecture
              </Link>

              <Link
                href="/photographie/course-au-large"
                scroll={false}
                className="transition hover:text-white"
              >
                Course au large
              </Link>

              <Link href="/photographie/surf" scroll={false} className="transition hover:text-white">
                Surf
              </Link>

              <Link href="/photographie/wing-foil" scroll={false} className="transition hover:text-white">
                Wing Foil
              </Link>

              <Link href="/photographie/trail" scroll={false} className="transition hover:text-white">
                Trail
              </Link>

              <Link
                href="/photographie/retour-charlie-dalin-vendee-globe-24-25"
                scroll={false}
                className="transition hover:text-white"
              >
                Retour Charlie Dalin
              </Link>

              <Link href="/photographie/mini-650" scroll={false} className="transition hover:text-white">
                Banque images Mini 6.50
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alexis Yvonnou</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/35">
  <Link href="/mentions-legales" scroll={false} className="transition hover:text-white">
    Mentions légales
  </Link>

  <Link href="/politique-confidentialite" scroll={false} className="transition hover:text-white">
    Politique de confidentialité
  </Link>
</div>
          <p>Bretagne · Nautisme · Sport · Outdoor · Artisanat</p>
        </div>
      </div>
    </footer>
  );
}