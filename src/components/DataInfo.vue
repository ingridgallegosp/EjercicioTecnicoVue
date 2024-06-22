<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CryptoJS from 'crypto-js'
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../utils/key.js'

const data = ref([]) // Empty array to store fetched data

const publicKey = API_PUBLIC_KEY;
const privateKey = API_PRIVATE_KEY;

const timestamp = new Date().getTime()
const hashValue = CryptoJS.MD5(timestamp + privateKey + publicKey)

const baseUrl = 'https://gateway.marvel.com/v1/public/series'
const apiUrl = `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hashValue}`

// Function to fetch data
const getData = async () => {
    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        data.value = json.data.results;
        console.log(data.value)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
};

onMounted(async () => {
    await getData()
})
/*
const getData = async () => {
    const response = await fetch(apiUrl)
    const json = await response.json()
    data.value = json.data.results
    console.log(data.value)
}
 */

</script> 

<template>
    
</template>





