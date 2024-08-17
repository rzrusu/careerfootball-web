<script setup lang="ts">
const href = ref('')
</script>

<template>
    <a href="{{ href }}" class="bg-[#404EEE] inline-flex items-center hover:bg-[#5663F0] space-x-2 text-white 2xl:text-lg font-bold py-3 px-7 2xl:py-4 2xl:px-10 rounded-full transition">
        <Icon name="ic:baseline-discord" color="white" size="28"/>
        <span>Discord</span>
    </a>
</template>

<style scoped>
    a {
        box-shadow: 0px 4px 0px 0px #1425E5;
    }
</style>