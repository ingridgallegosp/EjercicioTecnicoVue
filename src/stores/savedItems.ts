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
        //console.log('agregando')
        //savedItems.value.push(item)
        // Condition
        const exists = savedItems.value.some(savedItem => savedItem.id === item.id);
        if (!exists) {
            savedItems.value.push(item);
        }
    }

    const removeItem = (itemId) => {
        //console.log('quitando');
        savedItems.value = savedItems.value.filter(item => item.id !== itemId);
    };

    return {
        savedItems,
        addItem,
        removeItem
    }

})
