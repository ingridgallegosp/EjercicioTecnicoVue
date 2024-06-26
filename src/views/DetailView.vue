<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { apiData, fetchData } from '../api'

import HeaderComponent from '@/components/HeaderComponent.vue'
import DetailCardComponent from '@/components/DetailCardComponent.vue'

// using route info to fetch id data //route.params, route.name, route.path, route.fullPath,
const route = useRoute()
const data = ref([])
const comicsResumen = ref([])
const storiesResumen = ref([])




const getData = async () => {
    //access to the id info from the path
    await fetchData('series/'+`${route.params.id}`);
    data.value = apiData.value;
    console.log(data.value)
};

// url for searching id resumen

// /v1/public/series/{seriesId}/comics
// /v1/public/series/{seriesId}/stories

const getComicResumen = async () => {
    await fetchData(`series/${route.params.id}/comics`);
    comicsResumen.value = apiData.value;
    console.log(comicsResumen.value)
}; 

const getStoriesResumen = async () => {
    await fetchData(`series/${route.params.id}/stories`);
    storiesResumen.value = apiData.value;
    console.log(storiesResumen.value)
}; 


onMounted(() => {
    getData();
    getComicResumen()
    getStoriesResumen()

  
});

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="detail">
        <!-- <h1>This is a detail page {{ route.params.id }}</h1> -->
        <DetailCardComponent
            v-for="item in data"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :startYear="item.startYear"
            :endYear="item.endYear"
            :thumbnail="`${item.thumbnail.path}.${item.thumbnail.extension}`"
            :type="item.type"
            :comics="item.comics.available"
            :stories="item.stories.available"
            >
        </DetailCardComponent>
        <article>
            <div class="aditional-info">
                <h6>Comics Available Detail</h6>
                <ul>
                    <li v-for="comic in comicsResumen" :key="comic.id">{{ comic.title }}</li> 
                </ul>
            </div>
            <div class="aditional-info">
                <h6>Stories Available Detail</h6>
                <ul>
                    <li v-for="story in storiesResumen" :key="story.id">{{ story.title }}</li> 
                </ul>
            </div>
        </article>
    </div>
</template>

<style scoped>
.detail{
    min-height: calc(100vh - (100vh * 0.16));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(238, 238, 238, 0.329);
    min-height: calc(100% - 16%);

    article{
        width: 70%;
        display: flex;
        padding: 1% ;
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
        border-radius: 10px;

        .aditional-info{
            width: 100%;
            padding: 1%;

            ul{
                list-style: none;

                li{
                    color: var(--gray-dark);
                    font-size: 12px;
                    padding: 1% 0;
                }
            }
        }
    }
}

</style>
