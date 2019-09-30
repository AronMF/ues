<template>
  <div>

    <nav-component></nav-component>
    <!-- <redes-component></redes-component> -->
    <about-component></about-component>
    <contact-component></contact-component>
    <footer-component></footer-component>

  </div>
</template>
<script>

import NavComponent from '../components/Nav'
// import RedesComponent from '../components/Redes'
import AboutComponent from '../components/About'
import ContactComponent from '../components/Contact'
import FooterComponent from '../components/Footer'

export default {
    name: 'SocialPage',
  components:{

    NavComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent

  }
}
</script>