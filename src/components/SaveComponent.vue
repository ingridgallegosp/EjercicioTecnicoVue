<script setup>
import { ref } from 'vue'

// function to save or unsave the card in history
const isSaved = ref(false);

const save = () => {
    isSaved.value = !isSaved.value;

};
</script>

<template>
    <div class="icon" @click="save">
        <!-- v-if the card is not saved, shows the solid icon  -->
        <font-awesome-icon v-if="!isSaved" icon="fa-regular fa-heart" />
        <font-awesome-icon v-else icon="fa-solid fa-heart" />
    </div>
</template>