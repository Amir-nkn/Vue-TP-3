<template>
  <div class="max-w-screen-xl mx-auto px-6 py-12">
    <!-- Titre principal de la page -->
    <h1 class="text-4xl font-bold text-center text-teal-700 mb-12">
      ✈️ Explorez nos forfaits de rêve
    </h1>

    <!-- Grille de cartes de forfaits -->
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="forfait in forfaits"
        :key="forfait.id"
        class="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
      >
        <!-- Image du forfait -->
        <img
          :src="forfait.photo"
          :alt="`Image de ${forfait.destination}`"
          class="w-full h-56 object-cover"
        />

        <!-- Contenu de la carte -->
        <div class="p-5 space-y-2">
          <!-- Titre du forfait -->
          <h2 class="text-2xl font-bold text-gray-800">
            {{ forfait.destination }}
          </h2>

          <!-- Détails du forfait -->
          <!-- Détails du forfait -->
          <div class="text-gray-600">
            <p>
              <strong>🏙️ Ville de départ :</strong> {{ forfait.ville_depart }}
            </p>
            <p><strong>💰 Prix :</strong> {{ forfait.prix }} $</p>
            <p><strong>📅 Durée :</strong> {{ forfait.duree }} jours</p>
            <p><strong>📂 Catégorie :</strong> {{ forfait.categorie }}</p>
          </div>

          <!-- Lien vers les détails du forfait -->
          <router-link
            :to="`/forfait/${forfait.id}`"
            class="inline-flex items-center mt-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
          >
            🔍 Voir les détails
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService';

export default {
  name: 'ListeForfaits',
  data() {
    return {
      // Tableau contenant la liste des forfaits récupérés depuis l’API
      forfaits: [],
    };
  },
  mounted() {
    // Appel à l’API pour charger tous les forfaits au montage du composant
    ForfaitDataService.getAll()
      .then((res) => {
        this.forfaits = res.data;
      })
      .catch((err) => {
        console.error('Erreur lors du chargement des forfaits :', err);
      });
  },
};
</script>
