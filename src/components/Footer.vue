<template>
    <div class="text-center container-down">
        <div>
            <b-row class="" style="height: 10px;" >
                <b-col class="col col-10 col-md-4">
                    <img class="imagem" src="../../fontes/light.jpg"  style="margin-left: 60px;"/>

                </b-col>
                <b-col class="col col-10 col-md-4 ">
                
                </b-col>
                <b-col class="col col-12 col-md-4 social-center">
                    <div class="text-left title-social widget-title title-empty">
                        <p>  &nbsp; Permaneça conectado</p>
                        <tr>
                            <td class="icon"><img class=" icones-down" src="../../social/whats2.jpg"/></td>
                            <td class="icon"><img class="d icones-down" src="../../social/face.jpg"/></td>
                            <td class="icon"><img class=" icones-down" src="../../social/instagram.jpg"/></td>
                            <td class="icon"><img class="d icones-down" src="../../social/youtu.jpg"/></td>
                            <td class="icon"><img class=" icones-down" src="../../social/email.jpg"/></td>
                            <td class="icon"><img class="d icones-down" src="../../social/site.jpg"/></td>
                        </tr>
                    </div>
                </b-col>
            </b-row>   
        </div>
        <div class="copyright">
            <b-row>
                <b-col class="col col-12 col-md-4 "></b-col>
                <b-col class="col col-12 col-md-4 ">
                    <ul>
                        <li class="copyright text-center">
                            Copyright © 2019. UES - Light
                        </li>
                    </ul>
                </b-col>
                <b-col class="col col-12 col-md-4 "></b-col>

            </b-row>
        </div>
    </div>
        
</template>

<script>
export default {
    
}
</script>  
<style>
.copyright {

    margin-top: 50px;

}
    .imagem {
        width:100%;
        height:100%;
        padding-left: 0px;
        padding-right: 0px;
    }
    .social-center {
        margin-top: 40px;
    }
    .title-social {
        margin: 0 0 28px;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0px;
        font-style: italic;
        color: #1b80a5;
    }
    .icon {
        border-right-width: 10px;
        padding-right: 10px;
        padding-left: 10px;
    }
    .icones-down {
        width: 25px;
        height: 25px;
        border-radius: 3px;
    }
    .copyright {
        text-align: right;
        color: #777;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 10px;
        margin-left: auto;
        margin-right: -3px;
        padding-left: 15px;
        display: list-item;
        list-style: none;
    }
</style>