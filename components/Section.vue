<script setup lang="ts">
defineProps<{
    leftaligned: boolean, title: string, text: string, image: string
}>()
</script>

<template>
    <div class="grid grid-cols-4 py-32 items-center gap-24">
        <div :class="{ 'order-last': !leftaligned }" class="space-y-5 w-full col-span-2">
            <h2 class="font-work font-semibold text-3xl title text-[#1F1F1F]"> 
                {{ title }}
            </h2>
            <p class="text-[#4D4D4D] w-4/5">
                {{ text }}
            </p>
        </div>
        <img :src="`/features/${image}`" alt="Football" class="w-[90%] self-end rounded-lg min-h-96 col-span-2">
    </div>
</template>