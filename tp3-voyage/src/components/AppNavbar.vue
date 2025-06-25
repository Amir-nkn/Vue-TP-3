<template>
  <!-- Barre de navigation principale -->
  <nav class="bg-gray-900 text-white shadow-md fixed w-full z-50 top-0">
    <div
      class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center h-16"
    >
      <!-- Section des liens de navigation -->
      <div class="flex gap-6 text-sm font-medium">
        <RouterLink to="/" class="hover:text-blue-400 transition">
          Accueil
        </RouterLink>
        <RouterLink to="/liste-forfaits" class="hover:text-blue-400 transition">
          Forfaits
        </RouterLink>
        <RouterLink
          to="/ajouter-forfait"
          class="hover:text-blue-400 transition"
        >
          Ajouter
        </RouterLink>
        <RouterLink to="/a-propos" class="hover:text-blue-400 transition">
          À propos
        </RouterLink>
      </div>

      <!-- Section pour la sélection de langue et le bouton de connexion -->
      <div class="flex items-center gap-3">
        <!-- Sélecteur de langue -->
        <select
          v-model="selectedLang"
          class="bg-white text-gray-800 px-2 py-1 rounded text-sm shadow-sm focus:outline-none"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>

        <!-- Bouton de connexion -->
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded shadow"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      // Langue sélectionnée par défaut
      selectedLang: 'fr',
    };
  },
};
</script>
