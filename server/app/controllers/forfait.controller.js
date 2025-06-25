const db = require('../models');
const Forfait = db.forfaits;

//  Récupérer tous les forfaits disponibles
exports.findAll = (req, res) => {
  Forfait.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite en récupérant les forfaits.",
      });
    });
};

//  Créer un nouveau forfait
exports.create = async (req, res) => {
  try {
    // Création du forfait avec les données reçues
    const forfait = await Forfait.create(req.body);
    res.status(201).send(forfait);
  } catch (err) {
    // Erreurs de validation (par exemple : champs manquants ou incorrects)
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).send({
        message: 'Erreur de validation',
        errors: err.errors.map((e) => e.message),
      });
    }

    // Autres erreurs internes
    res.status(500).send({
      message: "Impossible d'ajouter ce forfait.",
    });
  }
};

// Trouver un forfait par son identifiant
exports.findOne = (req, res) => {
  const id = req.params.id;

  // Recherche du forfait avec la clé primaire
  Forfait.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        // Aucun forfait trouvé avec l'ID donné
        res.status(404).send({
          message: `Aucun forfait trouvé avec l'ID = ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Erreur lors de la récupération du forfait',
      });
    });
};

//  Mettre à jour les informations d’un forfait existant
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    // Mise à jour des champs du forfait
    const [updated] = await Forfait.update(req.body, {
      where: { id: id },
    });

    if (updated === 1) {
      // Si la mise à jour a réussi, on renvoie le forfait modifié
      const forfaitModifie = await Forfait.findByPk(id);
      res.send({
        message: '✅ Le forfait a été mis à jour avec succès.',
        data: forfaitModifie,
      });
    } else {
      // Aucun forfait trouvé ou aucune modification faite
      res.status(404).send({
        message: `❌ Aucun forfait trouvé avec l'ID = ${id} ou aucune modification détectée.`,
      });
    }
  } catch (err) {
    // Gestion des erreurs de validation
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).send({
        message: 'Erreur de validation',
        errors: err.errors.map((e) => e.message),
      });
    }

    // Erreurs inattendues
    res.status(500).send({
      message: '❌ Une erreur est survenue lors de la mise à jour du forfait.',
    });
  }
};

// Supprimer un forfait existant
exports.delete = (req, res) => {
  const id = req.params.id;

  // Suppression du forfait avec l’ID donné
  Forfait.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        // Suppression réussie
        res.send({ message: 'Le forfait a été supprimé.' });
      } else {
        // Aucun forfait à supprimer trouvé
        res.send({
          message: `Impossible de supprimer le forfait avec l'ID = ${id}`,
        });
      }
    })
    .catch((err) => {
      // Erreur lors de la suppression
      res.status(500).send({
        message: 'Erreur lors de la suppression du forfait.',
      });
    });
};
