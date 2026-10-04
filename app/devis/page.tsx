import type { Metadata } from "next";
import QuoteForm from "./quote-form";
export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Décrivez votre projet d’identité visuelle ou de stratégie de marque. Réponse personnalisée sous deux jours ouvrés.",
  alternates: { canonical: "/devis" },
};
export default function QuotePage() {
  return (
    <main className="quotePage">
      <header className="quoteNav shell">
        <a className="brand" href="/">
          <img src="/monogramme.png" alt="" />
          <span>
            Courbes <i>&</i> Couleurs<small>Graphic designer</small>
          </span>
        </a>
        <a href="/">Retour au site</a>
      </header>
      <section className="quoteLayout shell">
        <div className="quoteIntro">
          <p className="eyebrow">Parlons de votre projet</p>
          <h1>
            Créons une marque qui vous ressemble <em>vraiment.</em>
          </h1>
          <p>
            Ce questionnaire me permet de comprendre votre besoin avant notre
            premier échange. Comptez environ cinq minutes.
          </p>
          <div className="quoteReassurance">
            <div>
              <b>5 min</b>
              <span>pour poser les bases</span>
            </div>
            <div>
              <b>48 h</b>
              <span>pour recevoir ma réponse</span>
            </div>
            <div>
              <b>100 %</b>
              <span>personnalisé</span>
            </div>
          </div>
        </div>
        <QuoteForm />
      </section>
      <footer className="quoteFooter shell">
        <span>© 2026 Courbes & Couleurs</span>
        <a href="mailto:Courbesetcouleurs@proton.me">
          Courbesetcouleurs@proton.me
        </a>
      </footer>
    </main>
  );
}
