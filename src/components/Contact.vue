<template>
    <div>
        <div class="container-fluid empty title">
            <b-row class="row conteiner   " >
                <b-col class="col-1 start  ">
                </b-col>    
                <b-col class="col-12 col-md-3 start  ">
                        <ul class="contact-text">
                            <li class="li-space">
                                <h6 class="title-contact">Contatos</h6> 
                            </li>
                            <li class="li-space cnt-text">
                                (18) 99617 - 0027
                            </li>
                            <li class="li-space cnt-text">
                            </li>
                            <li class="li-space cnt-text">
                                ueslight@gmail.com
                            </li>
                        </ul>
                </b-col>
                <b-col class="col-12 col-md-3 start ">
                        <ul class="contact-text">
                            <li class="li-space">
                                <h6 class="title-contact">Empresa</h6> 
                            </li>
                            <li class="li-space">
                                <router-link class="cnt-text pull-left" to="/client">Clientes</router-link>
                            </li>
                            <li class="li-space">
                                <router-link class="cnt-text pull-left" to="/about">Sobre nós</router-link>
                            </li>
                            <li class="li-space">
                                
                                <router-link class="cnt-text pull-left" to="/client">Serviços executados</router-link>
                            </li>
                        </ul>
                </b-col>
                <b-col class="col-12 col-md-3 start  ">
                        <ul class="contact-text">
                            <li class="li-space">
                                <h6 class="title-contact">Ajuda & Suporte</h6> 
                            </li>
                            <li class="li-space">
                                <router-link class="cnt-text pull-left" to="/about">Contatos</router-link>
                            </li>
                            <li class="li-space cnt-text">
                                Duvidas
                            </li>
                            <li class="li-space">
                                <router-link class="cnt-text pull-left" to="/service">Serviços</router-link>
                                
                            </li>
                        </ul>
                </b-col>
                <b-col class="col-1 start title-contact ">
                </b-col>    
            </b-row>
        </div>
    </div>
</template>


<style >
  /* <---- Client ---->< */
    .cnt-text {
        color: #c8dde7;

    }
    .li-space {
        width: 200px;


    }
    .empty {
        min-height: 100%;
        width: 100%;
        height: 100%px;

        /* background:#26829e; */
        background:#105f7c;
        /* background:#506d88; */
        margin-left: 0px;
        margin-right: 0px;
        padding-bottom: 20px;
    }
  
    .title-contact {
        padding-bottom: 20px;
        padding-top: 10px;

        margin: 0 0 28px;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0px;
        font-style: italic;
        color: #ffffff;
        margin-bottom: 0px;

    }
    .details {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
        padding-right: 30px;
        border-top-width: 10px;
    }
    .contact-text {

        margin: 0 0 28px;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0px;
        font-style: italic;
        /* color: #ffffff; */
;
        list-style-type: none;



        /* color: #115f7c !important; */

        /* color: #ffffff; */

        padding-left: 150px;
        padding-right: 150px; 
        padding-top: 20px;
        margin-bottom: 0px;
        padding-bottom: 20px;

    }
</style>