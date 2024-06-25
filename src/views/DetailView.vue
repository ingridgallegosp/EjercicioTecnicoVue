<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { apiData, fetchData } from '../api'

import HeaderComponent from '@/components/HeaderComponent.vue'

// using route info to fetch id data //route.params, route.name, route.path, route.fullPath,
const route = useRoute()
const data = ref([])

const getData = async () => {
    await fetchData('series/'+`${route.params.id}`);
    data.value = apiData.value;
    console.log(data.value)
};
  
onMounted(() => {
    getData();
});

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="about">
        <h1>This is a detail page {{ route.params.id }}</h1>
    </div>
</template>

<style scoped>

</style>
