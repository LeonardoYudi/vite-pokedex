import { defineStore } from "pinia";

export const useStoreBase = defineStore('store-base',()=>{
    const state = ref({
        pokemonDataBase : null,
    })
    
    function getPokemonDataBase(){
        return state.value.pokemonDataBase;
    }

    function setPokemonDataBase(pokemonDataBase : any) {
        state.value.pokemonDataBase = pokemonDataBase;
        console.log('Setado',pokemonDataBase)
    }

    return{
        getPokemonDataBase,
        setPokemonDataBase
    }
})