<template>
    <div :class="clsx('px-6 py-6 h-[16.5rem] rounded-3xl bg-gradient-to-b to-white shadow',{
        'from-[#94BC4A] ' : type === 'bug',
        'from-[#736C75]' : type === 'dark',
        'from-[#6A7BAF]' : type === 'dragon',
        'from-[#E5C531]' : type === 'electric',
        'from-[#E397D1]' : type === 'fairy',
        'from-[#CB5F48]' : type === 'fighting',
        'from-[#EA7A3C]' : type === 'fire',
        'from-[#7DA6DE]' : type === 'flying',
        'from-[#846AB6]' : type === 'ghost',
        'from-[#71C558]' : type === 'grass',
        'from-[#CC9F4F]' : type === 'ground',
        'from-[#70CBD4]' : type === 'ice',
        'from-[#AAB09F]' : type === 'normal',
        'from-[#B468B7]' : type === 'poison',
        'from-[#E5709B]' : type === 'psychic',
        'from-[#B2A061]' : type === 'rock',
        'from-[#89A1B0]' : type === 'steel',
        'from-[#539AE2]' : type === 'water'
    })">
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import {clsx} from 'clsx'
defineProps({
    type : String
})
</script>
