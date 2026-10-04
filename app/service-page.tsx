import type { CSSProperties } from "react";
import SocialLinks from "./social-links";
import { MobileMenu } from "./mobile-menu";

export type ServiceContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: string;
  promise: string;
  forWhom: string[];
  includes: { title: string; text: string }[];
  results: string[];
  project: { name: string; slug: string; image: string; caption: string };
  faq: { question: string; answer: string }[];
};

export const serviceContents: Record<string, ServiceContent> = {
  "identite-visuelle": {
    slug: "identite-visuelle",
    eyebrow: "Identité visuelle · Ariège & à distance",
    title: "Une identité visuelle qui vous ressemble et vous rend reconnaissable.",
    intro: "Je transforme votre positionnement en un univers graphique cohérent, singulier et facile à faire vivre — bien au-delà d’un simple logo.",
    accent: "#ff6b6b",
    promise: "Votre image devient un repère : elle raconte la bonne histoire, attire les bonnes personnes et soutient la valeur de votre offre.",
    forWhom: ["Vous lancez une activité et voulez inspirer confiance dès le départ.", "Votre image actuelle ne reflète plus la qualité de votre travail.", "Vos supports manquent de cohérence et votre marque devient difficile à reconnaître."],
    includes: [
      { title: "Direction créative", text: "Une piste visuelle argumentée, reliée à votre stratégie et à votre public." },
      { title: "Système de logos", text: "Logo principal, versions secondaires et signatures adaptées à vos usages." },
      { title: "Univers de marque", text: "Palette, typographies, formes, iconographie et principes de composition." },
      { title: "Guide & fichiers", text: "Une charte claire, les formats print et digital, des dossiers organisés et 30 jours de suivi." },
    ],
    results: ["Une marque immédiatement plus crédible", "Des supports cohérents sans repartir de zéro", "Une image distinctive, conçue pour durer"],
    project: { name: "Maison Vénus", slug: "maison-venus", image: "/portfolio/maison-venus-hero.webp", caption: "Identité globale pour un lieu dédié au bien-être et au mouvement." },
    faq: [
      { question: "Est-ce différent d’une création de logo ?", answer: "Oui. Le logo est un élément de l’identité. L’identité visuelle construit tout le langage de la marque : couleurs, typographies, compositions, images et règles d’utilisation." },
      { question: "Puis-je faire évoluer une identité existante ?", answer: "Oui. Une refonte permet de conserver vos acquis utiles tout en clarifiant et modernisant l’ensemble." },
      { question: "La cession des droits est-elle comprise ?", answer: "Oui. Chaque formule comprend un contrat et une cession des droits adaptée au périmètre prévu dans le devis." },
    ],
  },
  "strategie-de-marque": {
    slug: "strategie-de-marque",
    eyebrow: "Stratégie de marque · Positionnement",
    title: "Donner un cap clair à votre marque avant de lui donner une forme.",
    intro: "Nous clarifions votre positionnement, votre personnalité et vos messages pour construire une marque juste, différenciante et cohérente.",
    accent: "#4ecdc4",
    promise: "Vous ne choisissez plus vos mots et vos visuels au hasard : chaque décision sert une place précise dans l’esprit de vos clients.",
    forWhom: ["Votre offre est solide mais difficile à expliquer simplement.", "Vous ressemblez trop à vos concurrents et voulez affirmer votre différence.", "Votre activité a évolué et votre marque n’a pas suivi."],
    includes: [
      { title: "Diagnostic", text: "Analyse de l’existant, de votre marché, de vos objectifs et de vos points de différenciation." },
      { title: "Positionnement", text: "Cible, promesse, bénéfices, personnalité et territoire de marque clairement formulés." },
      { title: "Messages", text: "Piliers de discours, ton de voix et mots-clés pour communiquer avec plus de précision." },
      { title: "Plateforme de marque", text: "Un document de référence pour guider votre identité, vos contenus et vos futures décisions." },
    ],
    results: ["Un discours plus simple et plus convaincant", "Une différence lisible face à la concurrence", "Des décisions créatives plus rapides et cohérentes"],
    project: { name: "Green Code Solutions", slug: "green-code-solutions", image: "/portfolio/green-code-bureau-new.webp", caption: "Positionnement et identité pour une expertise numérique responsable." },
    faq: [
      { question: "La stratégie est-elle obligatoire avant l’identité ?", answer: "Pour une identité complète, elle est vivement recommandée. Elle évite les choix purement esthétiques et donne une vraie direction à la création." },
      { question: "Puis-je réserver uniquement la stratégie ?", answer: "Oui, selon votre besoin. Elle peut aussi servir de fondation avant une création ou une refonte visuelle." },
      { question: "Comment participe-t-on au travail stratégique ?", answer: "Vous répondez à un questionnaire approfondi puis nous échangeons. Je synthétise, structure et challenge la matière avec vous." },
    ],
  },
  "creation-logo": {
    slug: "creation-logo",
    eyebrow: "Création de logo · Sur-mesure",
    title: "Un logo mémorable, conçu comme le point de départ de votre marque.",
    intro: "Je crée un signe juste, lisible et distinctif, capable de fonctionner aussi bien sur une carte de visite que sur une enseigne ou un écran.",
    accent: "#ffd166",
    promise: "Votre logo ne se contente pas d’être joli : il identifie votre activité, porte votre personnalité et reste efficace dans la durée.",
    forWhom: ["Vous démarrez et refusez une image générique ou improvisée.", "Votre logo actuel est illisible, daté ou difficile à utiliser.", "Vous avez besoin d’un signe professionnel décliné pour tous vos supports."],
    includes: [
      { title: "Cadrage créatif", text: "Un brief approfondi pour comprendre votre activité, votre public et la perception recherchée." },
      { title: "Concept argumenté", text: "Une proposition pensée comme une réponse à votre problématique, pas comme un simple effet de style." },
      { title: "Déclinaisons utiles", text: "Versions horizontale, compacte, monochrome et adaptées aux petits formats selon la formule." },
      { title: "Livraison professionnelle", text: "Fichiers vectoriels et numériques, références couleurs, contrat et cession des droits." },
    ],
    results: ["Un signe lisible à toutes les tailles", "Une image professionnelle dès le premier contact", "Des fichiers fiables pour le print et le digital"],
    project: { name: "Tomme & Sommets", slug: "tomme-et-sommets", image: "/portfolio/tomme-sommets-hero.webp", caption: "Un emblème attachant et contemporain pour une fromagerie ariégeoise." },
    faq: [
      { question: "Combien de propositions sont présentées ?", answer: "Le nombre et les phases d’ajustement sont précisés dans le devis. Je privilégie des pistes fortes et argumentées plutôt qu’une accumulation de variantes." },
      { question: "Vais-je recevoir des fichiers vectoriels ?", answer: "Oui. Les fichiers adaptés à l’impression et aux usages numériques sont remis dans des dossiers clairement organisés." },
      { question: "Un logo seul suffit-il ?", answer: "Il peut répondre à un besoin très cadré. Pour une communication cohérente et autonome, une identité visuelle complète reste plus pertinente." },
    ],
  },
  webdesign: {
    slug: "webdesign",
    eyebrow: "Web design · Site vitrine",
    title: "Un site qui prolonge votre identité et transforme l’intérêt en contact.",
    intro: "Je conçois une expérience claire, sensible et responsive qui met votre savoir-faire en valeur sans perdre la personnalité de votre marque.",
    accent: "#6a4c93",
    promise: "Votre site devient un véritable outil commercial : il rassure, guide le regard et donne envie de passer à l’action.",
    forWhom: ["Votre site ne reflète plus votre niveau de professionnalisme.", "Vos visiteurs comprennent mal votre offre ou ne savent pas quoi faire ensuite.", "Vous voulez une présence en ligne cohérente avec votre nouvelle identité."],
    includes: [
      { title: "Architecture UX", text: "Parcours, hiérarchie et contenus structurés autour des questions de vos futurs clients." },
      { title: "Direction web", text: "Interface sur-mesure cohérente avec votre identité, pensée pour le mobile comme pour le bureau." },
      { title: "Intégration responsive", text: "Pages rapides, accessibles et adaptées aux principaux formats d’écran." },
      { title: "Fondations SEO", text: "Titres, métadonnées, structure sémantique, maillage et contenus préparés pour être compris par Google." },
    ],
    results: ["Une offre comprise plus rapidement", "Une navigation fluide sur mobile", "Davantage de confiance avant la prise de contact"],
    project: { name: "Green Code Solutions", slug: "green-code-solutions", image: "/portfolio/green-code-web.webp", caption: "Une expérience digitale claire, cohérente et pensée pour mettre l’offre en valeur." },
    faq: [
      { question: "Le site sera-t-il adapté au mobile ?", answer: "Oui. La structure, les contenus et les interactions sont pensés et vérifiés pour les écrans mobiles et les ordinateurs." },
      { question: "Le référencement est-il compris ?", answer: "Les fondations du référencement naturel sont intégrées : structure, titres, métadonnées, performance et contenus. Le positionnement durable dépend ensuite aussi du domaine, de l’autorité et des publications." },
      { question: "Pouvez-vous travailler à partir de mon identité existante ?", answer: "Oui, si elle est suffisamment complète. Je peux aussi prévoir sa mise à niveau avant de concevoir l’interface." },
    ],
  },
};

