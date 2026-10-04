"use client";
import { FormEvent, useEffect, useMemo, useState } from "react";
const needs = [
  "Identité visuelle",
  "Stratégie de marque",
  "Refonte d’identité",
  "Web design",
  "Supports print & digitaux",
  "Autre besoin",
];
const budgets = [
  "500 à 1 000 €",
  "1 000 à 2 000 €",
  "2 000 à 4 000 €",
  "Plus de 4 000 €",
  "Je ne sais pas encore",
];
const timings = [
  "Dès que possible",
  "Dans 1 à 2 mois",
  "Dans 3 à 6 mois",
  "Plus tard",
  "Je suis flexible",
];
type Data = {
  offer: string;
  needs: string[];
  business: string;
  project: string;
  budget: string;
  timing: string;
  name: string;
  company: string;
  email: string;
  phone: string;
};
const initial: Data = {
  offer: "",
  needs: [],
  business: "",
  project: "",
  budget: "",
  timing: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};
export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(initial);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offer = params.get("offre");
    const need = params.get("besoin");
    const mappedNeeds: Record<string, string[]> = {
      lancement: ["Identité visuelle"],
      refonte: ["Refonte d’identité"],
      developpement: ["Stratégie de marque", "Supports print & digitaux"],
    };
    setData((current) => ({
      ...current,
      offer: offer || current.offer,
      needs: need && mappedNeeds[need] ? mappedNeeds[need] : current.needs,
    }));
  }, []);
  const valid = useMemo(
    () =>
      step === 1
        ? data.needs.length > 0
        : step === 2
          ? data.business.trim().length > 10 && data.project.trim().length > 20
          : step === 3
            ? Boolean(data.budget && data.timing)
            : Boolean(data.name.trim() && data.email.includes("@")),
    [step, data],
  );
  function toggle(n: string) {
    setData((c) => ({
      ...c,
      needs: c.needs.includes(n)
        ? c.needs.filter((x) => x !== n)
        : [...c.needs, n],
    }));
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const subject = encodeURIComponent(
      `Demande de devis${data.offer ? ` · ${data.offer}` : ""} — ${data.name}${data.company ? ` · ${data.company}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        "Bonjour Cristina,",
        "",
        "Je souhaite vous parler de mon projet.",
        "",
        `Formule sélectionnée : ${data.offer || "À définir ensemble"}`,
        `Besoin(s) : ${data.needs.join(", ")}`,
        `Activité : ${data.business}`,
        `Projet : ${data.project}`,
        `Budget envisagé : ${data.budget}`,
        `Calendrier : ${data.timing}`,
        "",
        `Nom : ${data.name}`,
        `Entreprise : ${data.company || "Non précisée"}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "Non précisé"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:Courbesetcouleurs@proton.me?subject=${subject}&body=${body}`;
  }
  return (
    <form className="quoteForm" onSubmit={submit}>
      <div className="quoteProgress" aria-label={`Étape ${step} sur 4`}>
        <span style={{ width: `${step * 25}%` }} />
      </div>
      <div className="quoteStepLabel">
        <span>Étape {step} sur 4</span>
        <span>{step * 25}%</span>
      </div>
      {data.offer && (
        <div className="selectedOffer" role="status">
          <span>Formule sélectionnée</span>
          <b>{data.offer}</b>
          <small>
            Votre choix est enregistré et restera modifiable après notre
            échange.
          </small>
        </div>
      )}
      {step === 1 && (
        <fieldset>
          <legend>De quoi votre marque a-t-elle besoin ?</legend>
          <p className="quoteHint">Sélectionnez une ou plusieurs réponses.</p>
          <div className="choiceGrid">
            {needs.map((n) => (
              <label
                className={data.needs.includes(n) ? "selected" : ""}
                key={n}
              >
                <input
                  type="checkbox"
                  checked={data.needs.includes(n)}
                  onChange={() => toggle(n)}
                />
                <span>{n}</span>
                <b>{data.needs.includes(n) ? "✓" : "+"}</b>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      {step === 2 && (
        <fieldset>
          <legend>Parlez-moi de votre projet.</legend>
          <p className="quoteHint">
            Quelques phrases suffisent pour comprendre votre activité et ce qui
            doit changer.
          </p>
          <label className="quoteField">
            Votre activité
            <textarea
              value={data.business}
              onChange={(e) => setData({ ...data, business: e.target.value })}
              rows={3}
              placeholder="Que proposez-vous, à qui et depuis quand ?"
            />
          </label>
          <label className="quoteField">
            Votre projet
            <textarea
              value={data.project}
              onChange={(e) => setData({ ...data, project: e.target.value })}
              rows={5}
              placeholder="Pourquoi souhaitez-vous travailler votre marque aujourd’hui ?"
            />
          </label>
        </fieldset>
      )}
      {step === 3 && (
        <fieldset>
          <legend>Quel cadre avez-vous en tête ?</legend>
          <p className="quoteHint">
            Ces réponses m’aident à vous proposer un accompagnement réaliste.
          </p>
          <div className="quoteGroup">
            <span>Budget envisagé</span>
            <div className="choiceGrid compact">
              {budgets.map((x) => (
                <label className={data.budget === x ? "selected" : ""} key={x}>
                  <input
                    type="radio"
                    name="budget"
                    checked={data.budget === x}
                    onChange={() => setData({ ...data, budget: x })}
                  />
                  <span>{x}</span>
                  <b>{data.budget === x ? "✓" : ""}</b>
                </label>
              ))}
            </div>
          </div>
          <div className="quoteGroup">
            <span>Quand aimeriez-vous commencer ?</span>
            <div className="choiceGrid compact">
              {timings.map((x) => (
                <label className={data.timing === x ? "selected" : ""} key={x}>
                  <input
                    type="radio"
                    name="timing"
                    checked={data.timing === x}
                    onChange={() => setData({ ...data, timing: x })}
                  />
                  <span>{x}</span>
                  <b>{data.timing === x ? "✓" : ""}</b>
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      )}
      {step === 4 && (
        <fieldset>
          <legend>Comment puis-je vous recontacter ?</legend>
          <p className="quoteHint">
            Je vous répondrai personnellement sous deux jours ouvrés.
          </p>
          <div className="contactFields">
            <label className="quoteField">
              Nom et prénom
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Votre nom"
                required
              />
            </label>
            <label className="quoteField">
              Entreprise
              <input
                value={data.company}
                onChange={(e) => setData({ ...data, company: e.target.value })}
                placeholder="Nom de votre activité"
              />
            </label>
            <label className="quoteField">
              Adresse email
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="vous@entreprise.fr"
                required
              />
            </label>
            <label className="quoteField">
              Téléphone
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="Optionnel"
              />
            </label>
          </div>
          <div className="quoteSummary">
            <span>Votre demande</span>
            {data.offer && <strong>{data.offer}</strong>}
            <b>{data.needs.join(" · ")}</b>
            <small>
              {data.budget} · {data.timing}
            </small>
          </div>
        </fieldset>
      )}
      <div className="quoteActions">
        {step > 1 && (
          <button
            type="button"
            className="quotePrevious"
            onClick={() => setStep(step - 1)}
          >
            Précédent
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            className="quoteNext"
            disabled={!valid}
            onClick={() => setStep(step + 1)}
          >
            Continuer
          </button>
        ) : (
          <button type="submit" className="quoteNext" disabled={!valid}>
            Préparer mon message
          </button>
        )}
      </div>
      <p className="quotePrivacy">
        Vos informations sont utilisées uniquement pour répondre à votre
        demande. <a href="/confidentialite">En savoir plus</a>.
      </p>
    </form>
  );
}
