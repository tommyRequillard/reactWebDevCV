# Plan d'implémentation pour Refonte "Référence Absolue" (Mix 3 Axes)

**Objectif :** Transformer le CV en une expérience mémorable combinant Storytelling, animations Framer Motion et un Terminal interactif caché.
**Architecture :** Ajout de composants partagés (`<ScrollReveal>`, `<TerminalEmulator>`, `<Testimonials>`), intégration d'animations de page avec `AnimatePresence`, et gestion d'état Zustand pour les achievements.
**Outils spécifiques (Tech Stack) :** React 19, TypeScript, framer-motion, Zustand, Vitest/React Testing Library.

---

### Tâche 1 : Mise en place du store Gamification (Zustand)

**Fichiers concernés :**
- À Créer : `src/stores/gamificationStore.ts`
- À Créer : `src/stores/__tests__/gamificationStore.test.ts`

**Étape 1 : Écrire le test (Échec attendu)**
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { useGamificationStore } from '../gamificationStore';

describe('gamificationStore', () => {
  beforeEach(() => {
    useGamificationStore.setState({ achievements: [], hasFoundTerminal: false });
  });

  it('should unlock terminal achievement', () => {
    const { unlockTerminal } = useGamificationStore.getState();
    unlockTerminal();
    expect(useGamificationStore.getState().hasFoundTerminal).toBe(true);
    expect(useGamificationStore.getState().achievements).toContain('Le Hacker');
  });
});
```

**Étape 2 : Vérification du test**
*Commande:* `npm run test src/stores/__tests__/gamificationStore.test.ts`
*Attendu:* ÉCHEC (Fichier introuvable)

**Étape 3 : Implémentation Minimale**
```typescript
import { create } from 'zustand';

interface GamificationState {
  achievements: string[];
  hasFoundTerminal: boolean;
  unlockTerminal: () => void;
}

export const useGamificationStore = create<GamificationState>((set) => ({
  achievements: [],
  hasFoundTerminal: false,
  unlockTerminal: () => set((state) => ({ 
    hasFoundTerminal: true, 
    achievements: state.achievements.includes('Le Hacker') ? state.achievements : [...state.achievements, 'Le Hacker'] 
  })),
}));
```

**Étape 4 : Validation du passage de Test**
*Commande:* `npm run test src/stores/__tests__/gamificationStore.test.ts`
*Attendu:* SUCCÈS

**Étape 5 : Commit**
*Commande:* `git add .` puis `git commit -m "feat: add gamification store with Zustand"`

---

### Tâche 2 : Composant Terminal (Easter Egg)

**Fichiers concernés :**
- À Créer : `src/shared/components/Terminal/TerminalEmulator.tsx`
- À Créer : `src/shared/components/Terminal/__tests__/TerminalEmulator.test.tsx`
- À Modifier : `src/layouts/RootLayout.tsx` (pour ajouter le listener global)

**Étape 1 : Écrire le test (Échec attendu)**
Test vérifiant qu'appuyer sur `Ctrl + \` affiche le texte "Terminal".

**Étape 2 : Vérification du test**
*Commande:* `npm run test src/shared/components/Terminal/__tests__/TerminalEmulator.test.tsx`
*Attendu:* ÉCHEC

**Étape 3 : Implémentation Minimale**
Implémenter le composant et ajouter un `useEffect` sur l'objet `window` pour écouter le keydown. L'ouverture modifie l'état local et appelle `unlockTerminal()` du store.

**Étape 4 : Validation du passage de Test**
*Commande:* `npm run test src/shared/components/Terminal/__tests__/TerminalEmulator.test.tsx`
*Attendu:* SUCCÈS

**Étape 5 : Commit**
*Commande:* `git add .` puis `git commit -m "feat: create TerminalEmulator easter egg"`

---

### Tâche 3 : Composant ScrollReveal (Framer Motion)

**Fichiers concernés :**
- À Créer : `src/shared/components/Animations/ScrollReveal.tsx`

**Étape 1 : Implémentation Minimale**
```tsx
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
```

**Étape 2 : Validation**
Vérifier l'intégration dans `src/features/cv/CvPage.tsx`.

**Étape 3 : Commit**
*Commande:* `git add .` puis `git commit -m "feat: add ScrollReveal animation wrapper"`

---

### Tâche 4 : Section Témoignages (Preuve Sociale)

**Fichiers concernés :**
- À Créer : `src/features/cv/components/Testimonials.tsx`

**Étape 1 : Implémentation Minimale**
Création des cartes pour Vincent Gautier et Maxime CERJAK. (On utilisera les vrais textes dans une étape ultérieure en recherchant le contenu LinkedIn ou en demandant l'input précis).

**Étape 2 : Validation**
Affichage dans `CvPage`.

**Étape 3 : Commit**
*Commande:* `git commit -m "feat: add Testimonials section"`

---

### Tâche 5 : Transitions de Page avec AnimatePresence

**Fichiers concernés :**
- À Modifier : `src/app/router/routes.tsx`
- À Créer : `src/shared/components/Animations/PageTransition.tsx`

**Étape 1 : Implémentation Minimale**
Wrapper les routes avec le HOC `<PageTransition>` qui utilise `<motion.div exit={{ opacity: 0 }}>`.

**Étape 2 : Validation**
Test manuel de navigation.

**Étape 3 : Commit**
*Commande:* `git commit -m "feat: add page transitions with Framer Motion"`
