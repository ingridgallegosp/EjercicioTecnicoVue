<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { apiData, fetchData } from '../api'

import HeaderComponent from '@/components/HeaderComponent.vue'
import DetailCardComponent from '@/components/DetailCardComponent.vue'

// using route info to fetch id data //route.params, route.name, route.path, route.fullPath,
const route = useRoute()
const data = ref([])

const getData = async () => {
    //access to the id info from the path
    await fetchData('series/'+`${route.params.id}`);
    data.value = apiData.value;
    console.log(data.value)
};

// url for searching id resumen

// /v1/public/series/{seriesId}/comics
// /v1/public/series/{seriesId}/stories
onMounted(() => {
    getData();
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
            :comics="item.comics"
            :stories="item.stories"
            >
        </DetailCardComponent>
    </div>
</template>

<style scoped>
.detail{
    display: flex;
    justify-content: center;
}

</style>
