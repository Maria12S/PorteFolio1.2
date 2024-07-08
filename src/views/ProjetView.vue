<template>
  <Header />
  <Projet />
  <Footer />
  <!-- <router-link to='#1'>allez a Mon CV </router-link>
      <router-link to="#2">allez a mon cahier des charges</router-link>
      <router-link to"#3"allez a mon portefolio </router-link>

--></template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Projet from '../components/Projet.vue'
export default {
  name: 'ProjetView',
  components: {
    Header,
    Footer,
    Projet
  }
}
</script>

<style scoped>
#projetContenueC {
  background-color: #0b3480;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
  gap: 20px;
  text-align: center;
}
.projetContenue {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
  gap: 20px;
  text-align: center;
}
.Hprojet h1 {
  font-size: 80px;
}

/*
 .projetContenue img {
    border-color: aquamarine;
}
#projetContenueC img{
    border-color: aquamarine;
}
modifier la taille des titres projets
bordure du site*/
</style>
