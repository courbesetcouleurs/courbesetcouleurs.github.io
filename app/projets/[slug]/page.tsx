import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../data";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Étude de cas branding`,
    description: project.intro,
    alternates: { canonical: `/projets/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — Projet d’identité visuelle`,
      description: project.intro,
      url: `/projets/${project.slug}`,
      images: [{ url: project.hero, alt: `Identité visuelle ${project.name}` }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const base = "https://courbesetcouleurs.github.io";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${project.name} — Identité visuelle`,
      description: project.intro,
      url: `${base}/projets/${project.slug}`,
      image: project.images.map((image) => `${base}${image.src}`),
      dateCreated: project.year,
      creator: { "@type": "Person", name: "Cristina", worksFor: { "@type": "ProfessionalService", name: "Courbes & Couleurs" } },
      about: project.services,
      genre: "Branding et identité visuelle",
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: base },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${base}/#portfolio` },
        { "@type": "ListItem", position: 3, name: project.name, item: `${base}/projets/${project.slug}` },
      ],
    },
  ];

  return (
    <main
      className={`casePage casePage-${project.slug}`}
      style={{ "--case-accent": project.accent } as React.CSSProperties}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="caseNav">
        <div className="shell caseNavInner">
          <a className="brand" href="/">
            <img src="/monogramme.png" alt="" />
            <span>
              Courbes <i>&</i> Couleurs<small>Graphic designer</small>
            </span>
          </a>
          <a className="caseBack" href="/#portfolio">
            Retour au portfolio
          </a>
        </div>
      </header>

      <section className="caseHero shell">
        <div className="caseHeroCopy">
          <nav className="caseBreadcrumbs" aria-label="Fil d’Ariane">
            <a href="/">Accueil</a><span>/</span><a href="/#portfolio">Portfolio</a><span>/</span><span aria-current="page">{project.name}</span>
          </nav>
          <p className="caseIndex">
            Projet {String(index + 1).padStart(2, "0")} · {project.year}
          </p>
          <h1>{project.name}</h1>
          <p className="caseIntro">{project.intro}</p>
          <div className="caseMeta">
            <div>
              <span>Secteur</span>
              <b>{project.category}</b>
            </div>
            <div>
              <span>Intervention</span>
              <b>{project.services.join(" · ")}</b>
            </div>
          </div>
        </div>
        <figure className="caseHeroImage">
          <img
            src={project.hero}
            alt={`Présentation du projet ${project.name}`}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </section>

      <section className="caseSnapshot shell" aria-label="Le projet en un coup d’œil">
        <p className="caseLabel">En un coup d’œil</p>
        <dl>
          <div><dt>Mission</dt><dd>{project.scope}</dd></div>
          <div><dt>Problème</dt><dd>{project.challenge}</dd></div>
          <div><dt>Objectif</dt><dd>{project.objective}</dd></div>
          <div><dt>Livrables</dt><dd>{project.services.join(" · ")}</dd></div>
        </dl>
      </section>

      <section className="caseOverview shell">
        <p className="caseLabel">Le projet</p>
        <div className="caseStatement">
          <h2>
            Une identité conçue pour avoir du sens, de la personnalité et de la
            tenue.
          </h2>
          <p>{project.context}</p>
        </div>
      </section>

      <section className="caseFeature">
        <div className="shell caseFeatureGrid">
          <div>
            <span>01</span>
            <p className="caseLabel">Le défi</p>
            <p className="caseChallengeText">{project.challenge}</p>
          </div>
          <figure>
            <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="caseConcept shell">
        <div>
          <p className="caseLabel">02 · La direction créative</p>
          <h2>Transformer la stratégie en un langage visuel reconnaissable.</h2>
        </div>
        <p>{project.concept}</p>
      </section>

      <section
        className={`caseGallery ${project.images.length > 2 ? "caseGalleryLarge" : ""} shell`}
      >
        {project.images.slice(1).map((image, imageIndex) => (
          <figure
            key={image.src}
            className={`galleryItem galleryItem${imageIndex + 1}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </section>

      <section className="caseResult shell">
        <p className="caseLabel">03 · Le résultat</p>
        <blockquote>{project.result}</blockquote>
        <div className="caseExpertiseLinks" aria-label="Expertises associées">
          <span>Expertises associées</span>
          <a href="/strategie-de-marque">Stratégie de marque</a>
          <a href="/identite-visuelle">Identité visuelle</a>
          <a href="/creation-logo">Création de logo</a>
        </div>
        <a className="caseCta" href="/devis">
          Vous avez un projet similaire ? Parlons-en
        </a>
      </section>

      <a
        className="nextProject"
        href={`/projets/${next.slug}`}
        style={{ backgroundColor: next.accent }}
      >
        <span>Projet suivant</span>
        <strong>{next.name}</strong>
        <small>{next.category}</small>
      </a>

      <footer className="caseFooter">
        <div className="shell">
          <span>© 2026 Courbes & Couleurs</span>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgv">CGV</a>
          <a href="/confidentialite">Confidentialité</a>
          <a href="mailto:Courbesetcouleurs@proton.me">Email</a>
        </div>
      </footer>
    </main>
  );
}
