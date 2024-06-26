import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSavedItemsStore = defineStore('savedItems', () => {

    /* const savedItems = ref([
        {
            id: '05',
            title:'Hola'
        }
    ]) */ //for testing History View
    
    const savedItems = ref([])

    const addItem = (item) => {
        console.log('agregando')
        savedItems.value.push(item)
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
