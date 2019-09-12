<template>
    <div> 
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="8000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="img2/1x/Escritorio.jpg">
               
                  <transition name="slide-fade">
                    <p v-if="show">olá</p>
                  </transition>
                <rs-slider  class="slider-text" @click="show = !show" >
                   &nbsp;Melhore seus ambientes e sinta a&nbsp; <br> 
                       &nbsp;diferença  &nbsp;   
                </rs-slider>
              <!-- Cansado de serviços mal feitos? Sujeira para todo lado, sem limpeza ao final do trabalho? Demora na execução? -->
              <h1> </h1>
                
              <h1> </h1>
                
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="img2/confort.jpg">
                <rs-slider  class="slider-text" @click="show = !show" >
                   &nbsp;Seus olhos precisam de conforto&nbsp;
                </rs-slider>
                
                
                <br><br><br><br>

          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide class="active-rs-slide" img-src="img2/iluminação.jpg">
              

               <rs-slider  class="slider-text" @click="show = !show" >
                    &nbsp;Você sabia que a fiação dos imóveis&nbsp;
                    <br>   
                    &nbsp; tem data de validade!?  &nbsp;         
                   <br>
                </rs-slider>
                
                
          </b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
       
          <b-carousel-slide>
              <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="img2/Professional.jpg"
              alt="image slot"
              >
              <rs-slider  class="slider-text" @click="show = !show" >
                    &nbsp;Solicite já uma visita!! &nbsp;

                      <!-- &nbsp;Sujeira para todo lado, sem limpeza&nbsp;   -->
                      <br> 
                      <!-- &nbsp; ao final do trabalho?&nbsp; -->
              </rs-slider>
          </b-carousel-slide>
          <b-carousel-slide>
              <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="img2/aire.jpg" 
              alt="image slot"
              >
              <rs-slider  class="slider-text" >
                &nbsp;Garantia real e pessoal técnico treinado.&nbsp;
              </rs-slider>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        </b-carousel>
        <div>
        </div>

          <!-- <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
          </p> -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        el: '#exemplo-1',

        show: true,
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
  /* .active-rs-slide {
    overflow: hidden; height: 585px; width: 100%; z-index: 20; visibility: inherit; opacity: 1;
  } */

  .carousel {
    height: calc( 100vh - 62px );
  }

  .slider-text {
    font-size: 3.6em !important;
  }

  .carousel-inner,
  .carousel-item{
    height: 100%;    
  }

  .carousel-item img{
    height: 100%;
    object-fit: cover;
  }
 
  .slider-text {
    z-index: 5;
     background-color: rgba(0, 0, 0, 0.6);
     font-family: Oswald;
     visibility: visible;
     text-align: center;
     line-height: 66px;
     letter-spacing: 0px;
     font-weight: 900;
     font-size: 57px;
     border-color: rgb(116, 116, 116);
     border-style: none;
     margin: 0px;
     border-radius: 0px;
     padding: 0px;
     color: rgb(255, 255, 255);
     text-decoration: none;
     white-space: normal;
     width: 656px;
     height: auto;
     min-height: 0px;
     min-width: 0px;
     max-height: none;
     max-width: none;
      opacity: 1;
      transform-origin: 50% 50% 0px;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      border-width: 0px;
     
  }
  .logo-min {
         width: 230px;
        height: 153px;
  } 
  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

