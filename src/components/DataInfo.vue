<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import CryptoJS from 'crypto-js';
import { API_PUBLIC_KEY, API_PRIVATE_KEY } from '../utils/key.js';

const publicKey = API_PUBLIC_KEY;
const privateKey = API_PRIVATE_KEY;

const baseUrl = 'https://gateway.marvel.com/v1/public/series';

const timestamp = computed(() => Math.floor(Date.now() / 1000));

// Function to generate hash using CryptoJS
const getHash = (timestamp: number, privateKey: string, publicKey: string) => {
    const message = `${timestamp}${privateKey}${publicKey}`;
    return CryptoJS.MD5(message).toString();
};

const data = ref([]); // Empty array to store fetched data

// Function to fetch data
const getData = async () => {
    const ts = timestamp.value;
    const hashValue = getHash(ts, privateKey, publicKey);

    const url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hashValue}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        data.value = json.data.results;
        console.log(data.value)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(async () => {
    await getData();
});
</script>
