<template>
    <section class="p-4 flex flex-col items-center gap-3">
        <h1 class="text-4xl font-bold">Types</h1>
        <div class="w-full grid grid-cols-2 gap-2 overflow-y-scroll">
            <button @click="searchType(i.name)" v-for="(i,index) in types" :key="index" :class="clsx('h-16 flex justify-center items-center capitalize border rounded-lg text-white',{
                'bg-[#94BC4A]' : i.name === 'bug',
                'bg-[#736C75]' : i.name=== 'dark',
                'bg-[#6A7BAF]' : i.name === 'dragon',
                'bg-[#E5C531]' : i.name === 'electric',
                'bg-[#E397D1]' : i.name === 'fairy',
                'bg-[#CB5F48]' : i.name === 'fighting',
                'bg-[#EA7A3C]' : i.name === 'fire',
                'bg-[#7DA6DE]' : i.name === 'flying',
                'bg-[#846AB6]' : i.name === 'ghost',
                'bg-[#71C558]' : i.name === 'grass',
                'bg-[#CC9F4F]' : i.name === 'ground',
                'bg-[#70CBD4]' : i.name === 'ice',
                'bg-[#AAB09F]' : i.name === 'normal',
                'bg-[#B468B7]' : i.name === 'poison',
                'bg-[#E5709B]' : i.name === 'psychic',
                'bg-[#B2A061]' : i.name === 'rock',
                'bg-[#89A1B0]' : i.name === 'steel',
                'bg-[#539AE2]' : i.name === 'water',
                'bg-[#060606]' : i.name === 'unknown',
                'bg-[#545454]' : i.name === 'shadow'
            })">
               {{ i.name }}
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useStoreBase } from '~/store/useStore';
import { getPokemonsTypes } from '~/api/axios';
import {clsx} from 'clsx'
const types = ref()
const store = useStoreBase();
const router = useRouter();
onMounted(async()=>{
    if(!store.getAllPokemonTypes){
        types.value = await getPokemonsTypes();
        store.setAllPokemonTypes(types.value);
    }else{
        types.value = store.getAllPokemonsTypes;
    }
})

function searchType(i : string){
    router.push(`/pokemonType/${i}`);
}

</script>

