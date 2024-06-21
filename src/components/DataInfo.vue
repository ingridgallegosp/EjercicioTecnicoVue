<!-- <script setup lang="ts">

import { onMounted, ref } from 'vue'
//import type { Ref } from 'vue'

const data = ref([])

const PUBLIC_API_KEY = 'd10ae8c1113276699ffd0c24255ab5df';
//const PRIVATE_API_KEY = '7b8dbe24c7a58da18f262d6198754670e64db061';

const API_URL = 'https://gateway.marvel.com:443/v1/public/series?apikey='+PUBLIC_API_KEY;



const getData = async()=> {
    const res = await fetch(API_URL)
    const json = await res.json()
    return json.results
}

onMounted(async () => {
  data.value = await getData();
  console.log(data.value);
});

</script>

<template>
    <div>
      <h1>Datos de la API</h1>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template> -->

  <template>
    <div>
      <!-- Your template code here -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
import { FULL_URL } from '../services/md5.js'
  
  const data = ref([])
  
  const API_URL= FULL_URL
  
  const getData = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      return json.data.results; // Assuming the data structure has a 'data' object wrapping 'results'
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  onMounted(async () => {
    data.value = await getData();
    console.log(data.value);
  });
  

  </script>