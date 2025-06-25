<template>
  <div id="app" class="flex flex-col min-h-screen">
    <!-- Barre de navigation en haut de la page -->
    <AppNavbar />

    <!-- Zone principale qui affichera les vues selon les routes -->
    <main class="flex-grow mt-16">
      <router-view />
    </main>

    <!-- Pied de page -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
/* Style global du corps de la page */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
