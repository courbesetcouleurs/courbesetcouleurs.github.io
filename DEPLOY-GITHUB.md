# Déploiement GitHub Pages — Courbes & Couleurs

Ce projet est configuré pour produire un export statique Next.js dans le dossier `out/` puis le publier automatiquement avec GitHub Actions.

## Première mise en ligne

1. Envoyer tout le contenu de ce dossier à la racine du dépôt `courbesetcouleurs/courbesetcouleurs.github.io`.
2. Dans GitHub : **Settings → Pages**.
3. Dans **Build and deployment → Source**, sélectionner **GitHub Actions**.
4. Aller dans l'onglet **Actions** et attendre la fin du workflow `Deploy Courbes & Couleurs to GitHub Pages`.
5. Le site sera disponible sur `https://courbesetcouleurs.github.io/`.

## Modifications préparées

- export statique activé dans `next.config.ts` ;
- URLs de l'ancien domaine ChatGPT remplacées temporairement par `https://courbesetcouleurs.github.io` ;
- publication automatique via `.github/workflows/deploy-pages.yml` ;
- fichier `.nojekyll` ajouté pour GitHub Pages.

## Domaine personnalisé

Quand le site est validé sur l'adresse GitHub, configurer ensuite le domaine définitif dans **Settings → Pages → Custom domain**, puis mettre à jour les URLs canoniques / Open Graph / sitemap avec le domaine définitif.
