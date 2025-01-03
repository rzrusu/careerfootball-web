<script setup lang="ts">
import SubFeature from '~/components/SubFeature.vue';

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
  </div>
  <div class="w-full">
    <Section title="Make your own journey" 
            text="Create and customize your own character. Carve your own path throughout the major leagues of international football. Fight for you place among the greats." 
            :bulletpoints="['Build and train your skillset', 'Fight for a first-team spot', 'Impress scouts and coaches']" 
            image="feature-1-2x.webp" 
    />
    <Section title="Conquer the world stage" 
            :leftaligned="true"
            text="Play for the biggest teams, sign high profile contracts, give interviews and gain fame, attend parties and events, expand your influence and network." 
            :bulletpoints="['Become a superstar', 'Make decisions off and on the pitch', 'Compete for the biggest trophies']" 
            image="feature-4-2x.png" 
            :gray="true" 
    />
    <div class="bg-green-800 py-24">
      <div class="max-w-7xl flex flex-col items-center justify-center mx-auto space-y-8">
        <h1 class="uppercase font-bold font-work text-2xl title text-[#A1E53E]">Match engine</h1>
        <h1 class="uppercase font-bold font-work text-5xl title text-white">Immersive match simulation</h1>
        <div class="w-full h-[30vw] bg-gray-500 rounded-lg">

        </div>
        <div class="grid grid-cols-4 gap-8">
          <SubFeature title="Dynamic Decision Points" text="Step in with key decisions that shape the match’s outcome. Will you play it safe or take a bold risk?" icon="f7:skew"/>
          <SubFeature title="Probability-Driven Realism" text="Smart probabilities bring the game to life, making every move feel authentic and unpredictable." icon="material-symbols:full-stacked-bar-chart"/>
          <SubFeature title="Narrative-Rich Matches" text="Experience every thrilling moment through detailed, immersive text. From goals to saves, live the action." icon="material-symbols:stadium"/>
          <SubFeature title="Player-Controlled Fate" text="Build your legacy one decision at a time, both on and off the pitch through various game events." icon="icon-park-solid:road-sign-both"/>
        </div>
      </div>
    </div>
    <Section title="Build your own empire" 
            text="Sign high-value contracts with teams and invest your wealth on vehicles, properties, luxury items, and much more." 
            :bulletpoints="['Purchase real estate and vehicles', 'Build your personal brand', 'Impress others with your wealth', 'Live a luxurious life']" 
            image="feature-4-2x.png" />
    <Section title="Carve your own story" 
            :leftaligned="true"
            text="Your character interacts with the people around them. Make friendships and rivalries, attend social and family events, and build a family with your lover." 
            :bulletpoints="['Make friendships and rivalries', 'Build a family with your partner', 'Organize and attend social events']" 
            image="feature-6-2x.webp" 
            :gray="true"/>
    </div>
    <div class="w-full flex flex-col max-w-3xl mx-auto space-y-4 py-36">
      <h1 class="uppercase font-bold font-work text-5xl title text-[#1F1F1F]">Frequently asked questions</h1>
      <span class="text-[#4D4D4D]">Last updated 10/2024</span>
      <div class="grid grid-cols-1 w-full gap-4">
        <Question question="When will the game be released?" answer="At this stage, it's too early in development for us to provide an accurate release date. We will share updates as we progress further."/>
        <Question question="Will the game be free to play?" answer="Yes, the core game will always be free to play, and no purchases will ever be required to enjoy the complete base experience."/>
        <Question question="Which devices will the game be available on?" answer="The game will initially launch on Google Play, available for Android devices. We plan to expand support to other platforms after a successful and stable launch."/>
        <Question question="Will there be in-game purchases?" 
        answer="Yes, we plan to offer an option to disable ads through a microtransaction.
         However, no purchases will ever be necessary to play and enjoy the game. While we intend to add microtransactions that allow you to have certain advantages or level up your player faster, these will always be optional and the game will always be completable without payment."/>
        <!--<Question question="Can I save my progress if I switch devices?" answer="Yes, you can save your progress by linking your account to a social media or cloud service, allowing you to continue seamlessly on a new device."/>-->
        <Question question="What languages will be supported at launch?" answer="Initially, we plan to support English only, as the game is text-heavy. We are considering adding more languages in the future based on demand."/>
        <Question question="Will an internet connection be required to play?" answer="No, all essential game files and data will be stored on your device. An internet connection will only be needed for features like leaderboards and other social elements."/>
      </div>
    </div>

    <!-- make a simple footer, make the text tighter so it's not so wide  -->
    <div class="w-full flex flex-col items-center justify-center py-16 space-y-8">
      <h1 class="uppercase font-bold font-work text-5xl title text-[#1F1F1F] w-1/3 text-center">Join the development journey</h1>
      <p class="text-[#4D4D4D] w-1/3 text-center">
        Be part of something special from the ground up. Follow our development updates, share your ideas, and help shape the future of the game. Join our growing community today!
      </p>
      <div class="inline-flex items-center space-x-2">
        <PrimaryButton href="#">Development Blog</PrimaryButton>
        <DiscordButton href="#"/>
      </div>
    </div>

    <!-- make a simple footer with links to the privacy policy and terms of service  and other -->
     
    <!-- Footer -->
    <footer class="w-full border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto py-8 px-4 lg:px-16 2xl:px-0">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <img src="../public/logos/logo-big-min.png" alt="Logo" class="h-28 w-auto">
          
          <!-- Links -->
          <div class="flex items-center space-x-6 text-sm text-gray-600">
            <a href="/privacy-policy" class="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms-of-service" class="hover:text-gray-900">Terms of Service</a>
            <a href="/press-kit" class="hover:text-gray-900">Press Kit</a>
            <a href="#" class="hover:text-gray-900">Discord</a>
            <a href="#" class="hover:text-gray-900">Development Blog</a>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
  
</style>