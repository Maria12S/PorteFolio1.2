<template>
  <section>
    <h1 id="titreContact">Contact</h1>
    <div class="Contact">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ex rerum enim iste hic
        dolorem, consequuntur perferendis voluptas veniam culpa? Consequatur placeat deserunt
        molestias officiis sed praesentium veniam! Qui, modi?
      </p>
      <div class="contacts">
        <div class="Contactcard" v-for="Contact in Contacts" :key="Contact.id">
          <h2>{{ Contact.title }}</h2>
          <a :href="Contact.link"><img class="imgCard" :src="Contact.image" alt="image" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'

export default {
  name: 'Contact',
  data() {
    return {
      Contacts: [
        {
          id: 1,
          title: 'Linkedin',
          link: 'https://www.linkedin.com/pulse/linkedin-est-un-r%C3%A9seau-social-professionnel-qui-se-par-gaud-/',
          image: Linkedin
        },
        {
          id: 2,
          title: 'Github',
          link: 'https://github.com/Maria12S',
          image: Github
        }
      ]
    }
  }
}
</script>
<style scoped>
#titreContact {
  font-size: 50px;
  display: flex;
  justify-content: center;
}
/*changer*/
.imgCard {
  width: 50px;
}
.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
}
p {
  font-weight: 200;
}
section {
  padding: 10px;
}
</style>
