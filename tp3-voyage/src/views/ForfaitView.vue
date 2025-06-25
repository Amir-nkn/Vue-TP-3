<template>
  <div class="max-w-2xl mx-auto py-10 px-4">
    <div
      v-if="forfait"
      class="bg-white shadow rounded-xl overflow-hidden border border-gray-200"
    >
      <!-- Affichage de l’image du forfait -->
      <img :src="forfait.photo" alt="Photo" class="w-full h-64 object-cover" />

      <!-- Contenu du forfait -->
      <div class="p-5">
        <!-- Destination -->
        <h1 class="text-2xl font-semibold text-teal-700 mb-4">
          {{ forfait.destination }}
        </h1>

        <!-- Informations principales -->
        <div class="space-y-1 text-gray-700 text-sm leading-6">
          <p><strong>Ville de départ :</strong> {{ forfait.ville_depart }}</p>
          <p><strong>Prix :</strong> {{ forfait.prix }} $</p>
          <p><strong>Durée :</strong> {{ forfait.duree }} jours</p>
          <p><strong>Hôtel :</strong> {{ forfait.hotel }}</p>

          <p>
            <strong>Date de départ :</strong>
            {{ formatDate(forfait.date_depart) }}
          </p>

          <p><strong>Catégorie :</strong> {{ forfait.categorie }}</p>
        </div>

        <!-- Description -->
        <div class="mt-4 text-sm text-gray-600">
          <p class="font-medium">Description :</p>
          <p class="mt-1">{{ forfait.description }}</p>
        </div>

        <!-- Boutons d’action : modifier, supprimer, retour -->
        <div class="flex justify-between mt-8 gap-3 flex-wrap">
          <router-link
            :to="`/modifier-forfait/${forfait.id}`"
            class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 text-sm shadow"
          >
            ✏️ Modifier
          </router-link>

          <button
            type="button"
            @click="supprimerForfait"
            class="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 text-sm shadow"
          >
            🗑️ Supprimer
          </button>

          <router-link
            to="/liste-forfaits"
            class="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 text-sm shadow"
          >
            ← Retour à la liste
          </router-link>
        </div>
      </div>
    </div>

    <!-- Affichage en cours de chargement -->
    <div v-else class="text-center text-gray-500 py-10 text-sm">
      ⏳ Chargement...
    </div>
  </div>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService';

export default {
  name: 'ForfaitView',
  data() {
    return {
      forfait: null,
    };
  },
  mounted() {
    // Chargement du forfait depuis l’API selon l’ID de l’URL
    const id = this.$route.params.id;
    ForfaitDataService.get(id)
      .then((res) => {
        this.forfait = res.data;
      })
      .catch((err) => {
        console.error('Erreur lors du chargement du forfait :', err);
      });
  },
  methods: {
    // Formater la date en format localisé français
    formatDate(dateStr) {
      return new Intl.DateTimeFormat('fr-CA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(dateStr));
    },

    // Suppression d’un forfait après confirmation
    supprimerForfait() {
      if (confirm('Voulez-vous vraiment supprimer ce forfait ?')) {
        ForfaitDataService.delete(this.forfait.id)
          .then(() => {
            alert('🗑️ Forfait supprimé avec succès !');
            this.$router.push('/liste-forfaits');
          })
          .catch((err) => {
            console.error('Erreur lors de la suppression du forfait :', err);
            alert('❌ Impossible de supprimer ce forfait.');
          });
      }
    },
  },
};
</script>
