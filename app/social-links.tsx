export default function SocialLinks() {
  return (
    <div className="socialLinks" aria-label="Réseaux et contact de Courbes & Couleurs">
      <a href="https://instagram.com/courbesetcouleurs" target="_blank" rel="noreferrer" aria-label="Courbes & Couleurs sur Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1" className="socialDot"/></svg>
      </a>
      <a href="mailto:Courbesetcouleurs@proton.me" aria-label="Écrire à Courbes & Couleurs">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m4 7 8 6 8-6"/></svg>
      </a>
      <span>Suivre le studio</span>
    </div>
  );
}
