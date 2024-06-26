<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apiData, fetchData } from '../api'
import HeaderComponent from '../components/HeaderComponent.vue'
import CardComponent from '../components/CardComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'


const data = ref([]);

const getData = async () => {
    await fetchData('series');
    data.value = apiData.value;
    console.log(data.value)
};
  
onMounted(() => {
    getData();
});
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <main>
        <CardComponent
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
        /> 
    </main>
    <FooterComponent></FooterComponent>
</template>

<style scoped>
main{
    width: 100%;
    height: 100%;
    margin: 0%;
    padding: 5%;
    overflow:scroll;
    overflow-x: hidden;
    background-color: rgba(238, 238, 238, 0.329);
    display: grid;
    grid-template-columns:  repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
}
</style>