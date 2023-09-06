<template>
    <nav class="border-2">
      <ul class="flex items-center h-20 justify-evenly">
        <li class="w-1/5 flex justify-center items-center">
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="w-1/5 flex justify-center items-center">
          <NuxtLink to="/types">
            Types
          </NuxtLink>
        </li>
        <li class="w-1/5 flex justify-center items-center">
          <button @click="randonGenerate" class="border shadow-md w-16 h-16 rounded-full flex justify-center items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" 
              alt="Pokeball"
              class="w-8 h-8"
            >
          </button>
        </li>
        <li class="w-1/5 flex justify-center items-center">
          <NuxtLink to="/favorites">
            Favorites
          </NuxtLink>
        </li>
        <li class="w-1/5 flex justify-center items-center">
          <NuxtLink to="/">
            Me
          </NuxtLink>
        </li>
      </ul>
    </nav>
</template>
 
<script setup lang="ts">
import { generateRandonPokemon } from '~/api/axios';
const router = useRouter()
async function randonGenerate(){
  const randonPokemon = await generateRandonPokemon()
  router.push(`/pokemon/${randonPokemon}`);
}

</script>
 
