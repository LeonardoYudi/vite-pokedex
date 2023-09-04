<template>
    <button :class="clsx('cursor-pointer capitalize w-20 rounded p-1 text-white',{
        'bg-[#94BC4A]' : type === 'bug',
        'bg-[#736C75]' : type === 'dark',
        'bg-[#6A7BAF]' : type === 'dragon',
        'bg-[#E5C531]' : type === 'electric',
        'bg-[#E397D1]' : type === 'fairy',
        'bg-[#CB5F48]' : type === 'fighting',
        'bg-[#EA7A3C]' : type === 'fire',
        'bg-[#7DA6DE]' : type === 'flying',
        'bg-[#846AB6]' : type === 'ghost',
        'bg-[#71C558]' : type === 'grass',
        'bg-[#CC9F4F]' : type === 'ground',
        'bg-[#70CBD4]' : type === 'ice',
        'bg-[#AAB09F]' : type === 'normal',
        'bg-[#B468B7]' : type === 'poison',
        'bg-[#E5709B]' : type === 'psychic',
        'bg-[#B2A061]' : type === 'rock',
        'bg-[#89A1B0]' : type === 'steel',
        'bg-[#539AE2]' : type === 'water'
    })">
       <span>{{ type }}</span>
    </button>
</template>

<script setup lang="ts">
import {clsx} from 'clsx'
defineProps({
    type : String
})
</script>
