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
    <div class="space-y-48">
      <div>
        <SectionHeader text="Start from humble beginnings"/>
        <Section :leftaligned="true" title="Begin Your Journey" text="Start small by playing in local leagues, hone your skills, and build your reputation step by step. Every great career has humble origins." image="test" />
        <Section :leftaligned="false" title="Overcome Challenges" text="Face challenges both on and off the field. Work hard, rise above setbacks, and showcase your potential to move up the ranks." image="test" />
        <Section :leftaligned="true" title="Make a Name for Yourself" text="As you prove your talent, scouts take notice. Sign your first professional contract and set the stage for a legendary career." image="test" />
      </div>
      
      <div>
        <SectionHeader text="Conquer the world stage"/>
        <Section :leftaligned="true" title="Play for Elite Teams" text="Join top clubs around the world and compete in prestigious leagues and tournaments. Represent your country and become a global star." image="test" />
        <Section :leftaligned="false" title="Make Iconic Performances" text="Deliver match-winning performances, break records, and etch your name in the history books. Let the world witness your greatness." image="test" />
        <Section :leftaligned="true" title="Expand Your Global Influence" text="Take part in media appearances, commercials, and major events. Grow your fanbase and influence on and off the field." image="test" />
      </div>
      
      <div>
        <SectionHeader text="Build meaningful relationships"/>
        <Section :leftaligned="true" title="Form Bonds with Teammates" text="Build strong relationships with teammates, coaches, and fans. Support each other to achieve greatness together." image="test" />
        <Section :leftaligned="false" title="Engage with Fans" text="Connect with your loyal supporters, give back to the community, and create lasting memories through your interactions." image="test" />
        <Section :leftaligned="true" title="Build a Legacy" text="Mentor younger players, foster deep connections, and leave behind a lasting impact both on and off the pitch." image="test" />
      </div>
      
      <div>
        <SectionHeader text="Acquire high value assets"/>
        <Section :leftaligned="true" title="Accumulate Wealth" text="Earn lucrative contracts, endorsement deals, and investments. Secure your financial future through smart decisions." image="test" />
        <Section :leftaligned="false" title="Own Luxury Properties" text="Acquire prestigious real estate in prime locations around the world. Live the life of a superstar both at home and abroad." image="test" />
        <Section :leftaligned="true" title="Build Your Empire" text="Diversify your assets with businesses, brand deals, and other investments to create a lasting empire beyond football." image="test" />
      </div>
      
    </div>
  </div>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
</style>