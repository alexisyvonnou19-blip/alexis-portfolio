import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "À propos — Photographe & créateur de contenus à Concarneau",
  description:
    "Découvrez le parcours d’Alexis Yvonnou, photographe et créateur de contenus basé à Concarneau en Bretagne.",
};

const experiences = [
  "Tip & Shaft",
  "OC Sport",
  "Studio K37",
  "Solo Guy Cotten",
  "Good Boats",
  "PL Yachting",
  "Ino-Rope",
  "EFTM",
  "SNIP Yachting",
  "Trampoline Park",
];

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-950">
      <section className="page-offset px-5 pb-20 md:px-8 md:pb-28">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[3.2rem] bg-[#0b0b0a] text-white shadow-2xl shadow-stone-900/20">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(226,106,44,0.18),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.08),transparent_32%)]" />

      <div className="relative z-10 grid gap-10 p-7 md:grid-cols-[0.56fr_0.44fr] md:p-10 lg:p-14">
        <div className="flex min-h-[640px] flex-col justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
              À propos
            </p>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.86] tracking-[-0.075em] md:text-8xl lg:text-[7.7rem]">
              Un regard de terrain.
            </h1>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-white/72 md:text-2xl">
              Photographe et créateur de contenus basé à Concarneau, je raconte
              les projets par ce qu’ils ont de vivant : le terrain, les gestes,
              les visages et les instants.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Nautisme", "Sport", "Événementiel", "Outdoor"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/70 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-end">
          <div className="relative h-[640px] w-full overflow-hidden rounded-[2.6rem] bg-stone-900 shadow-2xl shadow-black/30">
            <Image
              src="/images/moi4.webp"
              alt="Alexis Yvonnou"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 44vw"
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />

            <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 shadow-xl">
              Alexis Yvonnou
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 z-20 hidden max-w-[480px] rounded-[2rem] border border-white/10 bg-white p-7 text-stone-950 shadow-2xl shadow-black/30 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e26a2c]">
            Depuis le terrain
          </p>

          <p className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.05em]">
            Observer, comprendre, raconter.
          </p>

          <p className="mt-5 text-base leading-7 text-stone-600">
            Des images pensées pour donner du relief à une histoire, une équipe,
            un événement ou un savoir-faire.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.48fr_0.52fr] md:items-center">
          <div className="relative">
            <div className="premium-image">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/moi2.webp"
                  alt="Alexis Yvonnou sur le terrain"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-stone-950">
                Alexis Yvonnou
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">
                Photographe & créateur de contenus
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
              Mon approche
            </p>

            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Photographier ce qui se passe autour de l’action.
            </h2>

            <div className="mt-9 space-y-6 text-lg leading-9 text-stone-700">
              <p>
                Mon parcours s’est construit entre communication, événementiel
                sportif et création de contenus. Avant la photographie, il y a eu
                des expériences en logistique, en marketing sportif, en gestion
                de projets et en communication.
              </p>

              <p>
                Aujourd’hui, cette polyvalence me permet de comprendre les besoins
                d’un projet dans son ensemble : les images bien sûr, mais aussi
                leur usage, leur diffusion et ce qu’elles doivent transmettre.
              </p>

              <p>
                J’aime les univers vivants : les événements, les ambiances
                sportives, les regards, les détails, les moments de tension ou
                les instants plus calmes qui racontent quelque chose de vrai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 md:grid-cols-[0.58fr_0.42fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e26a2c]">
                Expériences & collaborations
              </p>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Des projets entre événementiel, sport et communication.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-stone-600">
              Au fil des années, j’ai travaillé auprès d’événements, de médias,
              de marques et de projets liés au sport et au nautisme, en photo,
              communication ou événementiel.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {experiences.map((experience) => (
              <span
                key={experience}
                className="rounded-full border border-stone-300 bg-white/60 px-5 py-3 text-sm text-stone-700 transition hover:border-stone-950 hover:bg-white"
              >
                {experience}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[0.42fr_0.58fr]">
            <div className="premium-image">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/marex.webp"
                  alt="Projet nautique"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="premium-image">
              <div className="relative aspect-[16/10] h-full min-h-[420px] w-full">
                <Image
                  src="/images/svr.webp"
                  alt="Univers sportif et événementiel"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20">
            <Image
              src="/images/moi4.webp"
              alt="Alexis Yvonnou photographe et créateur de contenus"
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
                  href="/photographie"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white"
                >
                  Voir les galeries
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