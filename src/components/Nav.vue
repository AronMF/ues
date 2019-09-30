<template> 
    <div id="navbar" class="fusion-header navbar-md navbar-inverse normal in" style="padding-top: 0px;
    padding-bottom: 0px;">
        <b-row class=" home">
            <b-col class="col-12 col-md-5">
                 <router-link class="" to="/">
                    <div class="navbar-header" >
                        <a >
                            <img  class="show ues-logo" src="../../img2/fontes/boa3.jpg"/>
                        </a>
                    </div>
                </router-link>
            </b-col>
            <b-col class="col-12 col-md-7 option-text">
                <div class="navbar-header" style="padding-top: 8px;">
                      <nav class="home nav navbar navbar-expand-lg navbar-light bg-light text-center">
                        <router-link class="text-nav navbar-brand" to="/"></router-link>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse in" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/">PÁGINA INICIAL</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/service">LISTA DE SERVIÇOS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/client">SERVIÇOS EXECUTADOS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/about">CONTATO</router-link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                    <!-- <nav class="nav text-center">
                        <router-link class="text-nav" to="/">PÁGINA INICIAL</router-link>
                         <router-link class="text-nav" to="/service">LISTA DE SERVIÇOS</router-link>
                         <router-link class="text-nav" to="/client">SERVIÇOS EXECUTADOS</router-link>
                    </nav> -->
                </div>
                <!-- <div class="navbar-header" style="padding-top: 8px;">

                    <nav class=" nav navbar navbar-expand-lg navbar-light bg-light text-center">
                        <router-link class="text-nav navbar-brand" to="/">PÁGINA INICIAL</router-link>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/service">LISTA DE SERVIÇOS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/client">SERVIÇOS EXECUTADOS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="text-nav nav-link" to="/about">CONTATO</router-link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div> -->
            </b-col>
        </b-row>
        <!-- <div class="row home" > -->
       
        <!-- </div> -->
    </div>

</template>  
<script>
export default {
    
}
</script>
<style >

.option-text {
    width: 100% !important;
    height: 150%;
    /* padding-top: 12px; */
    padding-top: 0px;


}
.text-nav {
    color: #ffffff !important;
    padding-left: 15px;
    padding-right: 15px;

    margin: 0 0 20px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0px;

    margin-bottom: 10px;


}
.home {
    /* margin-top: 30px; */
    margin-top: 0px;
    background: #219dd7 !important;
    overflow: auto;
    padding-top: 0px;
    padding-bottom: 0px;


}
.container {
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 0px;
        padding-right: 0px;
        color: white;
        font-size: 100%;

}
.fusion-header {
    top: 0px;
    overflow: visible;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    /* padding-left: 31px; */
    padding-right: 0px;
    /* padding-right: 31px; */
    width: 100%;

}
.ues-logo {
    margin-left: 80px;
  	width:70%;
	height:30%;
    padding-left: 0px;
    padding-right: 0px;
    
}
</style>