<template>
  <section id="acceuil">
    <img src="../assets/pp.jpg" alt="photo profil" />
    <div class="texteAcceuil">
      <h1 id="titreacceuil">A propos de moi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta corrupti quidem molestias ea
        voluptates culpa expedita natus nihil, magnam repellat temporibus, quam modi dolores eius
        ipsa architecto tempora voluptate nemo!
        <!--mettre la maitrise des langages-->
      </p>
      <button><router-link to="/contact" id="boutonAcceuil">Dire bonjour</router-link></button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Me'
}
</script>
<style scoped>
#acceuil {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background-color: #0b3480;
  color: white;
  width: 100%;
  margin-top: 100px;
}
#boutonAcceuil {
  color: black;
}
.texteAcceuil {
  margin: 45px;
}
.texteAcceuil h1 {
  font-weight: bold;
  font-size: 32px;
  color: rgb(30, 228, 228);
}
.texteAcceuil p {
  font-weight: 200;
}
.texteAcceuil button {
  height: 45px;
  border-radius: 5px;
  background-color: aqua;
  border-color: #02163b;
}
#acceuil img {
  width: 300px;
  object-fit: cover;
  margin: 30px;
  border-radius: 5px;
  transform: rotate(-8deg);
}
</style>
