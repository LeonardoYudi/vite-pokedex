<template>
    <div v-if="isMobile" class="h-screen max-h-screen flex flex-col">
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
import { useStoreBase } from '~/store/useStore';
const isMobile = ref()

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768; 
};

</script>