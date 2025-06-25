module.exports = (app) => {
  const forfait = require('../controllers/forfait.controller.js');
  const router = require('express').Router();

  // Route GET pour récupérer tous les forfaits
  router.get('/', forfait.findAll);

  // Route POST pour créer un nouveau forfait
  router.post('/', forfait.create);

  // Route GET pour récupérer un forfait par ID
  router.get('/:id', forfait.findOne);

  // Route PUT pour mettre à jour un forfait existant
  router.put('/:id', forfait.update);

  // Route DELETE pour supprimer un forfait
  router.delete('/:id', forfait.delete);

  // Enregistrement du routeur sous le chemin /api/forfaits
  app.use('/api/forfaits', router);
};

// Message de confirmation dans la console lors du démarrage du serveur
console.log('Route /api/forfaits bien enregistrée !');
