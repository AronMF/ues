<template>
  <div>

    <nav-component></nav-component>
    <home-component></home-component>
    <text-component></text-component>
    <!-- <services-component></services-component> -->
    <!-- <redes-component></redes-component> -->
    <client-component></client-component>
    <contact-component></contact-component>
    <footer-component></footer-component>

  </div>
</template>
<script>

import NavComponent from '../components/Nav'
import HomeComponent from '../components/Home'
// import ServicesComponent from '../components/Services'
import TextComponent from '../components/Text'
// import RedesComponent from '../components/Redes'
import ClientComponent from '../components/Client'
import ContactComponent from '../components/Contact'
import FooterComponent from '../components/Footer'

export default {
    name: 'HomePage',
  components:{

    NavComponent,
    HomeComponent,
    TextComponent,
    // RedesComponent,
    // ServicesComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent
  }
}
</script>