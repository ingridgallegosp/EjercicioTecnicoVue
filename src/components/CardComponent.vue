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
        thumbnail: {
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
            <img :src="props.thumbnail"  :alt="props.title"/>
        </figure>
        <div class="title">
            <h4>{{ props.title }}</h4>
        </div>
        <div class="description">
            <p>Start Year: {{ props.endYear }}</p>
            <p>End Year: {{ props.endYear }}</p>
            <p :style="{color: props.type === 'limited' ? 'blue' : props.type === 'collection' ? 'green' : 'black'}">Type: {{ props.type ? props.type :'N/A' }}</p>
        </div>
    </div>
</template>

<style scoped>
.comic-card{
    width: 200px;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
    cursor: pointer;

    .cover{
        width: 100%;

        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px 10px 0 0 ;           
        }
    }
    .title{
        h4{
            padding: 1%;
            text-align: center;
        }
    }

    .description{
        padding: 3%;
        p{
            font-size: 13px;
            color: var(--gray-dark);
        }
    }
}

.comic-card:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}



</style>