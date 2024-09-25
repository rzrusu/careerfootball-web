<script setup lang="ts">
defineProps<{
  post: { type: string, title: string, date: string, content: string, image: string }
}>()
</script>

<template>
    <div class="h-full flex flex-col">
        <div class="h-[256px] rounded-t-lg bg-gray-300">
            <div class="uppercase w-fit relative left-[-8%] top-[8%] bg-[#85C003] rounded-full font-work font-bold text-white px-4 py-2">{{post.type}}</div>
        </div>
        <div class="boxeffect flex flex-grow  flex-col bg-white p-4 space-y-4 border border-[#E5E5E5] border-t-0 rounded-b-lg rounded-x-lg">
            <div class="space-y-2"> 
                <h2 class="font-work w-full text-xl line-clamp-2 text-pretty">{{post.title}}</h2>
                <p class="text-[#85C003] font-semibold w-2/3">{{post.date}}</p>
            </div>
            <div class="h-full flex flex-col justify-between">
                <p class="text-[#4D4D4D] w-full line-clamp-3 mb-4">{{post.content}}</p>
                <a href="#" class="underline  text-blue-500">Read More</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .boxeffect {
        box-shadow: 0px 6px 0px 0px #E5E5E5;
    }
</style>