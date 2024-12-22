<script setup lang="ts">
const items = ref([
  { type: 'Feature', title: 'Announcing the start of active development', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
  { type: 'Blogpost', title: 'News regarding launch date', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
  { type: 'Update', title: 'Updates on family trees', date: '15/06/2024', content: 'Create and customize your own character and carve your own path throughout the major football leagues of Europe customize your own character and carve you', image: '' },
])
</script>

<template>
  <div class="space-y-48 px-4 lg:px-16 2xl:px-0 2xl:max-w-7xl mx-auto py-2 space-y-2 2xl:space-y-4">
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



    <!--<div class="w-full flex flex-col max-w-3xl mx-auto space-y-4">
      <h1 class="uppercase font-bold font-work text-5xl title text-[#1F1F1F]">Frequently asked questions</h1>
      <span class="text-[#4D4D4D]">Last updated 10/2024</span>
      <div class="grid grid-cols-1 w-full gap-4">
        <Question question="When will the game be released?" answer="At this stage, it's too early in development for us to provide an accurate release date. We will share updates as we progress further."/>
        <Question question="Will the game be free to play?" answer="Yes, the core game will always be free to play, and no purchases will ever be required to enjoy the complete base experience."/>
        <Question question="Which devices will the game be available on?" answer="The game will initially launch on Google Play, available for Android devices. We plan to expand support to other platforms after a successful and stable launch."/>
        <Question question="Will there be in-game purchases?" answer="Yes, we plan to offer an option to disable ads through a microtransaction. However, no purchases will ever be necessary to play and enjoy the game."/>
        <Question question="Can I save my progress if I switch devices?" answer="Yes, you can save your progress by linking your account to a social media or cloud service, allowing you to continue seamlessly on a new device."/>
        <Question question="What languages will be supported at launch?" answer="Initially, we plan to support English only, as the game is text-heavy. We are considering adding more languages in the future based on demand."/>
        <Question question="Will an internet connection be required to play?" answer="No, all essential game files and data will be stored on your device. An internet connection will only be needed for features like leaderboards and other social elements."/>
      </div>
    </div>-->
  </div>
  <div class="w-full bg-blue-500">
    
  </div>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
</style>