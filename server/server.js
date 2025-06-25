const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Configuration des autorisations CORS pour autoriser les requêtes du frontend (par exemple : Vue.js)
const corsOptions = {
  origin: 'http://localhost:8082',
  credentials: true,
};

// Utilisation des middlewares nécessaires
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route d’accueil pour tester si le serveur fonctionne
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue à l'API de TP3 – Forfaits touristiques" });
});

// Connexion à la base de données et synchronisation des modèles Sequelize
const db = require('./app/models');
db.sequelize.sync(); // Utiliser { force: true } si tu veux réinitialiser la base

// Déclaration des routes API pour les forfaits
require('./app/routes/forfait.route')(app);
// Tu peux ajouter d’autres fichiers de routes ici si nécessaire (ex: utilisateurs, commentaires, etc.)

// Démarrage du serveur sur le port spécifié
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Backend Node.js en cours sur http://localhost:${PORT}`);
});
