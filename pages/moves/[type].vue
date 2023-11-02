<template>
    <div v-if="isLoading" class="w-full h-full flex items-center justify-center">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" 
            alt="Pokeball"
            class="w-16 h-16 animate-bounce"
        >
    </div>
    <div v-else >
        <h1 class="text-3xl font-semibold capitalize">Moves {{ typeData.name }} </h1>
        <div class="grid gap-2">
            <div v-for="move in typeData.moves">
                <MoveCard :typeMove="typeData.name" :MoveData="move"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const typeData = ref()
const isLoading = ref(true)

import { getTypeData } from '~/api/axios';
import IconType from '~/components/IconType.vue';
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