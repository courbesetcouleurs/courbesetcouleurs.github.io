import PricingCards from "./pricing-cards";
import SocialLinks from "./social-links";
import { MobileMenu } from "./mobile-menu";

const projects = [
  {
    name: "Maison Vénus",
    type: "Bien-être · Identité globale",
    image: "/portfolio/maison-venus-hero.webp",
    color: "coral",
    slug: "maison-venus",
  },
  {
    name: "Green Code Solutions",
    type: "Tech responsable · Branding",
    image: "/portfolio/green-code-bureau-new.webp",
    color: "aqua",
    slug: "green-code-solutions",
  },
  {
    name: "Métro Bowling",
    type: "Lieu de vie · Rebranding",
    image: "/portfolio/metro-bowling-hero.webp",
    color: "yellow",
    slug: "metro-bowling",
  },
  {
    name: "Tomme & Sommets",
    type: "Artisanat · Identité & packaging",
    image: "/portfolio/tomme-sommets-hero.webp",
    color: "purple",
    slug: "tomme-et-sommets",
  },
  {
    name: "PÉPITE",
    type: "Mode enfant · Identité & univers de marque",
    image: "/projets/pepite/pepite-01-hero.webp",
    color: "yellow",
    slug: "pepite",
  },
];

const services = [
  {
    no: "01",
    title: "Stratégie de marque",
    text: "Positionnement, personnalité, cible et messages : une direction claire avant de créer.",
    color: "coral",
    symbol: "◯",
    href: "/strategie-de-marque",
  },
  {
    no: "02",
    title: "Identité visuelle",
    text: "Logo, palette, typographies et système graphique pensés pour rendre votre marque reconnaissable.",
    color: "aqua",
    symbol: "∿",
    href: "/identite-visuelle",
  },
  {
    no: "03",
    title: "Supports de marque",
    text: "Packaging, papeterie, réseaux sociaux et supports print ou digitaux cohérents avec votre univers.",
    color: "yellow",
    symbol: "⌒",
    href: "/creation-logo",
  },
  {
    no: "04",
    title: "Web design",
    text: "Sites vitrines et boutiques conçus pour prolonger votre identité et guider vos visiteurs vers l’action.",
    color: "purple",
    symbol: "◒",
    href: "/webdesign",
  },
];

