# 📦 Projet TP3 – Gestion des Forfaits (Vue.js + Node.js + MySQL)

Ce projet a été réalisé dans le cadre du **TP3** du cours **Techniques avancées en programmation Web** à l’**AEC Conception et Programmation de Sites Web** – _Collège de Maisonneuve_.

L’objectif est de créer une **application monopage (SPA)** permettant de gérer des **forfaits touristiques** via une interface utilisateur Vue.js et une API backend Node.js utilisant Express et Sequelize.  
Les forfaits incluent des informations complètes telles que **la destination, la ville de départ, le prix, la durée, la description, la photo, et la catégorie**.

---

## 📌 Fonctionnalités principales

- ✅ Affichage de la liste des forfaits touristiques
- ➕ Ajout d’un nouveau forfait
- ✏️ Modification d’un forfait existant
- 🗑️ Suppression d’un forfait
- 📁 Champ **catégorie** intégré pour chaque forfait
- 🖼️ Affichage d’une photo illustrative pour chaque forfait
- 🔗 Communication **frontend ↔ backend** via **API REST**
- 🗃️ Stockage des données en **MySQL** avec **phpMyAdmin**

---

## 🧰 Technologies utilisées

### Frontend

- Vue.js 3 (via Vite)
- Vue Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express
- Sequelize (ORM)
- MySQL

---

## 📁 Structure du projet

### Backend – `backend/`

controllers/
forfait.controller.js ← logique métier (CRUD)
models/
forfait.model.js ← définition du modèle Sequelize
routes/
forfait.routes.js ← définition des routes API
config/
db.config.js ← configuration base de données
server.js ← point d’entrée du serveur

shell
Copy
Edit

### Frontend – `frontend/`

views/
AjouterForfaitView.vue ← formulaire de création
ModifierForfaitView.vue ← formulaire de modification
ListeForfaitsView.vue ← liste de tous les forfaits
ForfaitView.vue ← détails d’un forfait
services/
ForfaitDataService.js ← appels HTTP avec axios
App.vue, main.js, router.js ← configuration Vue

markdown
Copy
Edit

---

## ✅ Étapes réalisées

### 🔧 Backend

- Initialisation : `npm init -y`
- Installation des modules : `express`, `sequelize`, `mysql2`, `cors`
- Connexion à la base de données MySQL
- Création du modèle **Forfait** avec validations :
  - `destination`, `ville_depart`, `prix`, `duree`, `hotel`, `date_depart`, `description`, `photo`, **categorie**
- Mise en place des routes REST :
  - `GET /forfaits`
  - `GET /forfaits/:id`
  - `POST /forfaits`
  - `PUT /forfaits/:id`
  - `DELETE /forfaits/:id`
- Validation des données avec Sequelize et gestion des erreurs

### 🎨 Frontend

- Création du projet avec Vite : `npm create vite@latest`
- Installation des dépendances : `axios`, `vue-router`
- Intégration de **Tailwind CSS**
- Création des vues Vue : liste, ajout, modification, détail
- Affichage de la **catégorie** dans toutes les pages
- Liaison complète avec l’API via Axios

---

## ⚖️ Validation des champs

- Tous les champs sont requis :
  - `destination`, `ville_depart`, `prix`, `duree`, `hotel`, `date_depart`, `description`, `categorie`
- `photo` doit être une URL valide
- `prix` doit être un nombre à virgule (`float`)
- `duree` doit être un entier positif (`integer`)
- Les erreurs de validation sont traitées côté serveur (Sequelize) et affichées côté client (Vue)

---

## 🛠️ Commandes utilisées

### Backend

```bash
npm init -y
npm install express sequelize mysql2 cors
node server.js
ℹ️ Aucun système de migration (sequelize db:migrate) n’a été utilisé.
Les tables ont été créées manuellement via phpMyAdmin.

Frontend
bash
Copy
Edit
npm create vite@latest frontend -- --template vue
cd frontend
npm install
npm install axios vue-router@4
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
💡 Améliorations possibles
🔍 Ajout de filtres (ex : par prix ou par catégorie)

🔐 Authentification pour restreindre les actions à un admin

🌐 Déploiement de l’application avec Vercel, Netlify ou Render

📅 Affichage des forfaits selon les dates disponibles

📸 Upload de fichiers au lieu d’une URL d’image manuelle

👤 Auteur
Projet réalisé par Amirhossein Niakan
TP3 – Gestion de Forfaits Touristiques
AEC Conception et Programmation de Sites Web
Collège de Maisonneuve – Session Été 2025
Professeur : Marcos Sanches
```
