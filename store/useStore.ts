import { defineStore } from "pinia";

export const useStoreBase = defineStore('store-base',()=>{
    const state = ref({
        pokemonDataBase : null,
        allPokemonTypes : null,
    })
    
    const getPokemonDataBase = computed<any>(() => state.value.pokemonDataBase);
    const getAllPokemonsTypes = computed<any>(() => state.value.allPokemonTypes);

    function setPokemonDataBase(data : any) {
        state.value.pokemonDataBase = data;
    }

    function setAllPokemonTypes(data : any) {
        state.value.allPokemonTypes = data;
    }

    return{
        getPokemonDataBase,
        getAllPokemonsTypes,
        setPokemonDataBase,
        setAllPokemonTypes
    }
})