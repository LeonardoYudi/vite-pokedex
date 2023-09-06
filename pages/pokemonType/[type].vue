<template>
    <div v-if="isLoading" class="w-full h-full flex items-center justify-center">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" 
            alt="Pokeball"
            class="w-16 h-16 animate-bounce"
        >
    </div>
    <div v-else class="p-4 flex flex-col items-center gap-3">
        <h1 class="text-3xl font-semibold capitalize">{{ typeData.name }}</h1>
        <div class="w-full grid grid-cols-2 gap-4 max-h-96 overflow-y-scroll">
            <div v-for="move in typeData.moves" class="capitalize border h-10 flex justify-center items-center rounded-lg">
            {{ move.name }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const typeData = ref()
const isLoading = ref(true)
import { getTypeData } from '~/api/axios';

onMounted(async()=>{
    if(route.params.type){
       try{
        typeData.value = await getTypeData(route.params.type);
       }catch(e){

       }finally{
            isLoading.value = false;
       }
    }
})

</script>