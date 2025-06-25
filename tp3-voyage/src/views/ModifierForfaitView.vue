<template>
  <div class="max-w-2xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-3xl">
    <h1 class="text-4xl font-bold text-center text-indigo-700 mb-8">
      ✏️ Modifier un forfait
    </h1>

    <!-- Messages -->
    <div v-if="message" class="text-green-600 font-semibold text-center mb-4">
      {{ message }}
    </div>
    <div v-if="error" class="text-red-600 font-semibold text-center mb-4">
      {{ error }}
    </div>

    <form @submit.prevent="updateForfait" class="space-y-6">
      <!-- Destination -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Destination *</label
        >
        <input
          type="text"
          v-model="forfait.destination"
          :class="inputClass(errors.destination)"
          required
        />
        <p v-if="errors.destination" class="text-red-500 text-sm mt-1">
          {{ errors.destination }}
        </p>
      </div>

      <!-- Ville -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Ville de départ *</label
        >
        <input
          type="text"
          v-model="forfait.ville_depart"
          :class="inputClass(errors.ville_depart)"
          required
        />
        <p v-if="errors.ville_depart" class="text-red-500 text-sm mt-1">
          {{ errors.ville_depart }}
        </p>
      </div>

      <!-- Prix et Durée -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700"
            >Prix ($) *</label
          >
          <input
            type="number"
            v-model.number="forfait.prix"
            min="0"
            :class="inputClass(errors.prix)"
            required
          />
          <p v-if="errors.prix" class="text-red-500 text-sm mt-1">
            {{ errors.prix }}
          </p>
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700"
            >Durée (jours) *</label
          >
          <input
            type="number"
            v-model.number="forfait.duree"
            min="1"
            :class="inputClass(errors.duree)"
            required
          />
          <p v-if="errors.duree" class="text-red-500 text-sm mt-1">
            {{ errors.duree }}
          </p>
        </div>
      </div>

      <!-- Hôtel -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Hôtel *</label
        >
        <input
          type="text"
          v-model="forfait.hotel"
          :class="inputClass(errors.hotel)"
          required
        />
        <p v-if="errors.hotel" class="text-red-500 text-sm mt-1">
          {{ errors.hotel }}
        </p>
      </div>

      <!-- Date -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Date de départ *</label
        >
        <input
          type="date"
          v-model="forfait.date_depart"
          :class="inputClass(errors.date_depart)"
          required
        />
        <p v-if="errors.date_depart" class="text-red-500 text-sm mt-1">
          {{ errors.date_depart }}
        </p>
      </div>

      <!-- Description -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Description *</label
        >
        <textarea
          v-model="forfait.description"
          rows="4"
          :class="inputClass(errors.description)"
          required
        ></textarea>
        <p v-if="errors.description" class="text-red-500 text-sm mt-1">
          {{ errors.description }}
        </p>
      </div>

      <!-- Photo -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Photo (URL) *</label
        >
        <input
          type="text"
          v-model="forfait.photo"
          :class="inputClass(errors.photo)"
          required
        />
        <p v-if="errors.photo" class="text-red-500 text-sm mt-1">
          {{ errors.photo }}
        </p>
      </div>

      <!-- ✅ Catégorie -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700"
          >Catégorie *</label
        >
        <select
          v-model="forfait.categorie"
          :class="inputClass(errors.categorie)"
          required
        >
          <option value="">-- Choisir une catégorie --</option>
          <option value="Plage">Plage</option>
          <option value="Aventure">Aventure</option>
          <option value="Culture">Culture</option>
          <option value="Montagne">Montagne</option>
          <option value="Croisière">Croisière</option>
        </select>
        <p v-if="errors.categorie" class="text-red-500 text-sm mt-1">
          {{ errors.categorie }}
        </p>
      </div>

      <!-- Boutons -->
      <div class="flex flex-wrap gap-4 justify-between mt-6 items-center">
        <button
          type="submit"
          class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          💾 Enregistrer
        </button>
        <button
          type="button"
          @click="supprimerForfait"
          class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          🗑️ Supprimer
        </button>
        <router-link
          to="/liste-forfaits"
          class="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          ← Retour à la liste
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService';

export default {
  name: 'ModifierForfaitView',
  data() {
    return {
      forfait: {
        destination: '',
        ville_depart: '',
        prix: '',
        duree: '',
        hotel: '',
        date_depart: '',
        description: '',
        photo: '',
        categorie: '', // ✅ ajouté ici
      },
      message: '',
      error: '',
      errors: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;
    ForfaitDataService.get(id)
      .then((res) => {
        this.forfait = res.data;
      })
      .catch((err) => {
        console.error('Erreur lors du chargement du forfait :', err);
        this.error = '❌ Impossible de charger le forfait.';
      });
  },
  methods: {
    inputClass(hasError) {
      return [
        'mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300',
        hasError ? 'border-red-500' : '',
      ];
    },
    updateForfait() {
      this.message = '';
      this.error = '';
      this.errors = {};

      const f = this.forfait;
      if (!f.destination) this.errors.destination = 'Champ requis';
      if (!f.ville_depart) this.errors.ville_depart = 'Champ requis';
      if (!f.prix || isNaN(f.prix)) this.errors.prix = 'Prix valide requis';
      if (!f.duree || isNaN(f.duree))
        this.errors.duree = 'Durée valide requise';
      if (!f.hotel) this.errors.hotel = 'Champ requis';
      if (!f.date_depart) this.errors.date_depart = 'Champ requis';
      if (!f.description) this.errors.description = 'Champ requis';
      if (!f.photo) this.errors.photo = 'Champ requis';
      if (!f.categorie) this.errors.categorie = 'Champ requis'; // ✅ validation ajoutée

      if (Object.keys(this.errors).length > 0) return;

      const id = this.$route.params.id;
      ForfaitDataService.update(id, this.forfait)
        .then(() => {
          this.message = '✅ Forfait modifié avec succès.';
          setTimeout(() => {
            this.$router.push('/liste-forfaits');
          }, 1000);
        })
        .catch((err) => {
          console.error('Erreur lors de la mise à jour :', err);
          this.error = '❌ Une erreur est survenue.';
        });
    },
    supprimerForfait() {
      const id = this.$route.params.id;
      if (confirm('Êtes-vous sûr de vouloir supprimer ce forfait ?')) {
        ForfaitDataService.delete(id)
          .then(() => {
            this.$router.push('/liste-forfaits');
          })
          .catch((err) => {
            console.error('Erreur lors de la suppression :', err);
            this.error = '❌ Impossible de supprimer le forfait.';
          });
      }
    },
  },
};
</script>
