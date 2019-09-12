<template>
  <div>
    <nav-component></nav-component>
    <home-component></home-component>
    <text-component></text-component>
    <redes-component></redes-component>
  </div>
</template>
<script>
import NavComponent from '../components/Nav'
import HomeComponent from '../components/Home'
import TextComponent from '../components/Text'
import RedesComponent from '../components/Redes'
export default {
    name: 'HomePage',
  components:{
    NavComponent,
    HomeComponent,
    TextComponent,
    RedesComponent
  }
}
</script>