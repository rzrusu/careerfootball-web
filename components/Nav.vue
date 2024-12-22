
<script setup>

import { ref } from 'vue'

const navOpen = ref(false)

</script>

<template>
    <nav class="py-2 2xl:py-8 inline-flex items-center justify-between w-full max-w-7xl mx-auto">
        <a href="/"><img src="../public/logos/logo-big-min.png" alt="Logo" class="h-28 xl:h-32 2xl:h-36 w-auto"></a>
        <div class="lg:hidden">
            <button @click="navOpen = !navOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        <div class="bg-white rounded-full py-1 px-6 items-center highlight space-x-2 2xl:space-x-6 hidden lg:inline-flex">
            <ul class="flex justify-between divide-x">
                <li><a href="#" class="text-sm 2xl:text-base">Updates</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Roadmap</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Press</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Contact</a></li>
            </ul>
            <ul class="flex justify-between py-4 px-6 media">
                <li><a href="#"><Icon name="ic:baseline-tiktok" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="uil:youtube" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="ic:baseline-discord" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="prime:twitter" color="black" size="20"/></a></li>
            </ul>
        </div>
    </nav>
    <div v-if="navOpen">
        <div class="bg-white rounded-full w-full py-6 md:py-2  px-6 items-center justify-center highlight space-x-2 2xl:space-x-6 flex flex-col sm:flex-row mb-16">
            <ul class="flex justify-between divide-x">
                <li><a href="#" class="text-sm 2xl:text-base">Updates</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Roadmap</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Press</a></li>
                <li><a href="#" class="text-sm 2xl:text-base">Contact</a></li>
            </ul>
            <ul class="flex justify-between py-0 mt-4 sm:mt-0 md:py-4 px-6 media">
                <li><a href="#"><Icon name="ic:baseline-tiktok" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="uil:youtube" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="ic:baseline-discord" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="prime:twitter" color="black" size="20"/></a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

    .highlight {
        box-shadow: 0px 4px 0px 0px #E5E5E5;
    }

    a {
        @apply text-black font-semibold hover:text-gray-800 transition;
        text-decoration: none;
    }

    li {
        @apply px-4;
    }

    .media li {
        @apply px-2;
    }
</style>