# Conception : CV Web "Référence Absolue" (Mix 3 Axes)

Ce document détaille la conception d'une mise à jour majeure du portfolio, visant à le positionner comme une véritable référence. Il combine trois axes stratégiques : le **Storytelling** (pour rassurer et connecter), les **Effets Wow** (pour démontrer l'expertise UI/UX front-end) et la **Gamification** (pour marquer les esprits).

## 1. Composants et Fonctionnalités (Ce qui va changer)

### A. Storytelling (La Connexion Humaine)
L'objectif est de transformer une liste de compétences en une histoire captivante.
*   **Nouvelle section "Mon Histoire" (Hero & About)** : Introduction plus personnelle sur votre vision du métier (le pont entre Dev et Cybersécurité).
*   **Timeline Interactive** : Refonte de la présentation des expériences et diplômes sous forme de ligne de temps interactive que l'on déroule au scroll.
*   **Preuve Sociale (Témoignages)** : Ajout d'un carrousel ou d'une grille de citations/recommandations de personnes avec qui vous avez travaillé.

### B. Effets Wow (La Démonstration Technique Front-End)
Nous allons utiliser `framer-motion` (très standard et performant) pour apporter une finition "Premium".
*   **Scroll Reveal** : Les éléments (cartes, textes) n'apparaissent plus d'un coup, mais glissent avec un fondu (fade-in/slide-up) au fur et à mesure que l'utilisateur défile.
*   **Transitions de Page** : Finis les changements de page abrupts. Un effet de transition doux accompagnera chaque clic dans la barre de navigation.
*   **Effets Magnétiques & Curseur** : Des boutons qui "collent" légèrement au curseur de la souris (magnetic hover), et un halo lumineux ou effet "glass" subtil autour des cartes au survol.

### C. Gamification (L'aspect Mémorable & Cybersécurité)
C'est ici que l'on se démarque de 99% des autres portfolios.
*   **Terminal "Easter Egg"** : Un mini-terminal rétro (style hacker) caché. Il peut s'ouvrir via un raccourci clavier (ex: `Ctrl + \`) ou en cliquant sur votre nom/logo. L'utilisateur pourra y taper des commandes (`whoami`, `skills`, `clear`, `contact`) pour interagir avec le site d'une façon ludique.
*   **Système d'Achievements (Succès) Légers** : De petites notifications discrètes (Toasts) qui félicitent le visiteur lorsqu'il explore. Exemples : 
    *   *Succès déverrouillé : "L'Explorateur"* (Visiter toutes les pages).
    *   *Succès déverrouillé : "Le Hacker"* (Trouver le terminal caché).

---

## 2. Architecture & Choix Techniques

*   **Librairie d'Animation** : Installation et configuration de `framer-motion`. C'est la référence dans l'écosystème React pour les "Effets Wow".
*   **Gestion d'État (Gamification)** : Utilisation d'un store léger existant (ou Context API) pour mémoriser les "Achievements" obtenus par le visiteur afin d'éviter qu'ils ne se déclenchent à chaque rechargement.
*   **Nouveaux Composants Partagés (`src/shared/components`)** :
    *   `<ScrollReveal>` : Un composant englobant réutilisable pour animer les enfants au scroll.
    *   `<TerminalEmulator />` : Le composant overlay pour l'Easter Egg.
    *   `<AchievementToast />` : Pour les notifications de gamification.
*   **Mise à jour du Routeur (`src/app/router/routes.tsx`)** : Envelopper le routeur avec `<AnimatePresence>` pour gérer les transitions de sortie et d'entrée des pages.

---

## User Review Required

> [!IMPORTANT]
> Avant de valider cette conception et de passer à la rédaction du plan d'implémentation détaillé (étape par étape), j'ai besoin de votre accord sur ces choix.

**Questions Ouvertes :**
1. **Framer Motion** : Êtes-vous d'accord pour ajouter la dépendance `framer-motion` au projet pour gérer toutes les animations et transitions ?
2. **Contenu Témoignages** : Avez-vous déjà des recommandations (ex: LinkedIn) que nous pourrions intégrer, ou devrons-nous utiliser des placeholders (texte de remplacement) en attendant ?
3. **Le Terminal** : L'idée du terminal caché correspond-elle bien à l'image technique/cybersécurité que vous souhaitez dégager ?

Si cette conception globale vous convient (ou si vous souhaitez y apporter des modifications), faites-le moi savoir. Une fois validée, j'enregistrerai ce document dans vos dossiers locaux et nous passerons au plan technique d'implémentation.
