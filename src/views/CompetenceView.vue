<template>
  <main>
    <Header />
    <main>
      <section>
        <div class="competenceContenue">
          <img src="../assets/html.png" alt="icone html" />
          <p>
            formation en HTML Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            possimus perspiciatis dolore error praesentium dolorem laudantium provident autem? Id
            alias suscipit molestias deleniti quasi doloremque nesciunt consequuntur iste
            consequatur a?
          </p>
        </div>
      </section>
      <section>
        <div id="competenceCSS">
          <img src="../assets/css.png" alt="icone css" />
          <p>
            formation en CSS Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            possimus perspiciatis dolore error praesentium dolorem laudantium provident autem? Id
            alias suscipit molestias deleniti quasi doloremque nesciunt consequuntur iste
            consequatur a?
          </p>
        </div>
      </section>
      <section>
        <div class="competenceContenue">
          <img src="../assets/javascript.png" alt="icone js" />
          <p>
            formation en Javascript Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            possimus perspiciatis dolore error praesentium dolorem laudantium provident autem? Id
            alias suscipit molestias deleniti quasi doloremque nesciunt consequuntur iste
            consequatur a?
          </p>
        </div>
      </section>
    </main>
  </main>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Competence from '../components/Competence.vue'

export default {
  name: 'CompetenceView',
  components: {
    Header,
    Footer,
    Competence
  }
}
</script>

<style scoped>
.Hcompetences img {
  width: 150px;
}
.Hcompetences h1 {
  font-size: 80px;
}
.buttonAcceuil img {
  width: 30px;
}
.buttonAcceuil a {
  color: black;
  text-decoration: none;
}
.buttonAcceuil {
  background-color: aqua;
  border-radius: 10px;
  display: flex;
}
#competenceCSS {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background-color: #0b3480;
  color: white;
  width: 100%;
  margin-top: 100px;
}
.competenceContenue {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 100%;
  margin-top: 100px;
}
</style>
