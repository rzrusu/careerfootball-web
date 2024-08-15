<template>
  <div class="space-y-16">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center">
      <div class="flex flex-col justify-center h-full space-y-16">
        <div class="flex flex-col space-y-2">
          <h1 class="uppercase font-bold font-work text-[82px] title text-[#1F1F1F]">Become a football superstar</h1>
          <p class="text-lg text-[#4D4D4D] w-2/3">
            Ready to take over the world? Join us on the development journey of the ultimate football career mobile game.
          </p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <PrimaryButton href="#">Development Blog</PrimaryButton>
          <DiscordButton href="#"/>
        </div>
      </div>
      <div class="inline-flex justify-end h-full">
        <img src="../public/phones.webp" alt="Football" class="w-[575px] h-[663px]">
      </div>
    </div>
    <div>
      <h1 class="uppercase font-bold font-work text-3xl title text-[#1F1F1F]">Latest updates</h1>
    </div>
  </div>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
</style>