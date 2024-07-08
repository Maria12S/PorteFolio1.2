<template>
  <section>
    <h1 id="titreCompetence">Mes Compétences</h1>
    <div class="competences">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia ex dicta nisi
        inventore? Atque eius molestias excepturi maxime voluptas, accusantium molestiae. Excepturi
        iusto architecto beatae quae veniam atque iste.
      </p>
      <div class="competenceCard" v-for="competence in competences" :key="competence.id">
        <h2>{{ competence.name }}</h2>
        <a :href="competence.link">
          <img :src="competence.image" :alt="`image ${competence.name.toLowerCase()}`" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'

export default {
  name: 'Competence',
  data() {
    return {
      competences: [
        { id: 1, name: 'CSS', link: './experience.html', image: css },
        { id: 2, name: 'HTML', link: './experience.html', image: html },
        { id: 3, name: 'Javascript', link: './experience.html', image: javascript }
      ]
    }
  }
}
</script>

<style scoped>
#titreCompetence {
  font-size: 50px;
  display: flex;
  justify-content: center;
}

.competences {
  font-size: larger;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #0b3480;
}

.competenceCard img {
  width: 150px;
}
section {
  padding: 10px;
}
</style>
