import axios from "axios";

async function getAllPokemonNames(){
    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        return response.data.results;
    }catch(error){
        return error
    }
}

async function getPokemon(pokemon){
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return response.data;
    }catch(error){
        return error
    }
}

async function getPokemonType(url){
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(e){
        console.log(e)
    }
}

async function generateRandonPokemon(){
    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        // console.log(response.data.results.length)
        let randon = Math.floor(Math.random() * response.data.results.length) + 1;
        if((response.data.results[randon].name).includes('-')){
            while((response.data.results[randon].name).includes('-')){
                randon = Math.floor(Math.random() * response.data.results.length) + 1;
            }
        }
        return randon;
    }catch(error){
        return error
    }
}

export {getAllPokemonNames, getPokemon, getPokemonType, generateRandonPokemon}