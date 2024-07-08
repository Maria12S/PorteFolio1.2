<template>
  <nav class="nav">
    <div class="iconnav" v-for="item in menuItems" :key="item.title">
      <img :src="item.icon" alt="`Icon for ${item.title}`" />
      <router-link :to="item.link">{{ item.title }}</router-link>
    </div>
  </nav>
</template>
<script>
import maison from '../assets/maison.png'
import mortier from '../assets/mortier.png'
import nouvelles from '../assets/nouvelles.png'
import messagerie from '../assets/application-de-messagerie.png'

export default {
  name: 'Navbar',
  data() {
    return {
      menuItems: [
        { title: 'Accueil', icon: maison, link: '/' },
        { title: 'Compétences', icon: mortier, link: '/competences' },
        { title: 'Projets', icon: nouvelles, link: '/projets' },
        { title: 'Contact', icon: messagerie, link: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.iconnav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.iconnav img {
  width: 60px;
  margin-bottom: 5px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 100px;
}
a {
  color: #b0eef1;
  text-decoration: none;
}
</style>
