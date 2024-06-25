<script setup>
import { defineProps } from 'vue'
import SaveComponent from './SaveComponent.vue'

const props = defineProps(
    {
        id: {
            type: Number,
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
        comics: {
            type: Object,
            required: false
        },
        stories: {
            type: Object,
            required: false
        },
        type: { //collection or comic
            type: String,
            required: false
        }
    }
)

</script>

<template>
    <div class="detail-card" >
        <div class="description">
            <div class="title">
                <h4>{{ props.title }}</h4>
            </div>
            <p>Start Year: {{ props.endYear }}</p>
            <p>End Year: {{ props.endYear }}</p>
            <p>Type: {{ props.type ? props.type :'N/A' }} </p>
            <p>Comics: {{ props.comics }} </p>
            <p>Stories: {{ props.stories }} </p>
            
        </div>
        <div class="image">
            <figure class="cover">
                <img :src="props.thumbnail"  :alt="props.title"/>
            </figure>
            <SaveComponent></SaveComponent>
        </div>
    </div>
</template>

<style scoped>
.detail-card{
    width: 70%;
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    padding: 5%;
    .image{
        .cover{
            img{
                width: 90%;
            }
        }
    }
}
</style>