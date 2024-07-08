<template>
  <section>
    <h1 id="titreprojet">Mes Projets</h1>
    <div class="projets">
      <div
        class="projetcard"
        v-for="projet in projects"
        :key="projet.id"
        @click="openModal(projet, $event)"
      >
        <h2>{{ projet.title }}</h2>
        <a :href="projet.link"><img :src="projet.image" alt="image" /></a>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal()"> &times; </span>
        <h2>{{ currentProject.title }}</h2>
        <p>date de création: {{ currentProject.creationDate }},</p>
        <p>technologies utilisées:{{ currentProject.technologies }}</p>
        <p>lien repository: {{ currentProject.repoLink }}</p>
        <button class="modal-close-btn" @click="closeModal()">Fermer</button>
      </div>
    </div>
  </section>
</template>
<script>
import Capture from '../assets/Capture.png'

export default {
  name: 'Projet',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Mon CV',
          link: '/',
          image: Capture,
          creationDate: '2020',
          technologies: 'HTML, CSS, JavaScript',
          repoLink: 'https://github.com/moncv'
        },
        {
          id: 2,
          title: 'Cahier des charges',
          link: '/',
          image: Capture,
          creationDate: '2021',
          technologies: 'Vue.js, Vuetify',
          repoLink: 'https://github.com/cahierdescharges'
        },
        {
          id: 3,
          title: 'Mon portefolio',
          link: '/',
          image: Capture,
          creationDate: '2022',
          technologies: 'React, Material-UI',
          repoLink: 'https://github.com/monportfolio'
        }
      ],
      showModal: false,
      currentProject: null
    }
  },
  methods: {
    openModal(projet, event) {
      event.preventDefault()
      event.stopPropagation()
      this.currentProject = projet
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
<style scoped>
.projets {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.projetcard img {
  width: 300px;
}
#titreprojet {
  font-size: 50px;
  display: flex;
  justify-content: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  color: black;
}
.close {
  color: aqua;
  font-size: 50px;
}
</style>
