<script>
import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'
import Me from '../components/Me.vue'
import Projet from '../components/Projet.vue'
import Competences from '../components/Competence.vue'
import Contact from '../components/Contact.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    About,
    Me,
    Projet,
    Competences,
    Contact
  }
}
</script>

<template>
  <main>
    <Navbar />
    <About />
    <Me />
    <Projet />
    <Competences />
    <Contact />
    <router-link to="#nav">allez a la barre de navigation</router-link>
    <router-link to="#about">allez a A propos de moi</router-link>
    <router-link to="#projets">allez aux projet </router-link>
    <router-link to="#competence">allez aux competences </router-link>
    <router-link to="#Contact">allez aux contact </router-link>
  </main>
</template>
<style scoped></style>