function Header() {
  return <header className="nav"><div className="shell navInner"><a className="brand" href="/" aria-label="Courbes & Couleurs, accueil"><img src="/monogramme.png" alt=""/><span>Courbes <i>&</i> Couleurs<small>Design de marque</small></span></a><nav aria-label="Navigation principale"><a href="/a-propos">À propos</a><a href="/#expertises">Expertises</a><a href="/#portfolio">Portfolio</a><a href="/#offres">Offres</a><a href="/#faq">FAQ</a><a href="https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=nav_contact">Contact</a></nav><a className="btn small" href="https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=service_header">Parler de mon projet</a><MobileMenu /></div></header>;
}

export function SiteFooter() {
  return <footer><div className="shell serviceFooter"><div><a className="brand inverse" href="/"><img src="/monogramme.png" alt=""/><span>Courbes <i>&</i> Couleurs<small>Design de marque</small></span></a><p>Des identités sensibles, stratégiques et singulières.</p><SocialLinks /></div><div><b>Expertises</b><a href="/identite-visuelle">Identité visuelle</a><a href="/strategie-de-marque">Stratégie de marque</a><a href="/creation-logo">Création de logo</a><a href="/webdesign">Web design</a></div><div><b>Informations</b><a href="/a-propos">À propos</a><a href="/mentions-legales">Mentions légales</a><a href="/cgv">CGV</a><a href="/confidentialite">Confidentialité</a><a href="https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=footer_contact">Contact / devis</a></div><small>Des idées qui prennent forme, des marques qui prennent vie. · © 2026 Courbes & Couleurs · Tous droits réservés.</small></div></footer>;
}

