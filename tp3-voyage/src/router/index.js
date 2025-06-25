import { createRouter, createWebHistory } from 'vue-router';

// Importation des différentes vues utilisées dans l'application
import AccueilView from '../views/AccueilView.vue';
import AjouterForfaitView from '../views/AjouterForfaitView.vue';
import ForfaitView from '../views/ForfaitView.vue';
import ModifierForfaitView from '../views/ModifierForfaitView.vue';
import AProposView from '../views/AProposView.vue';
import ListeForfaits from '../views/ListeForfaits.vue';

// Définition des routes de l'application
const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView, // Page d'accueil
  },
  {
    path: '/forfaits',
    name: 'forfaits',
    component: ForfaitView, // Affichage d’un forfait (général ou duplicata avec ID)
  },
  {
    path: '/ajouter-forfait',
    name: 'ajouter-forfait',
    component: AjouterForfaitView, // Formulaire pour ajouter un nouveau forfait
  },
  {
    path: '/forfait/:id',
    name: 'forfait',
    component: ForfaitView, // Détail d’un forfait selon l’ID
  },
  {
    path: '/liste-forfaits',
    name: 'ListeForfaits',
    component: ListeForfaits, // Affichage de la liste complète des forfaits
  },
  {
    path: '/modifier-forfait/:id',
    name: 'modifier-forfait',
    component: ModifierForfaitView, // Formulaire pour modifier un forfait existant
  },
  {
    path: '/a-propos',
    name: 'a-propos',
    component: AProposView, // Page d'informations sur le site
  },
];

// Création et configuration du routeur Vue
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Utilisation de l'historique HTML5
  routes, // Enregistrement des routes définies
});

export default router;
