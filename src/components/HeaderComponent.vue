<script setup>
import { RouterLink } from 'vue-router'
import {routes} from '../utils/routes.js'

</script>

<template>
    <header class="header">
        <nav>
            <ul>
                <li><RouterLink :to="routes.HOME">Home</RouterLink></li>
                <li><RouterLink :to="routes.HISTORY">History</RouterLink></li>
            </ul>
            <figure class="logo">
                <img src="" alt=""/>
            </figure>
        </nav>
    </header>
</template>

<style scoped>
.header{
    height: 15%;
    background-color: blue;
    color: black;
}
</style>