export function MobileMenu() {
  return (
    <details className="mobileMenu">
      <summary aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </summary>
      <nav className="mobileMenuPanel" aria-label="Navigation mobile">
        <a href="/">Accueil</a>
        <a href="/a-propos">À propos</a>
        <a href="/#expertises">Expertises</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#offres">Offres</a>
        <a href="/#faq">FAQ</a>
        <a className="mobileMenuCta" href="/devis">Parler de mon projet</a>
      </nav>
    </details>
  );
}
