<template>
  <header>
    <div class="header">
      <div class="headercard" v-for="header in headers" :key="header.id">
        <h1>{{ header.title }}</h1>
        <a :href="header.link"><img :src="header.image" alt="image" /></a>
      </div>
      <button class="buttonAcceuil">
        <router-link to="/"
          ><img src="@/assets/bouton-retour.png" alt="bouton-retour" /> Retour à
          l'accueil</router-link
        >
      </button>
    </div>
  </header>
</template>

<script>
import mortier from '../assets/mortier.png'
import nouvelles from '../assets/nouvelles.png'
import messagerie from '../assets/application-de-messagerie.png'

export default {
  name: 'Header',
  data() {
    return {
      headers: [
        {
          id: 1,
          title: 'Mes Competences',
          link: '/competences',
          image: mortier
        },
        {
          id: 2,
          title: 'Mes Projets',
          link: '/projets',
          image: nouvelles
        },
        {
          id: 3,
          title: 'Contact',
          link: '/contact',
          image: messagerie
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header img {
  width: 35px;
}
.header {
  display: flex;
  gap: 30px;
}
.headercard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.headercard h1 {
  font-size: 35px;
}
.buttonAcceuil img {
  width: 15px;
}
.buttonAcceuil a {
  color: black;
  text-decoration: none;
}
.buttonAcceuil {
  height: 45px;
  background-color: aqua;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
</style>