const offers = [
  {
    name: "Je me lance",
    price: "500 €",
    for: "Pour poser des bases professionnelles",
    features: [
      "Logo principal",
      "Palette colorimétrique",
      "Sélection typographique",
      "Contrat & cession des droits",
    ],
  },
  {
    name: "Je structure",
    price: "1 100 €",
    for: "Pour construire un univers plus cohérent",
    features: [
      "Tout le pack Je me lance",
      "Logo secondaire et déclinaisons",
      "Univers visuel",
      "Mini-guide de marque",
      "Contrat & cession des droits",
    ],
  },
  {
    name: "Je me démarque",
    price: "2 000 €",
    for: "Pour devenir identifiable et mémorable",
    features: [
      "Tout le pack Je structure",
      "Stratégie de marque",
      "Identité visuelle complète",
      "Charte graphique détaillée",
      "Contrat & cession des droits",
    ],
    badge: "Le plus choisi",
  },
  {
    name: "Je deviens une marque",
    price: "4 000 €",
    for: "Pour déployer une marque forte à 360°",
    features: [
      "Tout le pack Je me démarque",
      "Plateforme de marque complète",
      "Direction artistique",
      "Supports de lancement",
      "Accompagnement au déploiement",
      "Contrat & cession des droits",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Courbes & Couleurs",
  description:
    "Studio de design graphique spécialisé en identité visuelle et image de marque en Ariège et à distance.",
  url: "https://courbesetcouleurs.github.io",
  email: "Courbesetcouleurs@proton.me",
  image:
    "https://courbesetcouleurs.github.io/portfolio/maison-venus-hero.webp",
  founder: { "@type": "Person", name: "Cristina" },
  areaServed: ["Ariège", "Occitanie", "France"],
  serviceType: [
    "Identité visuelle",
    "Stratégie de marque",
    "Logo",
    "Charte graphique",
    "Web design",
    "Packaging",
  ],
  sameAs: ["https://instagram.com/courbesetcouleurs"],
};

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#contenu-principal">
        Aller au contenu principal
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="nav">
        <div className="shell navInner">
          <a
            className="brand"
            href="#accueil"
            aria-label="Courbes & Couleurs, accueil"
          >
            <img src="/monogramme.png" alt="" />
            <span>
              Courbes <i>&</i> Couleurs<small>Design de marque</small>
            </span>
          </a>
          <nav aria-label="Navigation principale">
            <a href="/a-propos">À propos</a>
            <a href="#expertises">Expertises</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#offres">Offres</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn small" href="/devis">
            Parler de mon projet
          </a>
          <MobileMenu />
        </div>
      </header>

      <section className="heroWrap" id="accueil">
        <div className="hero shell">
          <div className="heroText" id="contenu-principal">
            <p className="eyebrow">
              Graphiste spécialisée en identité visuelle · Ariège & à distance
            </p>
            <h1>Votre marque mérite mieux qu’un joli logo.</h1>
            <p className="lead">
              Je transforme votre histoire, vos valeurs et votre ambition en une
              identité visuelle singulière — pensée pour être reconnue, comprise
              et choisie.
            </p>
            <div className="actions">
              <a className="btn" href="/devis">
                Construire ma marque
              </a>
              <a className="textLink" href="#portfolio">
                Découvrir les projets
              </a>
            </div>
            <p className="heroAudience">
              Pour les indépendants, artisans, commerces et petites marques qui
              veulent passer un cap.
            </p>
          </div>
          <div className="heroVisual">
            <div className="imageFrame">
              <img
                src="/portfolio/maison-venus-hero.webp"
                alt="Identité visuelle du projet Maison Vénus conçue par Courbes & Couleurs"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="badge">
              <span className="badgeYears">
                <b>15</b>
                <strong>ans</strong>
              </span>
              <span className="badgeLabel">d’expérience</span>
            </div>
            <span className="orbit one" />
            <span className="orbit two" />
            <div className="heroNote">
              <span>Stratégie</span>
              <span>Identité</span>
              <span>Déploiement</span>
            </div>
            <div className="creatorChip">
              <img src="/cristina-portrait.webp" alt="" />
              <span>
                <b>Cristina</b>Votre interlocutrice du brief à la livraison
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning">
        <div className="shell positioningGrid">
          <p className="eyebrow">Plus qu’une identité esthétique</p>
          <h2>Une image juste vous aide à prendre votre place.</h2>
          <p>
            Votre identité doit raconter qui vous êtes, parler aux bonnes
            personnes et rester cohérente partout. C’est cette rencontre entre
            stratégie et sensibilité qui donne de la force à votre marque.
          </p>
        </div>
      </section>

      <section className="audience section shell">
        <div className="sectionHead split">
          <div>
            <p className="eyebrow">Où en est votre marque ?</p>
            <h2>Un accompagnement pensé pour le moment que vous traversez.</h2>
          </div>
          <p>
            Vous n’avez pas besoin de connaître le nom exact des livrables. Il
            suffit de savoir ce que vous voulez changer.
          </p>
        </div>
        <div className="audienceGrid">
          <a href="/devis?besoin=lancement">
            <span>01</span>
            <p>Vous lancez votre activité</p>
            <h3>Partir sur des bases crédibles dès le début.</h3>
            <small>Identité essentielle · Cohérence · Confiance</small>
          </a>
          <a href="/devis?besoin=refonte">
            <span>02</span>
            <p>Votre image ne vous ressemble plus</p>
            <h3>Faire évoluer votre identité sans perdre votre histoire.</h3>
            <small>Diagnostic · Repositionnement · Refonte</small>
          </a>
          <a href="/devis?besoin=developpement">
            <span>03</span>
            <p>Votre marque passe un cap</p>
            <h3>Structurer un univers capable de grandir avec vous.</h3>
            <small>Stratégie · Système visuel · Déploiement</small>
          </a>
        </div>
      </section>

      <section className="about section shell" id="studio">
        <div className="aboutVisual portraitVisual">
          <img
            src="/cristina-portrait.webp"
            alt="Cristina, graphiste spécialisée en identité visuelle en Ariège"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="aboutCopy">
          <p className="eyebrow">Derrière le studio</p>
          <h2>
            Une graphiste, une approche <em>sur-mesure.</em>
          </h2>
          <p>
            Moi, c’est Cristina. J’accompagne les entrepreneurs et les petites
            marques qui ont une vraie histoire, mais dont l’image ne traduit pas
            encore toute la valeur.
          </p>
          <p>
            Je me suis spécialisée en image de marque parce qu’un logo isolé ne
            suffit pas à faire comprendre une entreprise. Ce qui m’anime, c’est
            de révéler ce qui vous rend singulière, puis de le traduire dans un
            univers clair, cohérent et durable.
          </p>
          <p className="aboutConviction">
            « Une identité réussie ne vous déguise pas : elle rend votre valeur
            visible. »
          </p>
          <div className="signatureList">
            <span>Écoute attentive</span>
            <span>Exigence graphique</span>
            <span>Vision stratégique</span>
          </div>
          <div className="aboutActions">
            <a className="btn" href="/a-propos">Découvrir mon parcours</a>
            <span className="signature">Cristina</span>
          </div>
        </div>
      </section>

      <section className="deliverables section" aria-labelledby="livrables-title">
        <div className="shell">
          <div className="sectionHead split">
            <div>
              <p className="eyebrow">Une marque prête à vivre</p>
              <h2 id="livrables-title">
                À la fin, vous ne repartez pas seulement avec <em>un logo.</em>
              </h2>
            </div>
            <p>
              Vous recevez un système complet, organisé et expliqué pour utiliser
              votre identité avec confiance sur tous vos supports.
            </p>
          </div>
          <div className="deliverablesGrid">
            {[
              ["01", "Vos logos", "Versions principales, secondaires et adaptées aux différents usages."],
              ["02", "Vos couleurs & typographies", "Références précises pour conserver une image cohérente partout."],
              ["03", "Votre guide de marque", "Des règles claires et des exemples pour bien faire vivre votre univers."],
              ["04", "Vos fichiers prêts à l’emploi", "Formats print et digital, dossiers nommés et soigneusement organisés."],
              ["05", "Vos supports essentiels", "Les déclinaisons prévues dans votre formule, pensées dans un même langage."],
              ["06", "30 jours de suivi", "Un accompagnement après la livraison pour répondre à vos premières questions."],
              ["07", "Contrat & cession des droits", "Un cadre clair et la cession des droits d’utilisation adaptée à votre projet, compris dans chaque formule."],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services section" id="expertises">
        <div className="shell">
          <div className="sectionHead centered">
            <p className="eyebrow">Mes expertises</p>
            <h2>
              Tout ce qu’il faut pour construire une marque <em>cohérente.</em>
            </h2>
            <p>
              De la réflexion fondatrice aux supports qui rendent votre marque
              visible, chaque élément est pensé comme une partie du même
              langage.
            </p>
          </div>
          <div className="serviceGrid">
            {services.map((s) => (
              <article className={s.color} key={s.no}>
                <div className="serviceTop">
                  <span>{s.no}</span>
                  <b>{s.symbol}</b>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href={s.href}>Découvrir cette expertise</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="shell">
          <div>
            <b>15</b>
            <span>
              années
              <br />
              d’expérience
            </span>
          </div>
          <div>
            <b>01</b>
            <span>
              interlocutrice
              <br />
              du brief à la livraison
            </span>
          </div>
          <div>
            <b>100%</b>
            <span>
              création
              <br />
              sur-mesure
            </span>
          </div>
          <div>
            <b>30 j</b>
            <span>
              de support
              <br />
              après livraison
            </span>
          </div>
        </div>
      </section>

      <section className="portfolio section shell" id="portfolio">
        <div className="sectionHead split">
          <div>
            <p className="eyebrow">Projets sélectionnés</p>
            <h2>
              Des identités pensées pour <em>prendre vie.</em>
            </h2>
          </div>
          <p>
            Découvrez la réflexion, le concept et les applications derrière
            chaque univers de marque.
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((p, i) => (
            <article key={p.name} className={p.color}>
              <a className="projectImage" href={`/projets/${p.slug}`}>
                <img
                  src={p.image}
                  alt={`Projet d’identité visuelle ${p.name}`}
                  loading="lazy"
                  decoding="async"
                />
                <span>0{i + 1}</span>
                <i>Voir l’étude de cas</i>
              </a>
              <div className="projectMeta">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.type}</p>
                </div>
                <a
                  href={`/projets/${p.slug}`}
                  aria-label={`Découvrir le projet ${p.name}`}
                >
                  Découvrir
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="processus">
        <div className="shell">
          <div className="sectionHead centered">
            <p className="eyebrow">La collaboration</p>
            <h2>
              Un cadre clair pour créer en toute <em>confiance.</em>
            </h2>
            <p>
              Vous savez toujours où nous en sommes, pourquoi nous faisons
              chaque choix et ce qui vient ensuite.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Écouter & comprendre",
                "Un échange approfondi pour cerner votre activité, vos objectifs, votre cible et ce qui vous différencie.",
              ],
              [
                "02",
                "Définir le cap",
                "La stratégie pose des fondations solides et transforme vos intuitions en une direction de marque claire.",
              ],
              [
                "03",
                "Créer & affiner",
                "Je développe un univers distinctif, puis nous l’ajustons ensemble sans perdre la force du concept.",
              ],
              [
                "04",
                "Vous rendre autonome",
                "Vous recevez des fichiers organisés, un guide clair et 30 jours de support pour bien démarrer.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section shell" id="offres">
        <div className="sectionHead centered">
          <p className="eyebrow">Les accompagnements</p>
          <h2>
            Choisissez le niveau d’accompagnement qui correspond à votre{" "}
            <em>prochaine étape.</em>
          </h2>
          <p>
            Les montants sont des repères, pas des cases rigides. Après notre
            échange, vous recevez une proposition adaptée à votre besoin réel.
          </p>
        </div>
        <PricingCards offers={offers} />
        <div className="offerComparison" aria-labelledby="comparatif-title">
          <h3 id="comparatif-title">Comparer en un coup d’œil</h3>
          <div className="comparisonScroll" tabIndex={0}>
            <table>
              <thead><tr><th>Inclus</th><th>Je me lance</th><th>Je structure</th><th>Je me démarque</th><th>Je deviens une marque</th></tr></thead>
              <tbody>
                <tr><th>Logo principal</th><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><th>Déclinaisons</th><td>—</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><th>Univers visuel</th><td>—</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><th>Stratégie de marque</th><td>—</td><td>—</td><td>✓</td><td>✓</td></tr>
                <tr><th>Charte complète</th><td>—</td><td>—</td><td>✓</td><td>✓</td></tr>
                <tr><th>Supports de lancement</th><td>—</td><td>—</td><td>—</td><td>✓</td></tr>
                <tr><th>Contrat & cession des droits</th><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="pricingReassurance">
          Vous ne savez pas laquelle choisir ? Décrivez simplement votre projet
          : je vous orienterai vers la solution la plus juste, sans vous pousser
          vers la plus chère.
        </p>
      </section>

      <section className="value section">
        <div className="shell">
          <div className="sectionHead split">
            <div>
              <p className="eyebrow">Ce qui change vraiment</p>
              <h2>
                Une identité que vous serez fière de <em>faire vivre.</em>
              </h2>
            </div>
            <p>
              Le résultat ne s’arrête pas à des fichiers graphiques : vous
              gagnez en clarté, en cohérence et en confiance.
            </p>
          </div>
          <div className="valueGrid">
            <article className="voiceStack">
              <span>01</span>
              <h3>Vous devenez reconnaissable</h3>
              <p>
                Votre univers forme un ensemble distinctif qui reste en mémoire
                et ne ressemble pas à celui de vos concurrents.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Vous communiquez plus facilement</h3>
              <p>
                Des règles et des outils concrets vous aident à créer vos
                supports sans repartir de zéro à chaque fois.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Vous inspirez confiance</h3>
              <p>
                Une image cohérente rend votre offre plus lisible, plus crédible
                et plus désirable auprès de vos futurs clients.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="clientVoices section" aria-labelledby="avis-clients">
        <div className="shell">
          <div className="sectionHead split">
            <div>
              <p className="eyebrow">Leurs mots</p>
              <h2 id="avis-clients">
                Des collaborations qui laissent une <em>belle impression.</em>
              </h2>
            </div>
            <p>
              Des retours spontanés publiés par des clients après leur
              collaboration avec Cristina.
            </p>
          </div>
          <div className="clientVoicesGrid">
            <article className="voiceStack">
              <div className="voiceTop">
                <span className="voiceStars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </span>
                <small>Avis Google</small>
              </div>
              <blockquote>
                « Une excellente expérience avec Cristina. Elle a réalisé la
                refonte de mon site internet avec beaucoup de sérieux et de
                professionnalisme. Toujours disponible, de bon conseil et
                attentive aux détails, elle a su créer un site qui correspond
                parfaitement à mon activité. Mes bijoux sont mis en valeur et je
                n’ai que des compliments sur mon site. Je la recommande avec
                grand plaisir. Merci beaucoup Cristina »
              </blockquote>
              <div className="voiceAuthor">
                <span>SC</span>
                <div>
                  <b>Shamani Créaperles</b>
                  <small>Refonte de site internet</small>
                </div>
              </div>
            </article>
            <article>
              <div className="voiceTop">
                <span className="voiceStars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </span>
                <small>Avis Google</small>
              </div>
              <blockquote>
                « Merci pour la qualité de la prestation, création d’un ensemble
                graphique de très bonne qualité. »
              </blockquote>
              <div className="voiceAuthor">
                <span>SS</span>
                <div>
                  <b>Sébastien Sauzet</b>
                  <small>Abellio</small>
                </div>
              </div>
              <div className="voiceSecondary">
                <blockquote>
                  « Graphiste talentueuse et patiente, c’était un plaisir de
                  travailler avec elle. Je n’hésiterai pas à renouveler ce
                  partenariat ! »
                </blockquote>
                <div className="voiceAuthor">
                  <span>MC</span>
                  <div><b>Maxime Carré</b><small>Collaboration graphique</small></div>
                </div>
              </div>
            </article>
            <article>
              <div className="voiceTop">
                <span className="voiceStars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </span>
                <small>Avis Google</small>
              </div>
              <blockquote>
                « Travailler avec Cristina a été une expérience très
                enrichissante. Elle a pris le temps de comprendre mon secteur
                d’activité et mes objectifs pour créer un design personnalisé et
                efficace. Grâce à elle, ma micro-entreprise a gagné en
                visibilité et en crédibilité. »
              </blockquote>
              <div className="voiceAuthor">
                <span>MC</span>
                <div>
                  <b>Maxime Combe</b>
                  <small>Identité de micro-entreprise</small>
                </div>
              </div>
            </article>
          </div>
          <p className="voicesNote">
            Trois expériences différentes, un même fil conducteur : l’écoute, la
            justesse et le soin apporté à chaque détail.
          </p>
        </div>
      </section>

      <section className="faq section shell" id="faq">
        <div className="sectionHead centered">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>
            Avant de commencer <em>ensemble.</em>
          </h2>
        </div>
        <div className="faqGrid">
          {[
            [
              "Est-ce que les tarifs affichés sont fixes ?",
              "Non. Ils donnent un ordre de grandeur pour vous aider à vous situer. Après un échange, je construis un devis selon vos objectifs, les livrables nécessaires et la complexité du projet.",
            ],
            [
              "Comment se déroule un projet ?",
              "Nous commençons par un appel découverte. Vous recevez ensuite une proposition claire, puis le projet avance par étapes : stratégie, direction créative, création, ajustements et livraison.",
            ],
            [
              "Combien de temps faut-il prévoir ?",
              "Selon le périmètre, comptez généralement de quatre à douze semaines pour construire une identité complète sans précipiter les décisions importantes.",
            ],
            [
              "Combien de retours sont inclus ?",
              "Le nombre de phases d’ajustement est précisé dans votre devis. Elles sont organisées pour affiner le projet tout en préservant la cohérence du concept.",
            ],
            [
              "Quels fichiers vais-je recevoir ?",
              "Vous recevez les formats adaptés au print et au digital, des fichiers organisés ainsi qu’un guide pour utiliser votre identité avec cohérence.",
            ],
            [
              "Pouvez-vous moderniser une identité existante ?",
              "Oui. Une refonte peut conserver ce qui fait déjà votre force tout en clarifiant, professionnalisant et actualisant votre image.",
            ],
            [
              "Travaillez-vous à distance ?",
              "Oui. Je suis basée en Ariège et j’accompagne des clients partout en France et à distance, avec des échanges simples et structurés.",
            ],
            [
              "Et si je ne sais pas exactement ce qu’il me faut ?",
              "C’est normal. Le premier échange sert justement à clarifier vos priorités. Je vous conseille uniquement les éléments utiles à votre situation.",
            ],
          ].map((q) => (
            <details key={q[0]}>
              <summary>
                {q[0]}
                <span>+</span>
              </summary>
              <p>{q[1]}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contactCallout">
          <div>
            <p className="eyebrow">Votre projet commence ici</p>
            <h2>
              Votre marque a quelque chose à dire. Donnons-lui une image qui se
              remarque.
            </h2>
            <p>
              Parlez-moi de votre activité, de ce qui ne fonctionne plus et de
              l’étape que vous voulez franchir. Je vous réponds personnellement
              sous deux jours ouvrés.
            </p>
          </div>
          <div className="contactAction">
            <a className="btn" href="/devis">
              Raconter mon projet
            </a>
            <a className="textLink" href="mailto:Courbesetcouleurs@proton.me">
              Une question avant le devis ? Écrivez-moi
            </a>
            <small>
              Premier échange sans engagement · Réponse personnalisée
            </small>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div>
            <a className="brand inverse" href="#accueil">
              <img src="/monogramme.png" alt="" />
              <span>
                Courbes <i>&</i> Couleurs<small>Design de marque</small>
              </span>
            </a>
            <p>
              Des identités sensibles, stratégiques
              <br />
              et singulières.
            </p>
            <SocialLinks />
          </div>
          <div>
            <b>Explorer</b>
            <a href="#studio">Le studio</a>
            <a href="/identite-visuelle">Identité visuelle</a>
            <a href="/strategie-de-marque">Stratégie de marque</a>
            <a href="/creation-logo">Création de logo</a>
            <a href="/webdesign">Web design</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#offres">Offres</a>
          </div>
          <div>
            <b>Me retrouver</b>
            <a href="mailto:Courbesetcouleurs@proton.me">Email</a>
            <a href="/devis">Demander un devis</a>
          </div>
          <div>
            <b>Informations</b>
            <p>
              Ariège · Occitanie
              <br />
              France & à distance
            </p>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/a-propos">À propos</a>
            <a href="/cgv">Conditions générales de vente</a>
            <a href="/confidentialite">Confidentialité</a>
          </div>
          <small>
            Des idées qui prennent forme, des marques qui prennent vie. · © 2026
            Courbes & Couleurs · Tous droits réservés.
          </small>
        </div>
      </footer>
    </main>
  );
}
