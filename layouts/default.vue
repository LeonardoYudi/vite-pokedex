<template>
    <div v-if="isMobile" class="h-screen max-h-screen flex flex-col">
      <header class="bg-slate-500 shadow-sm rounded-b-md">
        <div class="flex justify-center items-center h-20">
            <!-- <SearchBar class="w-full"/> -->
            <pokeball class="w-10 h-10"/>
        </div>
      </header>
      
      <main class="max-h-full h-full overflow-y-scroll px-4 py-2">
        <NuxtPage/>
      </main>
     
      <footer class="w-full">
        <MobileNavBar class=""/>
      </footer>
    </div>
    <!-- <div v-else class="h-screen flex">
      <AsideBar/>
      <main class="w-full p-2 bg-neutral-100">
        <slot/>
      </main>
    </div> -->
</template>
<script setup lang="ts">
import { useStoreBase } from '~/store/useStore';
import pokeball from '~/assets/icons/pokeball.vue';
const isMobile = ref()
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768; 
};

</script>