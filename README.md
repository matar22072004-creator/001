# Projet 001 : mon CV avec React et Vite

## Les étapes

### Étape 1 : vérifier que Node.js est installé

Dans le terminal de VS Code, je tape :

```bash
node -v
npm -v
```

Si un numéro de version s'affiche, Node.js et npm sont bien installés.

### Étape 2 : créer le projet avec Vite

```bash
npm create vite@latest 001
```

Ensuite, je choisis :
- framework : **React**
- variante : **JavaScript**

### Étape 3 : aller dans le dossier du projet

```bash
cd 001
```

### Étape 4 : installer les dépendances

```bash
npm install
```

### Étape 5 : lancer le projet

```bash
npm run dev
```

Puis j'ouvre http://localhost:5173 dans le navigateur.

### Étape 6 : créer les composants

Je crée un dossier `components` dans `src`, avec 3 fichiers :
- `InfoPerso.jsx` : mes informations personnelles
- `Competences.jsx` : mes compétences
- `Experiences.jsx` : mes expériences

Un composant est une fonction qui retourne du HTML :

```jsx
function InfoPerso() {
  return (
    <div>
      <h1>Prénom NOM</h1>
    </div>
  )
}

export default InfoPerso
```

### Étape 7 : afficher les composants dans App.jsx

```jsx
import InfoPerso from './components/InfoPerso'
import Competences from './components/Competences'
import Experiences from './components/Experiences'

function App() {
  return (
    <div>
      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  )
}

export default App
```

## Rôle des dossiers et fichiers indispensables

### Les dossiers

- **node_modules** : contient les bibliothèques installées avec `npm install` (React, Vite…). On n'y touche pas.
- **public** : contient les fichiers publics, comme l'icône du site (`favicon.svg`).
- **src** : contient le code de l'application. C'est ici que je travaille.
- **src/assets** : contient les images utilisées dans le code.
- **src/components** : contient mes composants (je l'ai créé moi-même).

### Les fichiers

- **index.html** : la page HTML du site. Elle contient une `div` avec l'id `root` où React affiche l'application.
- **src/main.jsx** : le point de départ de React. Il affiche le composant `App` dans la `div` `root`.
- **src/App.jsx** : le composant principal. Il regroupe les autres composants.
- **src/App.css** : le style du CV.
- **src/index.css** : le style général de la page.
- **package.json** : contient le nom du projet, les bibliothèques utilisées et les commandes (`npm run dev`…).
- **package-lock.json** : garde les versions exactes des bibliothèques installées.
- **vite.config.js** : le fichier de configuration de Vite.
- **.gitignore** : la liste des fichiers que Git doit ignorer (comme `node_modules`).
- **README.md** : ce fichier, qui explique le projet.
