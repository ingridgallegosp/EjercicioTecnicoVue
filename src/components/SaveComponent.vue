<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['save'])

const isSaved = ref(false);

// function to 'alert' that the Father Component has been saved
const handleSave = () => {
    isSaved.value = !isSaved.value;

    if (isSaved.value) {
        emit('save')
    } 
}

</script>

<template>
    <div class="icon" @click="handleSave()"> <!-- be careful with the function use+() -->

        <!-- v-if the card is not saved, shows the solid icon  -->
         <!-- pending to include in general state -->
        <font-awesome-icon v-if="!isSaved" icon="fa-regular fa-heart" />
        <font-awesome-icon v-else icon="fa-solid fa-heart" />
    </div>
</template>