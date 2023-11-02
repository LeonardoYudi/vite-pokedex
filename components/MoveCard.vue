<template>
    <div @click="isOpen = !isOpen" class="border shadow-md rounded-lg px-3 py-2"> 
        <div class="flex items-center gap-3 capitalize h-20">
            <IconType :pokemonType="typeMove"/>
            <span class="font-semibold"> {{ MoveData.name }} </span>
        </div>
        <p v-if="isOpen">
            {{ MoveData.url }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { Move } from '@icon-park/vue-next';

defineProps({
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
</script>

<style scoped>

</style>