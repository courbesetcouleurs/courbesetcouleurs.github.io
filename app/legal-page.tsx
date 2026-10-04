import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="legalPage">
      <header className="legalNav shell">
        <a className="brand" href="/">
          <img src="/monogramme.png" alt="" />
          <span>
            Courbes <i>&</i> Couleurs<small>Graphic designer</small>
          </span>
        </a>
        <a href="/">Retour au site</a>
      </header>
      <section className="legalHero shell">
        <p className="eyebrow">Informations légales</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <article className="legalContent shell">{children}</article>
      <footer className="legalFooter">
        <div className="shell">
          <span>© 2026 Courbes & Couleurs</span>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgv">CGV</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
      </footer>
    </main>
  );
}

export function ToComplete({ children }: { children: ReactNode }) {
  return <span className="toComplete">À compléter : {children}</span>;
}
