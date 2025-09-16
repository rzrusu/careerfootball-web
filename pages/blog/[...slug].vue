<script setup>

// Fetch the current document
const { data: article } = await useAsyncData('article', () => queryContent().where({ _path: useRoute().path }).findOne())

// Components used inside Markdown (MDC)
import Carousel from '~/components/Carousel.vue'

useHead({
  bodyAttrs: {
    class: 'uses_light_bg'
  }
})

</script>

<template>
  <main>
    <div class="flex flex-col items-center justify-center">
      <div class="max-w-2xl w-full px-4">
        <div class="flex flex-col items-center justify-center space-y-4 py-12">
          <div class="bg-[#85C003] rounded-full px-4 py-1">
            <span class="text-white font-bold text-sm uppercase tracking-wide">{{ article?.type }}</span>
          </div>
          <div class="text-center">
            <h1 class="text-5xl font-black font-work text-[#1F1F1F] mb-3">{{ article?.title }}</h1>
          </div>
          <div class="flex items-center space-x-2 text-[#4D4D4D]">
            <span>{{ article?.date }}</span>
            <span>·</span>
            <span>By {{ article?.author }}</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <Prose class="w-full">
            <ContentDoc :components="{ Carousel }" />
          </Prose>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<style>
  @media (min-width: 0px) { 
  .uses_light_bg {
    background: url(/backgrounds/ball-bg-light.webp);
    background-size: 600vw 100em;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: white;
  }
}

  @media (min-width: 768px) {  
    .uses_light_bg {
      background-size: 300vw 100em;
    }
  }

@media (min-width: 1024px) {  }

@media (min-width: 1280px) {  }

@media (min-width: 1536px) { 
  .uses_light_bg {
    background-size: 130vw 120em;
  }
}

@media (min-width: 2000px) { 
  .uses_light_bg {
    background-size: 100vw 120em;
  }
}
</style>