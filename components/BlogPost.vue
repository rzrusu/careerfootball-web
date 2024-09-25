<script setup lang="ts">
defineProps<{
  post: { type: string, title: string, date: string, content: string, image: string }
}>()
</script>

<template>
    <div>
        <div class="h-[256px] rounded-t-lg bg-gray-300">
            <div class="uppercase w-fit relative left-[-8%] top-[8%] bg-[#85C003] rounded-full font-work font-bold text-white px-4 py-2">{{post.type}}</div>
        </div>
        <div class="box flex flex-col bg-white p-4 space-y-4 border border-[#E5E5E5] border-t-0 rounded-b-lg rounded-x-lg">
            <div class="space-y-2"> 
                <h2 class="font-work w-full text-xl line-clamp-2">{{post.title}}</h2>
                <p class="text-[#85C003] font-semibold w-2/3">{{post.date}}</p>
            </div>
            <p class="text-[#4D4D4D] w-2/3">{{post.content}}</p>
        </div>
    </div>
</template>

<style scoped>
    .box {
        box-shadow: 0px 6px 0px 0px #E5E5E5;
    }
</style>