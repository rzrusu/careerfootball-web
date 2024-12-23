<script setup lang="ts">
defineProps<{
    leftaligned?: boolean, title: string, text: string, image: string, gray?: boolean, bulletpoints?: string[]
}>()
</script>

<template>
    <div :class="{ 'bg-gray-100': gray }">
        <div class="grid grid-cols-4 py-24 items-center gap-24 max-w-7xl mx-auto">
            <div :class="{ 'order-last': !leftaligned }" class="space-y-5 w-full col-span-2">
                <h2 class="font-work font-semibold text-5xl title text-[#1F1F1F] w-2/3"> 
                    {{ title.toUpperCase() }}
                </h2>
                <p class="text-[#4D4D4D] w-4/5">
                    {{ text }}
                </p>
                <div class="space-y-2">
                    <div v-for="point in bulletpoints" :key="point" class="text-[#4D4D4D] font-semibold flex items-center space-x-2">
                        <img src="../public/star.svg" alt="Star" class="w-5 h-5 inline-block mr-2">
                        {{ point }}
                    </div>
                </div>
            </div>
            <img :src="`/features/${image}`" alt="Football" class="w-[90%] self-end rounded-lg min-h-96 col-span-2">
        </div>
    </div>
</template>