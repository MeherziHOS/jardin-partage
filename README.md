# Le Jardin partagé des Tilleuls

Site vitrine de l'association « Le Jardin partagé des Tilleuls » : présenter le jardin, ses parcelles et ses règles, l'agenda des ateliers du samedi, l'adhésion, le contact et les mentions légales.

Projet de formation réalisé en solo avec Scrum, en HTML et Tailwind CSS avec Vite, sans JavaScript.

## Liens

- Site en ligne : https://MeherziHOS.github.io/jardin-partage/ (publication à vérifier)
- Tableau GitHub Projects : https://github.com/users/MeherziHOS/projects/2
- Version livrée : `v0.1.0` (à confirmer à la livraison)

## L'équipe

## L'équipe

| Membre          | Compte GitHub | Responsabilités                         |
| --------------- | ------------- | --------------------------------------- |
| Khaoula Meherzi | @MeherziHOS   | Developer, Scrum Master (variante solo) |

Le projet est réalisé individuellement pour le moment, conformément aux consignes du formateur. Le rôle de Product Owner est assuré par le formateur.

## Installation

Prérequis : Node.js 24 (version LTS), Git, VS Code (extensions recommandées proposées à l'ouverture du dossier).

```powershell
cd C:\dev
git clone https://github.com/MeherziHOS/jardin-partage.git
cd jardin-partage
npm install
```

## Lancement

| Commande               | Rôle                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `npm run dev`          | serveur de développement (http://localhost:5173), Ctrl+C pour l'arrêter |
| `npm run build`        | construit le site dans `dist/`                                          |
| `npm run preview`      | affiche le contenu de `dist/` comme en ligne                            |
| `npm run lint`         | analyse le code avec ESLint                                             |
| `npm run format`       | formate tous les fichiers avec Prettier                                 |
| `npm run format:check` | vérifie le formatage sans rien modifier                                 |

## Structure du projet

```text
jardin-partage/
├── .github/
│   ├── ISSUE_TEMPLATE/user-story.md   ← modèle d'issue « User story »
│   ├── pull_request_template.md       ← modèle de pull request
│   └── workflows/deploy.yml           ← publication sur GitHub Pages
├── docs/rapport-de-sprint.md          ← modèle du rapport de sprint (après chaque revue)
├── src/style.css                      ← Tailwind CSS et le thème (@theme) de la charte
├── index.html                         ← une page = un fichier
├── parcelles.html
├── agenda.html
├── adhesion.html
├── contact.html
├── mentions-legales.html
└── vite.config.js                     ← liste des pages du site (rolldownOptions.input)
```

Une nouvelle page (par exemple `compost.html`) s'ajoute aussi dans `vite.config.js` et dans la navigation de toutes les pages.

## Règles de l'équipe

1. Une user story = une issue = une branche = une pull request.
2. Aucun développement directement sur `main` : branche protégée, pull request obligatoire et 0 approbation requise (variante solo).
3. Avant de créer une branche : `git switch main` puis `git pull`.
4. Branches nommées `us-NN-mot-cle` (exemple : `us-03-parcelles`).
5. Messages de commit en français, à l'infinitif : « Ajouter le tableau des ateliers ».
6. Chaque pull request contient `Closes #N` (N = numéro réel de l'issue). Une auto-vérification est effectuée avant la fusion.
7. Le tableau GitHub Projects est tenu à jour : déplacement des cartes et suivi des tâches.
8. Daily écrit : un commentaire sur l'issue « Sprint 1 – Suivi », selon les horaires définis.
9. Tout blocage important est signalé au formateur.
10. Les modifications sont vérifiées avant chaque fusion dans `main`.

## Définition de « terminé »

Une user story est terminée quand :

- [ ] ses critères d'acceptation sont remplis ;
- [ ] `npm run build`, `npm run lint` et `npm run format:check` passent sans erreur ;
- [ ] la page est lisible sur téléphone (375 px) et sur ordinateur ;
- [ ] la page s'utilise entièrement au clavier, avec un focus visible ;
- [ ] les contrastes sont vérifiés (4,5:1 pour le texte) et aucune information ne passe par la seule couleur ;
- [ ] le HTML est valide (https://validator.w3.org/) ;
- [ ] la pull request est vérifiée en autonomie puis fusionnée dans `main` ;
- [ ] le site en ligne est à jour (publication GitHub Pages réussie).

Le modèle de pull request reprend les six premiers critères : ils sont vérifiés avant la fusion. Les deux derniers sont vérifiés après la fusion.

Dans cette variante solo, la définition de « terminé » peut être améliorée à la suite des rétrospectives, avec validation du formateur si nécessaire.

## Événements des sprints

| Sprint   | Planification | Daily écrit                  | Revue PO    | Rétrospective |
| -------- | ------------- | ---------------------------- | ----------- | ------------- |
| Sprint 1 | 16/11/2026    | Heure à confirmer – Issue #1 | À confirmer | À confirmer   |
| Sprint 2 | À confirmer   | Heure à confirmer            | À confirmer | À confirmer   |

Après chaque revue, le Scrum Master publie le **rapport de sprint** sur l'issue de suivi, avec le modèle `docs/rapport-de-sprint.md`.
