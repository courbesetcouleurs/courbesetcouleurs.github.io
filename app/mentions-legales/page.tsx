import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Mentions légales | Courbes & Couleurs",
};

export default function MentionsLegales() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Les informations relatives à l’édition, à l’hébergement et à l’utilisation de ce site. Mise à jour du 2 octobre 2026."
    >
      <section>
        <h2>Édition du site</h2>
        <p>
          Le présent site est édité par Cristina Asensio Valero, entrepreneur
          individuel (EI), exerçant sous le nom commercial Courbes & Couleurs.
        </p>
        <ul>
          <li>Activité : design graphique et direction artistique</li>
          <li>Code APE : 74.10Z — Activités spécialisées de design</li>
          <li>SIREN : 804 124 626</li>
          <li>SIRET : 804 124 626 00032</li>
          <li>
            Adresse : 1 avenue de Lestang, 09000 Ferrières-sur-Ariège, France
          </li>
          <li>
            Téléphone : <a href="tel:+33651306248">06 51 30 62 48</a>
          </li>
          <li>
            Email :{" "}
            <a href="mailto:Courbesetcouleurs@proton.me">
              Courbesetcouleurs@proton.me
            </a>
          </li>
          <li>TVA non applicable, article 293 B du Code général des impôts</li>
        </ul>
        <p>Directrice de la publication : Cristina Asensio Valero.</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site actuellement publié est hébergé par ChatGPT Sites, un service
          fourni dans l’Espace économique européen par OpenAI Ireland Limited,
          1st Floor, The Liffey Trust Centre, 117-126 Sheriff Street Upper,
          Dublin 1, D01 YC43, Irlande.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          La structure du site ainsi que les textes, créations graphiques,
          photographies, identités visuelles, études de cas, marques et éléments
          qui le composent sont protégés par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, adaptation,
          diffusion ou exploitation, totale ou partielle, sans autorisation
          écrite préalable est interdite.
        </p>
        <p>
          Les projets clients sont présentés avec leur autorisation ou dans le
          respect des droits convenus. Les marques et réalisations concernées
          demeurent la propriété de leurs titulaires respectifs.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Courbes & Couleurs s’efforce de maintenir des informations exactes et
          à jour, sans pouvoir garantir l’absence d’erreur, d’omission ou
          d’interruption. Les liens externes sont proposés à titre informatif ;
          leur contenu demeure sous la responsabilité de leurs éditeurs.
        </p>
      </section>

      <section>
        <h2>Crédits</h2>
        <p>
          Direction artistique, webdesign et contenus : Courbes & Couleurs.
          Développement et intégration réalisés pour Courbes & Couleurs.
        </p>
      </section>
    </LegalPage>
  );
}
