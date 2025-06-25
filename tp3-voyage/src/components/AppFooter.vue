<template>
  <footer class="bg-gray-900 text-white pt-12 pb-6 mt-20">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Section À propos de l'agence -->
      <div>
        <h2 class="text-lg font-semibold mb-3">À propos</h2>
        <p class="text-sm leading-relaxed text-gray-300">
          Notre agence de voyage vous propose les meilleurs forfaits pour
          explorer le monde.
        </p>
      </div>

      <!-- Section des liens de navigation rapide -->
      <div>
        <h2 class="text-lg font-semibold mb-3">Liens rapides</h2>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/liste-forfaits" class="hover:underline">
              Forfaits
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" class="hover:underline">
              À propos
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Section des réseaux sociaux -->
      <div>
        <h2 class="text-lg font-semibold mb-3">Suivez-nous</h2>
        <div class="flex gap-4">
          <a href="#" class="hover:text-gray-400">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" class="hover:text-gray-400">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" class="hover:text-gray-400">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Mention légale en bas de page -->
    <div
      class="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4"
    >
      &copy; {{ new Date().getFullYear() }} Voyage+. Tous droits réservés.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
