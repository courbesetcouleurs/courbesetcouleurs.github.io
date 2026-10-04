"use client";

import { useState } from "react";

type Offer = {
  name: string;
  price: string;
  for: string;
  features: string[];
  badge?: string;
};

export default function PricingCards({ offers }: { offers: Offer[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="priceGrid" role="radiogroup" aria-label="Choisir une formule">
      {offers.map((offer, index) => {
        const isSelected = selected === offer.name;

        return (
          <article
            className={`${offer.badge ? "popular" : ""} ${isSelected ? "selected" : ""}`.trim()}
            key={offer.name}
            role="radio"
            aria-checked={isSelected}
            tabIndex={0}
            onClick={() => setSelected(offer.name)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelected(offer.name);
              }
            }}
          >
            {offer.badge && <span className="popularBadge">{offer.badge}</span>}
            {isSelected && <span className="selectedBadge">Votre choix</span>}
            <p className="offerNo">0{index + 1}</p>
            <h3>{offer.name}</h3>
            <p className="offerFor">{offer.for}</p>
            <small>À partir de</small>
            <b>{offer.price}</b>
            <ul>
              {offer.features.map((feature, featureIndex) => (
                <li
                  className={featureIndex === 0 && index > 0 ? "includedPack" : ""}
                  key={feature}
                >
                  {featureIndex === 0 && index > 0 ? "Inclus · " : "✓ "}
                  {feature}
                </li>
              ))}
            </ul>
            <a
              className={isSelected || offer.badge ? "btn" : "outlineBtn"}
              href={`/devis?offre=${encodeURIComponent(offer.name)}`}
              onClick={(event) => event.stopPropagation()}
            >
              Parler de cette formule
            </a>
          </article>
        );
      })}
    </div>
  );
}
