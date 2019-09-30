<template>
  <div>

    <nav-component></nav-component>
    <!-- <redes-component></redes-component> -->
    <client-component></client-component>
    <contact-component></contact-component>

    <footer-component></footer-component>

  </div>
</template>
<script>

import NavComponent from '../components/Nav'
import ClientComponent from '../components/Client'
// import RedesComponent from '../components/Redes'
import ContactComponent from '../components/Contact'
import FooterComponent from '../components/Footer'

export default {
    name: 'SocialPage',
  components:{

    NavComponent,
    ClientComponent,
    // RedesComponent,
    ContactComponent,
    FooterComponent

  }
}
</script>