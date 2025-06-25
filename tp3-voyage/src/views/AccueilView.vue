<template>
  <div class="max-w-7xl mx-auto py-16 px-6 text-center">
    <!-- Titre principal de bienvenue -->
    <h1 class="text-4xl sm:text-5xl font-bold text-teal-700 mb-6">
      Bienvenue chez Voyage+
    </h1>

    <!-- Phrase d’introduction pour inciter à explorer les forfaits -->
    <p class="text-gray-700 text-lg sm:text-xl mb-10">
      Explorez le monde avec nos forfaits exclusifs et partez à l’aventure en
      toute tranquillité.
    </p>

    <!-- Lien vers la page listant tous les forfaits disponibles -->
    <router-link
      to="/liste-forfaits"
      class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-md transition"
    >
      🌍 Découvrir nos forfaits
    </router-link>

    <!-- Section présentant les avantages de l’agence -->
    <div
      class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
    >
      <!-- Carte : avantage - prix compétitifs -->
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-teal-600 mb-2">
          💰 Prix compétitifs
        </h2>
        <p class="text-gray-600">
          Des voyages à prix abordables pour tous les budgets.
        </p>
      </div>

      <!-- Carte : avantage - service personnalisé -->
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-teal-600 mb-2">
          👥 Service personnalisé
        </h2>
        <p class="text-gray-600">
          Notre équipe est là pour vous accompagner à chaque étape.
        </p>
      </div>

      <!-- Carte : avantage - destinations variées -->
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-teal-600 mb-2">
          ✈️ Destinations variées
        </h2>
        <p class="text-gray-600">
          Découvrez des lieux uniques à travers le monde entier.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccueilView',
};
</script>
