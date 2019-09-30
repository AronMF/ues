<template>
  <div>

    <nav-component></nav-component>
    <!-- <redes-component></redes-component> -->
    <services-component></services-component>
    <contact-component></contact-component>
    <footer-component></footer-component>

  </div>
</template>
<script>

import NavComponent from '../components/Nav'
// import RedesComponent from '../components/Redes'
import ServicesComponent from '../components/Services'
import ContactComponent from '../components/Contact'
import FooterComponent from '../components/Footer'

export default {
    name: 'ServicePage',
  components:{

    NavComponent,
    ServicesComponent,
    ContactComponent,
    // RedesComponent,
    FooterComponent

  }
}
</script>