"use client";

import { useEffect, useRef, useState } from "react";

const FORM_ORIGIN = "https://devis-courbesetcouleurs.netlify.app/";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState(FORM_ORIGIN);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== "https://devis-courbesetcouleurs.netlify.app") return;

      event.preventDefault();
      setSrc(url.toString());
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="contactModalBackdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setOpen(false);
    }}>
      <div
        className="contactModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        ref={dialogRef}
      >
        <div className="contactModalBar">
          <div>
            <span className="contactModalEyebrow">Demande de devis</span>
            <strong id="contact-modal-title">Racontez-moi votre projet</strong>
          </div>
          <button ref={closeRef} className="contactModalClose" type="button" onClick={() => setOpen(false)} aria-label="Fermer le formulaire">
            ×
          </button>
        </div>
        <iframe
          className="contactModalFrame"
          src={src}
          title="Formulaire de demande de devis Courbes & Couleurs"
          loading="eager"
        />
        <div className="contactModalFallback">
          <span>Un souci d’affichage ?</span>
          <a href={src} target="_blank" rel="noreferrer">Ouvrir le formulaire dans une nouvelle page</a>
        </div>
      </div>
    </div>
  );
}
