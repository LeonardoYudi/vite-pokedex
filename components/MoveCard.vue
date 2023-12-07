<template>
    <div @click="openPanel()" class="border shadow-md rounded-lg px-3 py-2"> 
        <div>
            <div class="flex items-center gap-3 capitalize h-20">
                <IconType :pokemonType="typeMove"/>
                <span class="font-semibold"> {{ MoveData.name }} </span>
            </div>
        </div>
        <div v-if="isOpen && moreInfosMove">
            <p>{{`${moreInfosMove?.accuracy ? moreInfosMove?.accuracy : 'Dados indisponíveis'}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {getMoveData} from "@/api/axios"
const props = defineProps({
    typeMove : {
        type : String,
        required : true
    },
    MoveData : {
        type : Object,
        required : true
    }
})

const isOpen = ref(false)
const moreInfosMove = ref()
async function openPanel(){
    isOpen.value = !isOpen.value;
    if(!moreInfosMove.value){
        moreInfosMove.value = await getMoveData(props.MoveData.url)
    }
}

</script>

<style scoped>

</style>