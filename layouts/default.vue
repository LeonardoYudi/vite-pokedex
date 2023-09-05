<template>
    <div v-if="isMobile" class="h-screen flex flex-col">
      <main class="w-full h-full p-2 bg-neutral-100">
        <slot/>
      </main>
      <MobileNavBar/>
    </div>
    <div v-else class="h-screen flex">
      <AsideBar/>
      <main class="w-full p-2 bg-neutral-100">
        <slot/>
      </main>
    </div>
</template>
<script setup lang="ts">
import { getAllPokemonNames } from '~/api/axios';
import { useStoreBase } from '~/store/useStore';
const isMobile = ref()
const store = useStoreBase();

onBeforeMount(async()=>{
  const value = await getAllPokemonNames()
  store.setPokemonDataBase(value);
})

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768; 
};

</script>