import { ref } from 'vue'
import CryptoJS from 'crypto-js'

export const apiData = ref([]) 

const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

const timestamp = new Date().getTime()
const hashValue = CryptoJS.MD5(timestamp + privateKey + publicKey)

const baseUrl = 'https://gateway.marvel.com/v1/public/series'
const apiUrl = `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hashValue}`

// Function to fetch data
export const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        apiData.value = json.data.results;
        //console.log(apiData.value)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
};

/*
const getData = async () => {
    const response = await fetch(apiUrl)
    const json = await response.json()
    data.value = json.data.results
    console.log(data.value)
}
*/
