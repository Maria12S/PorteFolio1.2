<template>
  <Header />
  <section class="contactForm">
    <!--mettre un retour à l'acceuil-->
    <p>Lorem ipsum dolor sit amet consectetur eliadipisicingtUGUGUGF</p>
    <form action="mailto:marie.grllt738@gmail.com" method="post">
      <div>
        <label for="name">Nom: </label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label for="prenom">Prénom: </label>
        <input type="text" name="prenom" id="prenom" required />
      </div>

      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label for="message">Message: </label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Envoyer" />
      </div>
    </form>
  </section>

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        prenom: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      if (!this.form.name || !this.form.email || !this.form.prenom || !this.form.message) {
        alert('Veuillez remplir tous les champs.')
        return
      }
      this.form.name = ''
      this.form.prenom = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>
<style scoped>
.contactForm {
  background-color: rgba(11, 52, 128, 0.7);
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
}
form div {
  margin-bottom: 15px;
}
label {
  display: flex;
  font-size: 18px;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}
.submit {
  display: flex;
  justify-content: center;
}

input[type='submit'] {
  background-color: aqua;
  color: black;
  width: 500px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
}
</style>
