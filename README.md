# Mon CV en React avec TypeScript et Tailwind CSS

Ce modèle vous offre une configuration minimale pour créer votre CV en utilisant React, TypeScript, et Tailwind CSS avec
Vite. Il inclut la prise en charge du Hot Module Replacement (HMR) et quelques règles ESLint pour vous aider à maintenir
un code propre.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  utilise [Babel](https://babeljs.io/) pour le Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour le
  Fast Refresh.

## Personnalisation du modèle

1. **Configuration ESLint :** Pour personnaliser les règles ESLint pour votre projet CV, suivez ces étapes :

    - Configurez la propriété `parserOptions` de niveau supérieur comme ceci dans votre fichier ESLint `.eslintrc.js` :

      ```js
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
      ```

    - Remplacez `plugin:@typescript-eslint/recommended` par `plugin:@typescript-eslint/recommended-type-checked`
      ou `plugin:@typescript-eslint/strict-type-checked`.

    - En option, ajoutez `plugin:@typescript-eslint/stylistic-type-checked`.

    - Installez [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) et
      ajoutez `plugin:react/recommended` & `plugin:react/jsx-runtime` à la liste `extends`.

2. ** CV :** ceci est mon cv et portfolio afin de montrer mes capacités en développement web. Vous pouvez le modifier
   pour qu'il corresponde à votre profil.
