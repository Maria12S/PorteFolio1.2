<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Modal from '@/components/Modal.vue'
//import AboutView from '@/Views/AboutView.vue'
//import CompetenceView from '@/Views/CompetenceView.vue'
//import ContactView from '@/Views/ContactView.vue'
//import ProjetView from '@/View/ProjetView.vue'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'Mod',
  component: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
<style scoped>
#Mod {
  color: blue;
  text-align: center;
  margin-top: 60px;
}
</style>
