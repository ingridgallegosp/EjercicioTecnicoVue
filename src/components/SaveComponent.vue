<script setup>
import { ref } from 'vue'
import {savedItemsStore} from '../stores/savedItems';

// function to save or unsave the card in history
const isSaved = ref(false);

//import the store
const savedItems = savedItemsStore()


const item = {
    id:'1'
}

// function to save or unsave the card in history
const save = () => {
    isSaved.value = !isSaved.value;

    if (isSaved.value) {
        savedItems.addItem(item);
    } else {
        savedItems.removeItem(item.id);
    }
}

</script>

<template>
    <div class="icon" @click="save">
        <!-- v-if the card is not saved, shows the solid icon  -->
        <font-awesome-icon v-if="!isSaved" icon="fa-regular fa-heart" />
        <font-awesome-icon v-else icon="fa-solid fa-heart" />
    </div>
</template>