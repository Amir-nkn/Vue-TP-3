// Fichier de configuration principale des modèles Sequelize

const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

// Connexion à la base de données avec Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3308, // Spécifie le port utilisé pour la base de données
  operatorAliases: false,
});

const db = {};

// Ajout de Sequelize et de la connexion à l'objet db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Chargement du modèle "forfait"
db.forfaits = require('./forfait.model.js')(sequelize, Sequelize);

// Si d'autres modèles sont ajoutés, les inclure ici également

module.exports = db;
