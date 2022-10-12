<template>
  <div id="app" class="col-md-12">
    <div class="bg-light">
      <Header v-if="$route.meta.requiresAuth && !$route.meta.isGUEST" />
      <Sidebar v-if="$route.meta.requiresAuth && !$route.meta.isGUEST" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";

export default {
  name: "app",
  components: {
    Header,
    Sidebar,
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  },
};
</script>
