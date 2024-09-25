<script setup lang="ts">
const items = ref([
  { type: 'Feature', title: 'Announcing the start of active development', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
  { type: 'Blogpost', title: 'News regarding launch date', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
  { type: 'Update', title: 'Updates on family trees', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
])
</script>

<template>
  <div class="space-y-48 h-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
      <div class="flex flex-col justify-start md:justify-center h-auto w-full space-y-16">
        <div class="flex flex-col space-y-4">
          <h1 class="uppercase font-bold font-work w-full text-5xl    lg:text-[72px] 2xl:text-[86px] title text-[#1F1F1F]">Become a football superstar</h1>
          <p class="2xl:text-lg text-[#4D4D4D] w-2/3">
            Ready to take over the world? Join us on the development journey of the ultimate football career mobile game.
          </p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <PrimaryButton href="#">Development Blog</PrimaryButton>
          <DiscordButton href="#"/>
        </div>
      </div>
      <div class="inline-flex justify-center 2xl:justify-end h-full">
        <img src="../public/phones.webp" alt="Football" class="w-2/3 h-auto md:w-[420px] md:h-[484px] 2xl:w-[575px] 2xl:h-[663px]">
      </div>
    </div>
    <div>
      <h1 class="uppercase font-bold font-work text-3xl title text-[#1F1F1F]">Latest updates</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-8 h-fit">
        <BlogPost v-for="item in items" :post="item"/>
      </div>
    </div>
    <div>
      <div>
        <SectionHeader text="Start from humble beginnings"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
</style>