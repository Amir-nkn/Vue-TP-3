import http from '../http-common';

// Service pour interagir avec l’API des forfaits
class ForfaitDataService {
  // Récupérer tous les forfaits
  getAll() {
    return http.get('/forfaits');
  }

  // Récupérer un forfait spécifique par son ID
  get(id) {
    return http.get(`/forfaits/${id}`);
  }

  // Créer un nouveau forfait
  create(data) {
    return http.post('/forfaits', data);
  }

  // Mettre à jour un forfait existant
  update(id, data) {
    return http.put(`/forfaits/${id}`, data);
  }

  // Supprimer un forfait par son ID
  delete(id) {
    return http.delete(`/forfaits/${id}`);
  }
}

// Exportation d’une instance du service
export default new ForfaitDataService();
