<template>
    <div class="">
        <input 
            type="text" 
            v-model="search" 
            placeholder="Pesquisar..."
            class="w-full h-10 rounded-lg px-4 capitalize outline-indigo-100"
        >
        <ul class="relative w-full max-h-60 overflow-y-scroll mt-2">
            <li v-if="search && filterNames.length < 1" class="px-2 text-red-500 text-[0.865rem]">Sem resultados</li>
            <li v-for="(i, index) in sortedItems" :key="index" :class="clsx('border h-10 rounded-lg',{
                'bg-neutral-50' : index%2 !== 0,
                'bg-neutral-200' : index%2 === 0
            })">
               <button @click="searchPokemon(i)" class="h-full w-full flex items-center px-4">
                    <span class="capitalize"> {{ i }} </span>
               </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useStoreBase } from '~/store/useStore';
import { getAllPokemonNames } from '~/api/axios';

import clsx from 'clsx';
const store = useStoreBase();
const router = useRouter();
const pokemons = ref()
const search = ref('')

onBeforeMount(async()=>{
  if(!store.getPokemonDataBase){
    pokemons.value = await getAllPokemonNames();
    store.setPokemonDataBase(pokemons.value);
  }else{
    pokemons.value = store.getPokemonDataBase;
  }
})

const filterNames = computed(()=>{
    if(search.value)return pokemons.value.filter((item : any) => item.name.toLowerCase().includes(search.value.toLowerCase()) && !item.name.includes('-')).map((item : any)=> item.name)
})

const sortedItems = computed(() => {
    if(filterNames.value)return filterNames.value.sort();
});

function searchPokemon(i : string){
    search.value = '';
    router.push(`/pokemon/${i}`);
}

</script>
