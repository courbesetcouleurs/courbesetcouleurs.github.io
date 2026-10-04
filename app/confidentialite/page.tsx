import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Courbes & Couleurs",
};

export default function Confidentialite() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Comment Courbes & Couleurs utilise et protège les informations transmises lors d’une prise de contact ou d’une collaboration. Mise à jour du 2 octobre 2026."
    >
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          Le responsable du traitement est Cristina Asensio Valero EI — Courbes
          & Couleurs, 1 avenue de Lestang, 09000 Ferrières-sur-Ariège. Contact :{" "}
          <a href="mailto:Courbesetcouleurs@proton.me">
            Courbesetcouleurs@proton.me
          </a>{" "}
          — <a href="tel:+33651306248">06 51 30 62 48</a>.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Lors d’une demande de devis ou d’un échange, peuvent être collectés :
          nom, prénom, adresse email, téléphone, entreprise, SIREN ou SIRET,
          budget, calendrier et informations utiles à la compréhension du projet.
          Pendant une collaboration sont également traitées les informations
          nécessaires aux devis, contrats, factures, paiements et livraisons.
        </p>
      </section>

      <section>
        <h2>Finalités et bases légales</h2>
        <p>Les données sont utilisées pour :</p>
        <ul>
          <li>répondre aux demandes et préparer une proposition commerciale ;</li>
          <li>organiser et exécuter les prestations commandées ;</li>
          <li>établir les devis, contrats, factures et suivis de règlement ;</li>
          <li>assurer le suivi de la relation client ;</li>
          <li>respecter les obligations comptables, fiscales et légales.</li>
        </ul>
        <p>
          Ces traitements reposent, selon le cas, sur les mesures
          précontractuelles, l’exécution du contrat, le respect d’une obligation
          légale ou l’intérêt légitime à gérer la relation commerciale.
        </p>
      </section>

      <section>
        <h2>Destinataires et prestataires</h2>
        <p>
          Les données sont accessibles uniquement à Courbes & Couleurs et aux
          prestataires nécessaires à leur traitement : Proton pour les échanges
          par email, Abby — Delia Solutions pour les devis, la facturation et le
          suivi administratif, ainsi que l’hébergeur technique du site pour les
          seules données indispensables à son fonctionnement et à sa sécurité.
        </p>
        <p>
          Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des
          fins publicitaires.
        </p>
      </section>

      <section>
        <h2>Durées de conservation</h2>
        <ul>
          <li>
            demandes et prospects sans collaboration : jusqu’à 3 ans après le
            dernier contact ;
          </li>
          <li>
            documents contractuels et éléments nécessaires à la défense des
            droits : pendant la relation, puis jusqu’à 5 ans ;
          </li>
          <li>
            devis acceptés, factures et pièces comptables : 10 ans conformément
            aux obligations légales ;
          </li>
          <li>
            fichiers de projet : pendant la durée nécessaire à la prestation et
            à l’accompagnement convenu, puis selon les besoins d’archivage et de
            preuve.
          </li>
        </ul>
      </section>

      <section>
        <h2>Formulaire et prise de contact</h2>
        <p>
          Les informations saisies pour préparer une demande sont utilisées
          uniquement afin de répondre au message et d’évaluer le projet. Elles
          doivent être exactes et limitées aux informations utiles ; aucune
          donnée sensible ne doit être transmise dans un premier contact.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Selon les conditions prévues par la réglementation, vous pouvez
          demander l’accès, la rectification, l’effacement, la limitation ou la
          portabilité de vos données, et vous opposer à certains traitements. La
          demande peut être adressée à{" "}
          <a href="mailto:Courbesetcouleurs@proton.me">
            Courbesetcouleurs@proton.me
          </a>
          . Une preuve d’identité peut être demandée en cas de doute raisonnable
          sur l’identité du demandeur. Vous pouvez également introduire une
          réclamation auprès de la CNIL.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          À ce jour, le site ne dépose pas volontairement de cookies
          publicitaires ou de mesure d’audience non essentiels. L’hébergeur peut
          toutefois traiter des données techniques indispensables à la sécurité
          et au fonctionnement du service. Si des outils soumis au consentement
          sont ajoutés, cette politique et le mécanisme de choix seront mis à
          jour avant leur activation.
        </p>
      </section>

      <section>
        <h2>Sécurité</h2>
        <p>
          Courbes & Couleurs met en œuvre des mesures raisonnables pour protéger
          les informations contre l’accès non autorisé, la perte ou la
          divulgation. Aucun système ne pouvant garantir une sécurité absolue,
          seules les données nécessaires sont collectées.
        </p>
      </section>
    </LegalPage>
  );
}
