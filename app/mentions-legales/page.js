export const metadata = {
  title: "Mentions légales | Alexis Yvonnou",
  description: "Mentions légales du site alexisyvonnou.com",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] px-5 py-32 text-stone-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Informations
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Mentions légales
        </h1>

        <div className="mt-16 space-y-12 text-stone-700">
          <section>
            <h2 className="text-2xl font-semibold text-stone-950">
              Éditeur du site
            </h2>

            <div className="mt-5 space-y-2 leading-8">
              <p>Alexis Yvonnou</p>
              <p>Auto-entrepreneur</p>
              <p>SIRET : 94238690500015</p>
              <p>Email : alexisyvonnou@hotmail.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-950">
              Hébergement
            </h2>

            <div className="mt-5 space-y-2 leading-8">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723</p>
              <p>États-Unis</p>
              <p>https://vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-950">
              Propriété intellectuelle
            </h2>

            <p className="mt-5 leading-8">
              L’ensemble des contenus présents sur ce site (photographies,
              textes, vidéos, éléments graphiques, identité visuelle) sont
              protégés par le droit d’auteur et restent la propriété exclusive
              d’Alexis Yvonnou sauf mention contraire.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}