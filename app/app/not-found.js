import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f4ef] px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          404
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
          Cette page n’existe pas.
        </h1>

        <p className="mt-6 text-lg leading-8 text-stone-600">
          Le contenu que vous recherchez est introuvable ou a été déplacé.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}