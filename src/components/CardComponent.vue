<script setup>

const props = defineProps<
    {
        id: {
            type: String,
            required: true
        },
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
            src={{ props.image }}
            alt={{ props.title}}/>
        </figure>
        <div class="title">
            <h1>{{ card.title }}</h1>
        </div>
        <div class="description">
            <p>year: {{ props.year }}</p>
            <p>year: {{ props.year }}</p>
            <p>year: {{ props.year }}</p>
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