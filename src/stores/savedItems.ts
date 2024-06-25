import { ref } from 'vue'
import { defineStore } from 'pinia'

export const savedItemsStore = defineStore('savedItems', () => {

    const savedItems = ref([
        {
            id:'05'
        }
    ])

    const addItem = () => {
        console.log('agregando')
    }

    const removeItem = () => {
        console.log('quitando')
    }

    return {
        savedItems,
        addItem,
        removeItem
    }

})
