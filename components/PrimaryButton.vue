<script setup lang="ts">
const href = ref('')
const text = ref('')
</script>

<template>
    <a href="{{ href }}" class="bg-[#85C003] hover:bg-[#96D803] text-white 2xl:text-lg font-bold py-3 px-7 2xl:py-4 2xl:px-10 rounded-full transition">
        <slot></slot>
    </a>
</template>

<style scoped>
    a {
        box-shadow: 0px 4px 0px 0px #618D02;
    }
</style>