<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import SaveComponent from './SaveComponent.vue'
import { useSavedItemsStore } from '@/stores/savedItems'

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startYear: {
        type: Number,
        required: false,
    },
    endYear: {
        type: Number,
        required: false,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    comics: {
        type: Number,
        required: false,
    },
    stories: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
})

const store = useSavedItemsStore();

const saveItem = () => {
    const newItem = {
        id: props.id,
        title: props.title,
        startYear: props.startYear,
        endYear: props.endYear,
        thumbnail: props.thumbnail,
        comics: props.comics,
        stories: props.stories,
        type: props.type,
    }
    //console.log('Saving item:', newItem)
    store.addItem(newItem)
}

const router = useRouter()
const handleClick = () => {
    //console.log('estas haciendo clic')
    console.log(props.id)
    router.push(`/detail/${props.id}`)
}
</script>

<template>
    <div class="detail-card" @click="handleClick">
        <div class="description">
            <div class="title">
                <h4>{{ props.title }}</h4>
            </div>
            <p>Start Year: {{ props.startYear }}</p>
            <p>End Year: {{ props.endYear }}</p>
            <p>Type: {{ props.type ? props.type : 'N/A' }} </p>
            <p>Comics: {{ props.comics }} </p>
            <p>Stories: {{ props.stories }} </p>
        </div>
        <div class="image">
            <figure class="cover">
                <img :src="props.thumbnail" :alt="props.title" />
            </figure>
            <!-- Listen for the 'save' event emitted by SaveComponent -->
            <SaveComponent @save="saveItem" /> 
        </div>
    </div>
</template>



<style scoped>
.detail-card{
    width: 70%;
    display: flex;
    padding: 2%;
    margin: 1% 5%;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
    cursor: pointer;
    
    .description{
        width: 70%;
        .title{
            padding: 4% 0;
        }
    }

    .image{
        width: 30%;
        .cover{
            width: 100%;
            display: flex;
            align-items: center;
            img{
                width: 90%;
            }
        }
    }
}
</style>