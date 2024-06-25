<script setup>
import {savedItemsStore} from '../stores/savedItems'
import HeaderComponent from '../components/HeaderComponent.vue'
import DetailCardComponent from '../components/DetailCardComponent.vue'

import { computed } from 'vue'


//import the store
const store = savedItemsStore()

//computed function to access store state
//const storeData =  computed(() => store.savedItems) //same as sore.savedItems

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="history">
        <aside>
        <h6>Vistos Recientemente</h6>
        <p>Fantastic 4</p>
        <p>Wolverine</p>
        <p>Spider Man</p>
        </aside>
        <article>
            <DetailCardComponent
                v-for="item in store.savedItems"
                :key="item.id"
                :title="item.title">
            </DetailCardComponent>
            <p>page in construction</p>
            <p>{{store.savedItems}}</p>
            <!-- <p>{{storeData}}</p> -->

        </article>
    </div>
</template>

<style scoped>

</style>