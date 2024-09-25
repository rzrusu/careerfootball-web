<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
    <div class="flex flex-row items-center justify-center space-x-8 w-full">
        <img src="../public/stars.png" alt="Stars" class="h-8 w-auto">
        <h1 class="font-work font-bold text-4xl title text-center text-[#1F1F1F] uppercase w-1/3"> 
            {{ text }}
        </h1>
        <img src="../public/stars-right.png" alt="Stars" class="h-8 w-auto">
      </div>
</template>

<style scoped>
    a {
        box-shadow: 0px 4px 0px 0px #618D02;
    }
</style>