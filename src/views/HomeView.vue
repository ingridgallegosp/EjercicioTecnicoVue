<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apiData, fetchData } from '../api' // Asegúrate de que la ruta sea correcta
import HeaderComponent from '../components/HeaderComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

const data = ref([]);
  
const getData = async () => {
    await fetchData();
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
            :title="item.title"
            :startYear="item.startYear"
            :endYear="item.endYear"
            :image="item.image"
            :type="item.type"
        /> 
    </main>
</template>

<style scoped>
main{
    width: 100%;
    margin: 0%;
    padding: 5%;
    overflow:scroll;
    display: grid;
    grid-template-columns:  repeat(4, 1fr);
    gap: 20px;
}
</style>