export function ServicePage({ service }: { service: ServiceContent }) {
  const base = "https://courbesetcouleurs.github.io";
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: service.title, serviceType: service.eyebrow.split(" · ")[0], description: service.intro, url: `${base}/${service.slug}`, provider: { "@type": "ProfessionalService", name: "Courbes & Couleurs", url: base }, areaServed: ["Ariège", "Occitanie", "France"], availableChannel: { "@type": "ServiceChannel", serviceUrl: "https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=schema_service", availableLanguage: "fr" } };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: base }, { "@type": "ListItem", position: 2, name: service.eyebrow.split(" · ")[0], item: `${base}/${service.slug}` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: service.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <main className="servicePage" style={{ "--service-accent": service.accent } as CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([jsonLd, breadcrumbLd, faqLd])}} />
    <a className="skipLink" href="#contenu-principal">Aller au contenu principal</a><Header />
    <section className="serviceHero shell" id="contenu-principal"><div className="serviceHeroCopy"><nav className="breadcrumbs" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><span aria-current="page">{service.eyebrow.split(" · ")[0]}</span></nav><p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1><p className="lead">{service.intro}</p><div className="actions"><a className="btn" href={`https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=${encodeURIComponent(`service_${service.slug}`)}`}>Parler de mon projet</a><a className="textLink" href="#compris">Voir ce qui est compris</a></div></div><aside className="servicePromise"><span>La promesse</span><p>{service.promise}</p></aside></section>
    <section className="serviceFit section shell"><div className="sectionHead split"><div><p className="eyebrow">Cette expertise est faite pour vous si</p><h2>Votre marque mérite une réponse à la hauteur de son <em>ambition.</em></h2></div><p>Nous partons de votre situation réelle pour construire uniquement ce qui sera utile à votre prochaine étape.</p></div><div className="serviceFitGrid">{service.forWhom.map((item, i)=><article key={item}><span>0{i+1}</span><p>{item}</p></article>)}</div></section>
    <section className="serviceIncludes section" id="compris"><div className="shell"><div className="sectionHead centered"><p className="eyebrow">Ce qui est compris</p><h2>Des fondations claires, des choix justes et des outils <em>prêts à vivre.</em></h2></div><div className="serviceIncludesGrid">{service.includes.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><p className="serviceLegal">Chaque accompagnement est encadré par un contrat. La cession des droits prévue pour votre projet est comprise dans la formule.</p></div></section>
    <section className="serviceProcess section shell"><div><p className="eyebrow">Ma façon de procéder</p><h2>Une collaboration structurée, sans jargon ni zone floue.</h2></div><ol>{[["Écouter", "Comprendre votre activité, vos objectifs et vos contraintes."],["Définir", "Poser une direction claire et valider le cap ensemble."],["Créer", "Concevoir, présenter et affiner une réponse argumentée."],["Transmettre", "Livrer des fichiers organisés, un guide et 30 jours de suivi."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className="serviceResults"><div className="shell serviceResultsGrid"><div><p className="eyebrow">Ce que cela change</p><h2>Une marque plus claire pour vous, plus évidente pour vos clients.</h2></div><ul>{service.results.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="serviceCase section shell"><div><p className="eyebrow">Exemple de projet</p><h2>{service.project.name}</h2><p>{service.project.caption}</p><a className="textLink" href={`/projets/${service.project.slug}`}>Découvrir l’étude de cas</a></div><a href={`/projets/${service.project.slug}`} className="serviceCaseImage"><img src={service.project.image} alt={`Projet ${service.project.name} par Courbes & Couleurs`} loading="lazy" decoding="async"/></a></section>
    <section className="serviceFaq section shell"><div className="sectionHead centered"><p className="eyebrow">Questions fréquentes</p><h2>Avant de commencer.</h2></div><div className="faqGrid">{service.faq.map(item=><details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></section>
    <section className="serviceCta section"><div className="shell"><p className="eyebrow">Votre projet commence ici</p><h2>Vous voulez une marque plus juste, plus forte et plus facile à choisir ?</h2><p>Racontez-moi où vous en êtes. Je vous réponds personnellement sous deux jours ouvrés avec une première orientation.</p><a className="btn" href={`https://devis-courbesetcouleurs.netlify.app/?utm_source=site&utm_medium=referral&utm_content=${encodeURIComponent(`service_${service.slug}`)}`}>Raconter mon projet</a></div></section><SiteFooter />
  </main>;
}
