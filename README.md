# Le Jardin partagé des Tilleuls

Site vitrine de l'association « Le Jardin partagé des Tilleuls » : présenter le jardin, ses parcelles et ses règles, l'agenda des ateliers du samedi, l'adhésion, le contact et les mentions légales.

Projet de formation réalisé en équipe avec Scrum, en HTML et Tailwind CSS avec Vite, sans JavaScript.

## Liens

- Site en ligne : https://PSEUDO.github.io/jardin-partage/ (à compléter après la première publication)
- Tableau GitHub Projects : (à compléter)
- Version livrée : `v0.1.0` (à compléter à la livraison)

## L'équipe

| Membre | Compte GitHub | Responsabilités                     |
| ------ | ------------- | ----------------------------------- |
| Prénom | @pseudo       | Developer, Scrum Master du sprint 1 |
| Prénom | @pseudo       | Developer, Scrum Master du sprint 2 |
| Prénom | @pseudo       | Product Owner                       |

## Installation

Prérequis : Node.js 24 (version LTS), Git, VS Code (extensions recommandées proposées à l'ouverture du dossier).

```powershell
cd C:\dev
git clone https://github.com/PSEUDO/jardin-partage.git
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
2. Personne ne travaille directement sur `main` : la branche est protégée (pull request et une approbation obligatoires).
3. Avant de créer une branche : `git switch main` puis `git pull`.
4. Branches nommées `us-NN-mot-cle` (exemple : `us-03-parcelles`).
5. Messages de commit en français, à l'infinitif : « Ajouter le tableau des ateliers ».
6. Chaque pull request contient `Closes #N` (N = numéro de l'issue) et est relue par un coéquipier.
7. Le tableau GitHub Projects est tenu à jour : chacun déplace ses cartes et coche les tâches de ses issues (section « Tâches »).
8. Daily écrit : un commentaire par personne et par sprint sur l'issue de suivi du sprint, avant l'heure limite commune (tableau des événements).
9. Un blocage de plus de 30 minutes se signale tout de suite dans la conversation Teams de l'équipe.
10. Les relectures sont bienveillantes et précises : on commente le code, jamais la personne.

## Définition de « terminé »

Une user story est terminée quand :

- [ ] ses critères d'acceptation sont remplis ;
- [ ] `npm run build`, `npm run lint` et `npm run format:check` passent sans erreur ;
- [ ] la page est lisible sur téléphone (375 px) et sur ordinateur ;
- [ ] la page s'utilise entièrement au clavier, avec un focus visible ;
- [ ] les contrastes sont vérifiés (4,5:1 pour le texte) et aucune information ne passe par la seule couleur ;
- [ ] le HTML est valide (https://validator.w3.org/) ;
- [ ] la pull request est relue, approuvée par un coéquipier et fusionnée dans `main` ;
- [ ] le site en ligne est à jour (publication GitHub Pages réussie).

Le modèle de pull request reprend les six premières lignes : le relecteur les vérifie avant d'approuver. Les deux dernières se vérifient après la fusion.

L'équipe peut compléter cette définition : toute modification est décidée ensemble, par exemple en rétrospective, et reportée dans le modèle de pull request.

## Événements des sprints

| Sprint   | Planification | Daily écrit (heure limite)                | Revue avec le Product Owner | Rétrospective |
| -------- | ------------- | ----------------------------------------- | --------------------------- | ------------- |
| Sprint 1 | (date, heure) | avant (heure), issue « Sprint 1 – suivi » | (date, heure)               | (date, heure) |
| Sprint 2 | (date, heure) | avant (heure), issue « Sprint 2 – suivi » | (date, heure)               | (date, heure) |

Après chaque revue, le Scrum Master publie le **rapport de sprint** sur l'issue de suivi, avec le modèle `docs/rapport-de-sprint.md`.
