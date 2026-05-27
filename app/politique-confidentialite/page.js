export const metadata = {
  title: "Politique de confidentialité | Alexis Yvonnou",
  description: "Politique de confidentialité du site alexisyvonnou.com",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] px-5 py-32 text-stone-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Confidentialité
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Politique de confidentialité
        </h1>

        <div className="mt-16 space-y-8 text-stone-700 leading-8">
          <p>
            Les informations transmises via le formulaire de contact sont
            utilisées uniquement afin de répondre aux demandes envoyées via le
            site.
          </p>

          <p>
            Aucune donnée personnelle n’est vendue, cédée ou utilisée à des
            fins commerciales.
          </p>

          <p>
            Les données envoyées via le formulaire de contact sont transmises
            via Formspree.
          </p>

          <p>
            Vous pouvez demander la suppression de vos données à tout moment en
            écrivant à :
            <br />
            alexisyvonnou@hotmail.fr
          </p>
        </div>
      </div>
    </main>
  );
}