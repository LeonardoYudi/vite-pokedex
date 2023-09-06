<template>
   <section class="w-full h-full">
        <!-- <SearchBar/> -->
        <div v-if="isLoading" class="w-full h-full flex items-center justify-center">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" 
                alt="Pokeball"
                class="w-16 h-16 animate-bounce"
            >
        </div>
        <div v-else class="flex flex-col border shadow-sm rounded-3xl bg-white">
            <GradienteCard :type="pokemon.types[0].type.name">
                <div class="flex justify-between items-center">
                    <button @click="$router.push('/')">
                        <Left size="32" class="hover:fill-slate-400"/>
                    </button>
                    <span class="font-bold italic">#{{ pokemonId }}</span>
                    <button class="w-8 flex justify-center items-center">
                        <Heart class="stroke-red-400"/>
                    </button>
                </div>
            
                <div class="flex flex-col items-center justify-center">
                    <img 
                        class="w-36 h-36"
                        :src="pokemon.sprites.front_default" 
                        :alt="`img_${pokemon.name}`"
                    >
                </div>
            </GradienteCard>
            <div class="flex flex-col items-center gap-4 pt-4">
                <span class="capitalize text-xl font-semibold">{{ pokemon.name }}</span>
                <div class="flex gap-4 mb-4">
                    <TypeButton  
                        v-for="slot in pokemon.types" 
                        :type="slot.type.name"
                       
                    />
                </div>
            </div>
            <div class="flex flex-col gap-1 w-full px-10 py-6">
                <span class="font-semibold text-start pl-4">Status</span>
                <StatsBar v-for="stat in pokemon.stats"
                    :stat="stat"
                    :type="pokemon.types[0].type.name"
                />
            </div>
        </div>
   </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import { getPokemon } from '~/api/axios';
import { Left } from '@icon-park/vue-next';
import  Heart  from "@/assets/icons/hearth.vue"
const router = useRouter();
const route = useRoute();
const pokemon = ref()
const pokemonId = ref('')
const isLoading = ref(true)
onMounted(async()=>{
    if(route.params.pokemon){
       try{
            pokemon.value = await getPokemon(route.params.pokemon);
       }catch{
            router.push('/');
       }finally{
            isLoading.value = false;
       }
       pokemonId.value = pokemon.value.id;
       const id = parseInt(pokemonId.value)
       if(id < 10){
        pokemonId.value = '00'+pokemon.value.id
       }else if(id<100){
        pokemonId.value = '0'+pokemon.value.id
       }else{
        pokemonId.value = pokemon.value.id
       }
    }
})


</script>