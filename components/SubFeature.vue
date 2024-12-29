<script setup lang="ts">
defineProps<{
    title: string, text: string, icon: string
}>()

const open = ref(false)

</script>

<template>
    <div class="space-y-4 flex flex-col">
        <Icon :name="icon" size="48" color="#ffffff"/>
        <div>
            <h3 class="text-white font-semibold text-lg">{{title}}</h3>
            <p class="text-gray-200">{{text}}</p>
        </div>
    </div>
</template>

<style scoped>

</style>