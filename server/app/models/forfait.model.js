// Modèle Sequelize avec validation et messages d'erreur personnalisés

module.exports = (connex, Sequelize) => {
  // Définition du modèle "forfait"
  const Forfait = connex.define(
    'forfait',
    {
      // Destination du voyage (obligatoire et non vide)
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'La destination est obligatoire.' },
          notEmpty: { msg: 'La destination ne peut pas être vide.' },
        },
      },

      //  Ville de départ (obligatoire et non vide)
      ville_depart: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'La ville de départ est obligatoire.' },
          notEmpty: { msg: 'La ville de départ ne peut pas être vide.' },
        },
      },

      //  Prix du forfait (doit être un nombre valide)
      prix: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Le prix est obligatoire.' },
          isFloat: { msg: 'Le prix doit être un nombre valide.' },
        },
      },

      //  Durée du séjour en jours (entier positif)
      duree: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'La durée est obligatoire.' },
          isInt: { msg: 'La durée doit être un nombre entier.' },
          min: 1, // Durée minimale = 1 jour
        },
      },

      //  Nom de l'hôtel (obligatoire)
      hotel: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Le nom de l'hôtel est obligatoire." },
          notEmpty: { msg: "Le nom de l'hôtel ne peut pas être vide." },
        },
      },

      //  Date de départ (doit être une date valide)
      date_depart: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'La date de départ est obligatoire.' },
          isDate: { msg: 'La date de départ doit être une date valide.' },
        },
      },

      // Description du forfait (obligatoire)
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'La description est obligatoire.' },
          notEmpty: { msg: 'La description ne peut pas être vide.' },
        },
      },

      // URL de la photo (facultative, mais doit être une URL valide si présente)
      photo: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: { msg: "L'URL de la photo doit être valide." },
        },
      },
      // Catégorie du forfait (obligatoire)
      categorie: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'La catégorie est obligatoire.' },
          notEmpty: { msg: 'La catégorie ne peut pas être vide.' },
        },
      },
    },
    {
      //  Active les colonnes createdAt et updatedAt automatiquement
      timestamps: true,
    }
  );

  return Forfait;
};
