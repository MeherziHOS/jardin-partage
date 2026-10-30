# Préparation du projet – Jardin partagé des Tilleuls

## Organisation – Variante solo

- Formation : Concepteur Développeur d'Applications (CDA)
- Projet : Le Jardin partagé des Tilleuls
- Mode de travail : Solo, conformément aux consignes du formateur
- Compte GitHub : @MeherziHOS
- Rôles : Developer et Scrum Master
- Product Owner : Formateur

## Outils utilisés

- Git et GitHub : versionnement du code
- GitHub Projects : gestion du Product Backlog et des sprints
- VS Code : développement
- Vite : environnement de développement
- Tailwind CSS : mise en forme
- Discord : communication avec le formateurs

## Product Backlog – Estimations

Les estimations sont exprimées en story points selon la suite de Fibonacci.

| Ordre | User Story                               | Points | Priorité |
| ----- | ---------------------------------------- | -----: | -------- |
| 1     | US-01 – En-tête et navigation communs    |      3 | Must     |
| 2     | US-09 – Publication GitHub Pages         |      2 | Must     |
| 3     | US-08 – Charte graphique                 |      3 | Must     |
| 4     | US-02 – Page d'accueil                   |      3 | Must     |
| 5     | US-07 – Pied de page et mentions légales |      2 | Must     |
| 6     | US-03 – Les parcelles                    |      3 | Must     |
| 7     | US-05 – Adhésion                         |      3 | Should   |
| 8     | US-04 – Agenda des ateliers              |      3 | Should   |
| 9     | US-06 – Contact                          |      2 | Could    |
| 10    | US-10 – Le compost                       |      3 | Could    |

Ces estimations sont des propositions réalisées en autonomie, à valider avec le formateur/Product Owner.

## US-10 – Le compost : critères d'acceptation

1. Les consignes de compostage sont clairement présentées et compréhensibles par les visiteurs.
2. Les déchets acceptés et interdits sont affichés dans deux listes distinctes.
3. Les informations sont lisibles sur mobile et ordinateur, avec une navigation accessible au clavier.

## Definition of Done – Définition de « terminé »

Une user story est considérée comme terminée lorsque :

- [ ] Tous les critères d'acceptation sont respectés.
- [ ] `npm run build` fonctionne sans erreur.
- [ ] `npm run lint` fonctionne sans erreur.
- [ ] `npm run format:check` fonctionne sans erreur.
- [ ] Le site est responsive (mobile et ordinateur).
- [ ] La navigation au clavier et le focus visible sont vérifiés.
- [ ] Les contrastes et la validité du HTML sont vérifiés.
- [ ] La pull request est vérifiée en autonomie puis fusionnée dans `main`.
- [ ] La publication GitHub Pages fonctionne correctement.

## Sprint 1 – Préparation

### Organisation

- Mode : variante solo
- Dates : 16 et 17 novembre 2026
- Capacité : à confirmer avec Laurent
- Product Owner : formateur
- Developer / Scrum Master : @MeherziHOS

### Objectif du sprint

Mettre en ligne une première version du site Jardin partagé des Tilleuls, avec une navigation commune, une charte graphique cohérente et une page d'accueil accessible.

### Sprint Backlog

| User Story | Fonctionnalité           | Points |
| ---------- | ------------------------ | -----: |
| US-01      | En-tête et navigation    |      3 |
| US-09      | Publication GitHub Pages |      2 |
| US-08      | Charte graphique         |      3 |
| US-02      | Page d'accueil           |      3 |
| **Total**  |                          | **11** |

### Ordre de réalisation proposé

1. Préparer la navigation commune (US-01).
2. Configurer la charte graphique (US-08).
3. Réaliser la page d'accueil (US-02).
4. Publier et vérifier le site (US-09).

### Suivi

- Daily écrit : issue GitHub #1 « Sprint 1 – Suivi »
- Revue : à confirmer avec Laurent
- Rétrospective : à confirmer avec Laurent
- Rapport de sprint : `docs/rapport-de-sprint.md`

Les estimations et le périmètre du sprint restent à valider avec le formateur.

## Vision du projet

Créer un site vitrine accessible et responsive pour permettre aux habitants de découvrir le Jardin partagé des Tilleuls, ses parcelles, ses ateliers et les modalités d'adhésion.

## Accords de travail – Variante solo

1. Travailler sur une branche dédiée pour chaque user story et passer par une pull request.
2. Vérifier les critères d'acceptation et les tests avant chaque fusion dans `main`.
3. Mettre à jour GitHub Projects et signaler rapidement les blocages au formateur.

## Questions au Product Owner

1. La liste d'attente des parcelles doit-elle être simplement présentée ou consultable sur le site ?
2. Quels horaires devons-nous retenir pour les événements Scrum en variante solo ?
3. Le périmètre proposé de 11 points pour le Sprint 1 est-il validé ?
