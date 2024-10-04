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
        <SectionHeader text="Start from humble beginnings" />
        <Section :leftaligned="true" title="Begin your journey" text="Start small by playing in local leagues, hone your skills, and build your reputation step by step. Stay focused, and let each game be a learning experience on your path to success." image="feature-1-2x.webp" />
        <Section :leftaligned="false" title="Overcome a multitude of challenges" text="Face challenges both on and off the field. Push past obstacles, stay resilient, and prove your worth through determination and consistent effort." image="feature-2-2x.png" />
        <Section :leftaligned="true" title="Make a name for yourself" text="As you prove your talent, scouts take notice. Your journey toward fame starts here, with every match bringing you closer to the spotlight." image="feature-1-2x.png" />
      </div>
      
      <div>
          <SectionHeader text="Conquer the world stage" />
          <Section :leftaligned="true" title="Play for elite teams" text="Join top clubs around the world and compete in prestigious leagues and tournaments. These stages are where legends are made, and your time to shine has arrived." image="feature-4-2x.png" />
          <Section :leftaligned="false" title="Deliver iconic performances" text="Deliver match-winning performances, break records, and etch your name in the history books. Let each game push you toward immortal status." image="feature-5-2x.png" />
          <Section :leftaligned="true" title="Expand your global influence" text="Take part in media appearances, commercials, and major events. Your influence grows as you take on new roles beyond the football field." image="feature-6-2x.png" />
      </div>
      
      <!--
      <div>
          <SectionHeader text="Build meaningful relationships" />
          <Section :leftaligned="true" title="Form bonds with teammates" text="Build strong relationships with teammates, coaches, and fans. Success comes easier when the team is united and works together for greatness." image="test" />
          <Section :leftaligned="false" title="Engage with your fans" text="Connect with your loyal supporters, give back to the community, and create lasting memories. Your fans are your driving force." image="test" />
          <!--<Section :leftaligned="true" title="Build a legacy" text="Mentor younger players, foster deep connections, and leave behind a lasting impact both on and off the pitch. Your legacy will outlive your career." image="test" />
          <Section :leftaligned="true" title="Start a family" text="Will you find true love and start a family, or embrace the spotlight as a global star? Your personal life choices will shape your future." image="test" />
      </div> -->
      
      <div>
          <SectionHeader text="Acquire high value assets" />
          <Section :leftaligned="true" title="Accumulate wealth" text="Earn lucrative contracts, endorsement deals, and investments. Make smart financial decisions that will ensure your future prosperity." image="test" />
          <Section :leftaligned="false" title="Own luxury assets" text="Acquire prestigious real estate in prime locations around the world. Purchase luxury items that reflect your success and lifestyle." image="test" />
          <Section :leftaligned="true" title="Build your empire" text="Diversify your assets with businesses, brand deals, and other investments. Establish an empire that continues to grow beyond football." image="test" />
      </div>
      
    
      
    </div>
  </div>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
</style>