<script setup>
import { defineProps } from 'vue';

const props = defineProps(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        startYear: {
            type: Number,
            required: false
        },
        endYear: {
            type: Number,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        resources: {
            type: String,
            required: false
        },
        type: { //collection or comic
            type: String,
            required: false
        }
    }
)

const handleClick = () => {
    console.log('estas haciendo clic')
};
</script>

<template>
    <div class="comic-card" @click="handleClick">
        <figure class="cover">
            <img :src="props.image"  :alt="props.title"/>
        </figure>
        <div class="title">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="description">
            <p>Start Year: {{ props.endYear }}</p>
            <p>End Year: {{ props.endYear }}</p>
            <p :style="{color: props.type === 'limited' ? 'blue' : props.type === 'collection' ? 'green' : 'black'}">Type: {{ props.type }}</p>
        </div>
    </div>
</template>

<style scoped>
.comic-card{
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
    cursor: pointer;

    .cover{
        width: 100%;
        display: absolute;


    }
}

.comic-card:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}



</style>