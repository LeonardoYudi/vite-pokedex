<template>
<div :class="clsx(`w-6 h-6 flex justify-center items-center rounded-full`,{
    'bg-[#94BC4A]' : pokemonType === 'bug',
    'bg-[#736C75]' : pokemonType === 'dark',
    'bg-[#6A7BAF]' : pokemonType === 'dragon',
    'bg-[#E5C531]' : pokemonType === 'electric',
    'bg-[#E397D1]' : pokemonType === 'fairy',
    'bg-[#CB5F48]' : pokemonType === 'fighting',
    'bg-[#EA7A3C]' : pokemonType === 'fire',
    'bg-[#7DA6DE]' : pokemonType === 'flying',
    'bg-[#846AB6]' : pokemonType === 'ghost',
    'bg-[#71C558]' : pokemonType === 'grass',
    'bg-[#CC9F4F]' : pokemonType === 'ground',
    'bg-[#70CBD4]' : pokemonType === 'ice',
    'bg-[#AAB09F]' : pokemonType === 'normal',
    'bg-[#B468B7]' : pokemonType === 'poison',
    'bg-[#E5709B]' : pokemonType === 'psychic',
    'bg-[#B2A061]' : pokemonType === 'rock',
    'bg-[#89A1B0]' : pokemonType === 'steel',
    'bg-[#539AE2]' : pokemonType === 'water'
    })">
    <bug v-if="pokemonType === 'bug'" class="w-4 h-4"/>
    <dark v-if="pokemonType === 'dark'" class="w-4 h-4"/>
    <dragon v-if="pokemonType === 'dragon'" class="w-4 h-4"/>
    <electric v-if="pokemonType === 'electric'" class="w-4 h-4"/>
    <fairy v-if="pokemonType === 'fairy'" class="w-4 h-4"/>
    <fighting v-if="pokemonType === 'fighting'" class="w-4 h-4"/>
    <fire v-if="pokemonType === 'fire'" class="w-4 h-4"/>
    <flying v-if="pokemonType === 'flying'" class="w-4 h-4"/>
    <ghost v-if="pokemonType === 'ghost'" class="w-4 h-4"/>
    <grass v-if="pokemonType === 'grass'" class="w-4 h-4"/>
    <ground v-if="pokemonType === 'ground'" class="w-4 h-4"/>
    <ice v-if="pokemonType === 'ice'" class="w-4 h-4"/>
    <normal v-if="pokemonType === 'normal'" class="w-4 h-4"/>
    <poison v-if="pokemonType === 'poison'" class="w-4 h-4"/>
    <psychic v-if="pokemonType === 'psychic'" class="w-4 h-4"/>
    <rock v-if="pokemonType === 'rock'" class="w-4 h-4"/>
    <steel v-if="pokemonType === 'steel'" class="w-4 h-4"/>
    <water v-if="pokemonType === 'water'" class="w-4 h-4"/>
</div>
</template>
<script setup lang="ts">
import clsx from 'clsx';
import bug from '~/assets/icons/typesPokemon/bug.vue';
import dark from '~/assets/icons/typesPokemon/dark.vue';
import dragon from '~/assets/icons/typesPokemon/dragon.vue';
import electric from '~/assets/icons/typesPokemon/electric.vue';
import fairy from '~/assets/icons/typesPokemon/fairy.vue';
import fighting from '~/assets/icons/typesPokemon/fighting.vue';
import fire from '~/assets/icons/typesPokemon/fire.vue';
import flying from '~/assets/icons/typesPokemon/flying.vue';
import ghost from '~/assets/icons/typesPokemon/ghost.vue';
import grass from '~/assets/icons/typesPokemon/grass.vue';
import ground from '~/assets/icons/typesPokemon/ground.vue';
import ice from '~/assets/icons/typesPokemon/ice.vue';
import normal from '~/assets/icons/typesPokemon/normal.vue';
import poison from '~/assets/icons/typesPokemon/poison.vue';
import psychic from '~/assets/icons/typesPokemon/psychic.vue';
import rock from '~/assets/icons/typesPokemon/rock.vue';
import steel from '~/assets/icons/typesPokemon/steel.vue';
import water from '~/assets/icons/typesPokemon/water.vue';

defineProps({
    pokemonType : {
        type : String,
        required : true
    },
})


</script>