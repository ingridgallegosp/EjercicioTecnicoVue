<script setup>

const props = defineProps<
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: String,
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
        formatType: { //collection or comic
            type: String,
            required: false
        }
    }
>

</script>

<template>
    <div class="comic-card">
        <figure class="cover">
            <img 
            src={{ card.image }}
            alt={{ card.title}}/>
        </figure>
        <div class="title">
            <h1>{{ card.title }}</h1>
        </div>
        <div class="description">
            <p>year: {{ card.year }}</p>
            <p>year: {{ card.year }}</p>
            <p>year: {{ card.year }}</p>
        </div>
    </div>
</template>

<style scoped>

.card{
    background-color: black;

    .title{
        color: blue;
    }
    .description{
        color: blue;
    }
}

</style>