
<template>
    <nav class="p-4 inline-flex items-center justify-between w-full">
        <a href="/"><img src="../public/logos/logo-big-min.png" alt="Logo" class="h-32 w-auto"></a>
        <div class="bg-white rounded-full py-2 px-6 inline-flex items-center highlight space-x-6">
            <ul class="flex justify-between divide-x">
                <li><a href="#">Updates</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="flex justify-between py-4 px-6 media">
                <li><a href="#"><Icon name="ic:baseline-tiktok" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="uil:youtube" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="ic:baseline-discord" color="black" size="24"/></a></li>
                <li><a href="#"><Icon name="prime:twitter" color="black" size="20"/></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

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