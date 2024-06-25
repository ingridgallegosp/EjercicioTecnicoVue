import { ref } from 'vue'
import { defineStore } from 'pinia'

export const savedItemsStore = defineStore('savedItems', () => {

    const savedItems = ref([
        {
            id:'05'
        }
    ])



    return {
        savedItems,
    }

})
