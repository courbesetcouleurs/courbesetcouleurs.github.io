import type { Metadata } from "next";
import { SiteFooter } from "../service-page";

export const metadata: Metadata = {
  title: "À propos de Cristina — Courbes & Couleurs",
  description: "Découvrez Cristina, graphiste spécialisée en identité visuelle et image de marque en Ariège, sa vision et sa méthode.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de Cristina — Courbes & Couleurs",
    description: "Graphiste spécialisée en identité visuelle et image de marque en Ariège.",
    url: "/a-propos",
    images: [{ url: "/cristina-portrait.webp", alt: "Cristina, graphiste et fondatrice de Courbes & Couleurs" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cristina",
  jobTitle: "Graphiste spécialisée en identité visuelle et image de marque",
  worksFor: { "@type": "ProfessionalService", name: "Courbes & Couleurs" },
  url: "https://courbesetcouleurs.github.io/a-propos",
  image: "https://courbesetcouleurs.github.io/cristina-portrait.webp",
  address: { "@type": "PostalAddress", addressRegion: "Ariège", addressCountry: "FR" },
};

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <header className="nav">
        <div className="shell navInner">
          <a className="brand" href="/" aria-label="Courbes & Couleurs, accueil">
            <img src="/monogramme.png" alt="" />
            <span>Courbes <i>&</i> Couleurs<small>Design de marque</small></span>
          </a>
          <nav aria-label="Navigation principale">
            <a href="/a-propos" aria-current="page">À propos</a>
            <a href="/#expertises">Expertises</a>
            <a href="/#portfolio">Portfolio</a>
            <a href="/#offres">Offres</a>
            <a href="/#faq">FAQ</a>
          </nav>
          <a className="btn small" href="/devis">Parler de mon projet</a>
        </div>
      </header>

      <section className="aboutHero shell">
        <div className="aboutHeroCopy">
          <p className="eyebrow">Derrière Courbes & Couleurs</p>
          <h1>Je suis Cristina, graphiste et révélatrice de <em>singularités.</em></h1>
          <p className="lead">Depuis 15 ans, j’aide les entrepreneurs, artisans et petites marques à transformer ce qu’ils ont de précieux en une identité claire, sensible et reconnaissable.</p>
        </div>
        <figure className="aboutHeroPortrait">
          <img src="/cristina-portrait.webp" alt="Cristina, fondatrice du studio Courbes & Couleurs" fetchPriority="high" />
          <figcaption>Basée en Ariège · Projets en France et à distance</figcaption>
        </figure>
      </section>

      <section className="rightFit section shell">
        <div className="sectionHead split">
          <div><p className="eyebrow">Est-ce que nous sommes faites pour collaborer ?</p><h2>Je suis la graphiste qu’il vous faut <em>si…</em></h2></div>
          <p>Vous n’avez pas besoin d’arriver avec toutes les réponses. Vous devez surtout avoir envie de construire une marque sincère, cohérente et capable de durer.</p>
        </div>
        <div className="rightFitGrid">
          <article><span>01</span><p>Vous lancez votre entreprise et vous voulez inspirer confiance dès le premier regard.</p></article>
          <article><span>02</span><p>Votre image actuelle ne reflète plus la qualité, la maturité ou l’ambition de votre travail.</p></article>
          <article><span>03</span><p>Vous souhaitez donner du peps à votre marque sans sacrifier sa crédibilité ni sa cohérence.</p></article>
          <article><span>04</span><p>Votre activité évolue et votre communication est devenue difficile à harmoniser.</p></article>
          <article><span>05</span><p>Vous cherchez une vraie réflexion de marque, pas simplement un logo posé sur quelques supports.</p></article>
          <article><span>06</span><p>Vous voulez être guidée, challengée avec bienveillance et comprendre chaque choix créatif.</p></article>
        </div>
      </section>

      <section className="aboutStory section">
        <div className="shell aboutStoryGrid">
          <div><p className="eyebrow">Pourquoi l’image de marque ?</p><h2>Parce qu’une belle image ne suffit pas si elle ne raconte pas la bonne histoire.</h2></div>
          <div className="aboutStoryText">
            <p>J’ai choisi de me spécialiser en branding pour aller au-delà du « joli ». Avant de dessiner, je cherche à comprendre votre métier, vos valeurs, votre public et la place que vous voulez prendre.</p>
            <p>Mon rôle n’est pas de vous faire entrer dans une tendance. Il est de construire un langage visuel qui vous ressemble, vous distingue et reste juste lorsque votre activité évolue.</p>
            <blockquote>« Une identité réussie ne vous déguise pas : elle rend votre valeur visible. »</blockquote>
          </div>
        </div>
      </section>

      <section className="aboutValues section shell">
        <div className="sectionHead centered"><p className="eyebrow">Ma façon de procéder</p><h2>De l’écoute, du sens et une vraie <em>exigence graphique.</em></h2></div>
        <div className="aboutValuesGrid">
          <article><span>01</span><h3>Écouter vraiment</h3><p>Comprendre votre réalité, vos ambitions et les nuances que votre marque doit transmettre.</p></article>
          <article><span>02</span><h3>Donner une direction</h3><p>Transformer vos idées en décisions stratégiques claires avant de passer à la création.</p></article>
          <article><span>03</span><h3>Créer avec intention</h3><p>Justifier chaque choix pour bâtir un univers beau, distinctif et réellement utile.</p></article>
          <article><span>04</span><h3>Vous rendre autonome</h3><p>Vous remettre des outils compréhensibles, des fichiers organisés et un cadre d’utilisation précis.</p></article>
        </div>
      </section>

      <section className="aboutPromise section">
        <div className="shell aboutPromiseGrid">
          <div><p className="eyebrow">Avec quoi vous repartez</p><h2>Tout ce qu’il faut pour faire vivre votre marque avec confiance.</h2></div>
          <ul>
            <li>Un contrat clair avant le démarrage</li><li>Des étapes et délais précisés dans le devis</li>
            <li>Des logos et fichiers adaptés au print et au digital</li><li>La cession des droits comprise dans chaque formule</li>
            <li>Un guide pour utiliser votre identité avec cohérence</li><li>30 jours de suivi après la livraison</li>
          </ul>
        </div>
      </section>

      <section className="aboutCta section shell">
        <p className="eyebrow">Et votre marque ?</p><h2>Si vous cherchez une identité qui ait du sens autant que du caractère, parlons-en.</h2>
        <div className="actions"><a className="btn" href="/devis">Raconter mon projet</a><a className="textLink" href="/#portfolio">Voir les projets</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
