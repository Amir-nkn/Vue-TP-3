// Configuration de base pour Axios utilisée dans toute l'application

import axios from 'axios';

export default axios.create({
  // URL de base de l'API backend
  baseURL: 'http://localhost:8081/api',

  // En-têtes HTTP par défaut pour toutes les requêtes
  headers: {
    'Content-type': 'application/json',
  },
});
