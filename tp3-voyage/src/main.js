// Point d'entrée principal de l'application Vue

import { createApp } from 'vue'; // Importation de la fonction pour créer l'application Vue
import App from './App.vue'; // Composant racine de l'application
import router from './router'; // Fichier de configuration des routes

// Importation des fichiers CSS
import './assets/tailwind.css'; // Fichier CSS généré par Tailwind
import '@fortawesome/fontawesome-free/css/all.css'; // Styles Font Awesome
import '@fortawesome/fontawesome-free/js/all.js'; // Scripts Font Awesome

// Création et montage de l'application Vue avec le routeur
createApp(App).use(router).mount('#app');
