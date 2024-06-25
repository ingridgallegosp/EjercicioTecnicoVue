<script setup>
import { RouterLink } from 'vue-router'
import {routes} from '../utils/routes.js'

</script>

<template>
    <header class="header">
        <nav>
            <figure class="logo">
                <img src="../assets/images/logo-rojo.png" alt="logo marvel"/>
            </figure>
            <ul>
                <li><RouterLink :to="routes.HOME">HOME</RouterLink></li>
                <li><RouterLink :to="routes.HISTORY">HISTORY</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header{
    height: 16%;
    background-color: var(black);
    color: var(white) black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);


    nav{
        .logo{
            height: 100%;
            position: relative;
            background-image: url('../assets/images/wallpaper.jpg');
            display: flex;
            justify-content: center;
            z-index: -1;

            img{
                width: 150px;
                z-index: 2;
                margin: 1%;
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.589);
                z-index: 1;
            }
        }
        ul{
            background-color: var(--black);
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;

            li{
                padding: 0.8% 3% ;

                a{
                    text-decoration: none;
                    font-size: 16px;
                    color: var(--white)
                }
            }
        }
    }
}

@media screen and (min-width: 960px) {
    
    .header nav .logo ul li {
        padding: 0.5% 4%;
    }
  
}


</style>