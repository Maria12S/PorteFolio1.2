<template>
  <Header />
  <Contact />
  <ContactForm />
  <Footer />
  <!-- <router-link to='#1'>allez a github</router-link>
      <router-link to="#2">allez a Linkedin</router-link>
    

--></template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Contact from '../components/Contact.vue'
import ContactForm from '../components/ContactForm.vue'
export default {
  name: 'ContactView',
  components: {
    Header,
    Footer,
    Contact,
    ContactForm
  }
}
</script>

<style scoped></style>
