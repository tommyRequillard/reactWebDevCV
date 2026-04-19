# Conception : CV Web "Référence Absolue" (Mix 3 Axes)

Ce document détaille la conception d'une mise à jour majeure du portfolio, visant à le positionner comme une véritable référence. Il combine trois axes stratégiques : le **Storytelling** (pour rassurer et connecter), les **Effets Wow** (pour démontrer l'expertise UI/UX front-end) et la **Gamification** (pour marquer les esprits).

## 1. Composants et Fonctionnalités (Ce qui va changer)

### A. Storytelling (La Connexion Humaine)
L'objectif est de transformer une liste de compétences en une histoire captivante.
*   **Nouvelle section "Mon Histoire" (Hero & About)** : Introduction plus personnelle sur votre vision du métier (le pont entre Dev et Cybersécurité).
*   **Timeline Interactive** : Refonte de la présentation des expériences et diplômes sous forme de ligne de temps interactive que l'on déroule au scroll.
*   **Preuve Sociale (Témoignages)** : Ajout d'un carrousel de citations/recommandations de personnes avec qui le développeur a travaillé (Vincent Gautier et Maxime CERJAK issus de LinkedIn).

### B. Effets Wow (La Démonstration Technique Front-End)
Utilisation de `framer-motion` pour apporter une finition "Premium".
*   **Scroll Reveal** : Les éléments (cartes, textes) n'apparaissent plus d'un coup, mais glissent avec un fondu (fade-in/slide-up) au fur et à mesure que l'utilisateur défile.
*   **Transitions de Page** : Un effet de transition doux accompagnera chaque clic dans la barre de navigation.
*   **Effets Magnétiques & Curseur** : Des boutons qui "collent" légèrement au curseur de la souris (magnetic hover), et un halo lumineux ou effet "glass" subtil autour des cartes au survol.

### C. Gamification (L'aspect Mémorable & Cybersécurité)
*   **Terminal "Easter Egg"** : Un mini-terminal rétro (style hacker) caché. Il peut s'ouvrir via un raccourci clavier (ex: `Ctrl + \`) ou en cliquant sur votre nom/logo. L'utilisateur pourra y taper des commandes (`whoami`, `skills`, `clear`, `contact`) pour interagir avec le site d'une façon ludique.
*   **Système d'Achievements (Succès) Légers** : De petites notifications discrètes (Toasts) qui félicitent le visiteur lorsqu'il explore. Exemples : 
    *   *Succès déverrouillé : "L'Explorateur"* (Visiter toutes les pages).
    *   *Succès déverrouillé : "Le Hacker"* (Trouver le terminal caché).

---

## 2. Architecture & Choix Techniques

*   **Librairie d'Animation** : Installation et configuration de `framer-motion`.
*   **Gestion d'État (Gamification)** : Utilisation d'un store léger existant (ou Context API) pour mémoriser les "Achievements" obtenus par le visiteur.
*   **Nouveaux Composants Partagés (`src/shared/components`)** :
    *   `<ScrollReveal>` : Un composant englobant réutilisable pour animer les enfants au scroll.
    *   `<TerminalEmulator />` : Le composant overlay pour l'Easter Egg.
    *   `<AchievementToast />` : Pour les notifications de gamification.
*   **Mise à jour du Routeur (`src/app/router/routes.tsx`)** : Envelopper le routeur avec `<AnimatePresence>` pour gérer les transitions de sortie et d'entrée des pages.

---
*Conception validée par l'utilisateur le 2026-04-19.*
