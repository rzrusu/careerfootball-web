<script setup lang="ts">
  const items = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
  ];


  useSeoMeta({
    title: 'Football Career - Become a football superstar',
    description: 'Football Career is a mobile text-based simulation game where you live the dream of becoming a football legend. Train your skills, sign with top teams, and rise to greatness on and off the pitch.',
    ogDescription: 'Football Career is a mobile text-based simulation game where you live the dream of becoming a football legend. Train your skills, sign with top teams, and rise to greatness on and off the pitch.',
    ogImage: '/og-image.png',
    twitterTitle: 'Football Career - Become a football superstar',
    twitterDescription: 'Football Career is a mobile text-based simulation game where you live the dream of becoming a football legend. Train your skills, sign with top teams, and rise to greatness on and off the pitch.',
    twitterImage: '/og-image.png',
    twitterCard: 'summary'
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })
</script>

<template>
  <div class="space-y-48 mt-24 md:mt-0 px-4 lg:px-16 2xl:px-0 2xl:max-w-7xl mx-auto py-2 2xl:space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 mb-48">
      <div class="flex flex-col justify-start md:justify-center h-auto w-full space-y-16">
        <div class="flex flex-col space-y-4">
          <h1 class="uppercase font-bold font-work w-full text-5xl    lg:text-[72px] 2xl:text-[86px] title text-[#1F1F1F]">Become a football superstar</h1>
          <h2 class="text-2xl md:text-4xl font-bold font-work text-[#1F1F1F] uppercase">Train. Play. Win.</h2>
          <p class="2xl:text-lg text-[#4D4D4D] w-2/3">
            Football Career is a mobile text-based simulation game where you live the dream of becoming a football legend. Train your skills, sign with top teams, and rise to greatness on and off the pitch.
          </p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <DiscordButton href="https://discord.gg/hwDFc2S94Y"/>
        </div>
      </div>
      <div class="inline-flex justify-center 2xl:justify-end h-full hidden md:block">
        <NuxtImg src="/phones.webp" 
                 alt="Football Career game interface displayed on multiple mobile phones" 
                 class="w-2/3 h-auto md:w-[420px] md:h-[484px] 2xl:w-[575px] 2xl:h-[663px]" />
      </div>
    </div>
    <div class="w-full flex flex-col items-center justify-center">
      <h1 class="uppercase font-bold font-work text-3xl title text-[#1F1F1F] mb-12">Screenshots</h1>

      <UCarousel v-slot="{ item }" :items="items">
        <div class="px-4"> 
          <NuxtImg :src="`/screenshots/${item}.webp`" 
                   :alt="`Football Career gameplay screenshot ${item}`" 
                   width="320" height="650" draggable="false"/>
        </div>
      </UCarousel>
    </div>  
  </div>
  <div class="w-full mt-48" id="features">
    <Section title="Make your own journey" 
            text="Create and customize your own character. Carve your own path throughout the major leagues of international football. Fight for you place among the greats." 
            :bulletpoints="['Build and train your skillset', 'Fight for a first-team spot', 'Impress scouts and coaches']" 
            image="f1.webp" 
    />
    <Section title="Carve your own story" 
            :leftaligned="true"
            text="Your character interacts with the people around them. Make friendships and rivalries, attend social and family events, and build a family with your lover." 
            :bulletpoints="['Make friendships and rivalries', 'Build a family with your partner', 'Organize and attend social events']" 
            image="f4.webp" 
            :gray="true"/>
    <div class="bg-green-800 py-24 px-4">
      <div class="max-w-7xl flex flex-col items-center justify-center mx-auto space-y-8">
        <h1 class="uppercase font-bold font-work text-2xl title text-[#A1E53E]">Match engine</h1>
        <h1 class="uppercase font-bold font-work text-5xl text-center title text-white">Immersive match simulation</h1>
          <NuxtImg src="/features/match.webp" 
                   alt="Football Career match engine interface showing gameplay simulation" 
                   class="hidden md:block w-full h-[40vw] lg:h-[30vw] object-cover rounded-xl"/>
          <NuxtImg src="/features/match-mobile.webp" 
                   alt="Football Career match engine interface optimized for mobile devices" 
                   class="block md:hidden w-full h-auto object-cover rounded-xl"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
            image="f3.webp" />
            <Section title="Conquer the world stage" 
            :leftaligned="true"
            text="Play for the biggest teams, sign high profile contracts, give interviews and gain fame, attend parties and events, expand your influence and network." 
            :bulletpoints="['Become a superstar', 'Make decisions off and on the pitch', 'Compete for the biggest trophies']" 
            image="f2.webp" 
            :gray="true" 
    />
    </div>
    <div class="w-full flex flex-col max-w-3xl mx-auto space-y-4 py-36 px-4 lg:px-0">
      <h1 class="uppercase font-bold font-work text-4xl md:text-5xl title text-[#1F1F1F]">Frequently asked questions</h1>
      <span class="text-[#4D4D4D]">Last updated 01/2025</span>
      <div class="grid grid-cols-1 w-full gap-4">
        <Question question="When will the game be released?"
         answer="At this stage, it's too early in development for us to provide an accurate release date.
          We will share updates as we progress further. Stay up to date on our Discord (link below)."/>

        <Question question="Will the game be free to play?" answer="Yes, the core game will always be free to play, and no purchases will ever be required to enjoy the complete base experience."/>
        <Question question="Which devices will the game be available on?" answer="The game will initially launch on Google Play, available for Android devices. We plan to expand support to other platforms after a successful and stable launch."/>
        <Question question="Will there be in-game purchases?" 
        answer="Yes, we plan to offer optional microtransactions such as the ability to skip ads or have certain advantages in the game. However, no purchases will ever be necessary to play and enjoy the game."/>
  
        <Question question="What languages will be supported at launch?" answer="Initially, we plan to support English only, as the game is text-heavy. If the game launches successfully, we will consider adding more languages in the future based on demand."/>
        <Question question="Will an internet connection be required to play?" answer="No, all essential game files and data will be stored on your device. An internet connection will only be needed for features like leaderboards and other social elements which are completely optional."/>
        <Question question="Will there be ads in the game?" answer="Yes, we plan to include ads in the game as a way to support the development of the game. However, no purchases will ever be necessary to play and enjoy the game. You will be able to disable ads forever through a microtransaction."/>
      </div>
    </div>

    <div class="w-full flex flex-col items-center justify-center py-16 space-y-8 px-4 lg:px-0">
      <h1 class="uppercase font-bold font-work text-4xl md:text-5xl title text-[#1F1F1F] w-full lg:w-1/3 text-center">Join the development journey</h1>
      <p class="text-[#4D4D4D] w-full lg:w-1/3 text-center">
        Be part of something special from the ground up. Follow our development updates, share your ideas, and help shape the future of the game. Join our growing community today!
      </p>
      <div class="inline-flex items-center space-x-2">
        <DiscordButton href="https://discord.gg/hwDFc2S94Y"/>
      </div>
    </div>

    <!-- Footer -->
    <footer class="w-full border-t border-gray-200 py-8 flex flex-col items-center justify-center space-y-4">
      <div class="max-w-7xl mx-auto py-8 px-4 lg:px-16 2xl:px-0">
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="flex flex-col items-center justify-center space-y-4 text-gray-600">
              <p class="text-lg font-bold">CONTACT</p>
              <p class="text-sm text-gray-500">hello@footballcareer.app</p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4 text-gray-600">
              <p class="text-lg font-bold">CONNECT</p>
              <ul class="flex justify-between space-x-6 media text-gray-500">
                <li><a href="https://www.tiktok.com/@playfootballcareer"><Icon name="ic:baseline-tiktok" color="black" size="24"/></a></li>
                <li><a href="https://www.youtube.com/@playfootballcareer"><Icon name="uil:youtube" color="black" size="24"/></a></li>
                <li><a href="https://discord.gg/hwDFc2S94Y"><Icon name="ic:baseline-discord" color="black" size="24"/></a></li>
                <li><a href="https://x.com/careerfootball"><Icon name="prime:twitter" color="black" size="20"/></a></li>
            </ul>
            </div>
          </div>

        </div>
      </div>
      <NuxtLink to="/privacy-policy" class="text-sm text-gray-500 w-fit">Privacy Policy</NuxtLink>
      <p class="text-center text-sm text-gray-400">© 2025 Football Career. All rights reserved.</p>
    </footer>
</template>

<style scoped>
  .title {
    line-height: 85%;
  }
  
</style>