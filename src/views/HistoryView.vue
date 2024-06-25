<script setup>
import { computed } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import DetailCardComponent from '../components/DetailCardComponent.vue'
import { useSavedItemsStore } from '../stores/savedItems'

//import the store
const store = useSavedItemsStore()

//computed function to access store state
//const storeData =  computed(() => store.savedItems) //same as store.savedItems


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
        <article class="detail">
            <DetailCardComponent
                v-for="item in store.savedItems"
                :key="item.id"
                :title="item.title">
            </DetailCardComponent>

            <!-- 
            <p>page in construction</p>
            <p>{{store.savedItems}}</p> 
            <p>{{storeData}}</p> 
            -->

        </article>
    </div>
</template>

<style scoped>
.history{
    display: flex;
    background-color: rgba(238, 238, 238, 0.329);
    min-height: calc(100vh - 16%);

    aside{
        width: 15%;
        padding: 2% 1%;
        background-color: rgba(211, 211, 211, 0.2);

        p{
            margin: 8% 0;
            color: var(--gray-dark);
        }
    }
    article{
        width: calc(100% - 15%);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}

</style>