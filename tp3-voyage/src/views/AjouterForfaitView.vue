<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    <!-- Titre principal -->
    <h1 class="text-2xl font-bold text-center mb-6 text-teal-700">
      Ajouter un nouveau forfait
    </h1>

    <!-- Formulaire d'ajout de forfait -->
    <form @submit.prevent="ajouterForfait" class="space-y-4">
      <!-- Champ : Destination -->
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Destination</label
        >
        <input
          type="text"
          v-model="form.destination"
          :class="inputClass(errors.destination)"
        />
        <p v-if="errors.destination" class="text-red-500 text-sm mt-1">
          {{ errors.destination }}
        </p>
      </div>

      <!-- Champ : Ville de départ -->
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Ville de départ</label
        >
        <input
          type="text"
          v-model="form.ville_depart"
          :class="inputClass(errors.ville_depart)"
        />
        <p v-if="errors.ville_depart" class="text-red-500 text-sm mt-1">
          {{ errors.ville_depart }}
        </p>
      </div>

      <!-- Champs : Prix et Durée -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Prix</label>
          <input
            type="number"
            v-model="form.prix"
            :class="inputClass(errors.prix)"
          />
          <p v-if="errors.prix" class="text-red-500 text-sm mt-1">
            {{ errors.prix }}
          </p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Durée</label>
          <input
            type="number"
            v-model="form.duree"
            :class="inputClass(errors.duree)"
          />
          <p v-if="errors.duree" class="text-red-500 text-sm mt-1">
            {{ errors.duree }}
          </p>
        </div>
      </div>

      <!-- Champ : Hôtel -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Hôtel</label>
        <input
          type="text"
          v-model="form.hotel"
          :class="inputClass(errors.hotel)"
        />
        <p v-if="errors.hotel" class="text-red-500 text-sm mt-1">
          {{ errors.hotel }}
        </p>
      </div>

      <!-- Champ : Date de départ -->
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Date de départ</label
        >
        <input
          type="date"
          v-model="form.date_depart"
          :class="inputClass(errors.date_depart)"
        />
        <p v-if="errors.date_depart" class="text-red-500 text-sm mt-1">
          {{ errors.date_depart }}
        </p>
      </div>

      <!-- Champ : Description -->
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          v-model="form.description"
          :class="inputClass(errors.description)"
        ></textarea>
        <p v-if="errors.description" class="text-red-500 text-sm mt-1">
          {{ errors.description }}
        </p>
      </div>

      <!-- Champ : Photo -->
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Photo (URL)</label
        >
        <input
          type="text"
          v-model="form.photo"
          :class="inputClass(errors.photo)"
        />
        <p v-if="errors.photo" class="text-red-500 text-sm mt-1">
          {{ errors.photo }}
        </p>
      </div>

      <!-- Champ : Catégorie -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Catégorie</label>
        <select
          v-model="form.categorie"
          :class="inputClass(errors.categorie)"
          class="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300"
        >
          <option value="">-- Choisissez une catégorie --</option>
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

      <!-- Bouton submit -->
      <button
        type="submit"
        class="w-full mt-4 bg-teal-600 text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition"
      >
        Ajouter
      </button>
    </form>

    <!-- Message de succès -->
    <div v-if="message" class="mt-4 text-green-600 font-medium text-center">
      {{ message }}
    </div>

    <!-- Message d'erreur -->
    <div v-if="error" class="mt-4 text-red-600 font-medium text-center">
      {{ error }}
    </div>
  </div>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService';

export default {
  name: 'AjouterForfaitView',
  data() {
    return {
      form: {
        destination: '',
        ville_depart: '',
        prix: '',
        duree: '',
        hotel: '',
        date_depart: '',
        description: '',
        photo: '',
        categorie: '', // Ajout du champ ici
      },
      message: '',
      error: '',
      errors: {},
    };
  },
  methods: {
    inputClass(hasError) {
      return [
        'mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300',
        hasError ? 'border-red-500' : '',
      ];
    },
    ajouterForfait() {
      this.message = '';
      this.error = '';
      this.errors = {};

      // Validation manuelle
      if (!this.form.destination) this.errors.destination = 'Champ requis';
      if (!this.form.ville_depart) this.errors.ville_depart = 'Champ requis';
      if (!this.form.prix || isNaN(this.form.prix))
        this.errors.prix = 'Prix valide requis';
      if (!this.form.duree || isNaN(this.form.duree))
        this.errors.duree = 'Durée valide requise';
      if (!this.form.hotel) this.errors.hotel = 'Champ requis';
      if (!this.form.date_depart) this.errors.date_depart = 'Champ requis';
      if (!this.form.description) this.errors.description = 'Champ requis';
      if (!this.form.photo) this.errors.photo = 'Champ requis';
      if (!this.form.categorie) this.errors.categorie = 'Champ requis';

      if (Object.keys(this.errors).length > 0) return;

      // Envoi au backend
      ForfaitDataService.create(this.form)
        .then(() => {
          this.message = '✅ Forfait ajouté avec succès !';
          this.resetForm();
        })
        .catch((err) => {
          console.error(err);
          this.error = '';
          if (err.response && err.response.data && err.response.data.errors) {
            err.response.data.errors.forEach((e) => {
              const field = e.path;
              if (Object.prototype.hasOwnProperty.call(this.form, field)) {
                this.errors[field] = e.message;
              } else {
                this.error += e.message + '\n';
              }
            });
          } else {
            this.error =
              "❌ Une erreur s'est produite lors de l'ajout du forfait.";
          }
        });
    },
    resetForm() {
      this.form = {
        destination: '',
        ville_depart: '',
        prix: '',
        duree: '',
        hotel: '',
        date_depart: '',
        description: '',
        photo: '',
        categorie: '',
      };
      this.errors = {};
    },
  },
};
</script>
