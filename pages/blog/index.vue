<template>
  <div class="space-y-12 px-4 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <h1 class="text-5xl font-black font-work text-[#1F1F1F] mb-3">Blog</h1>
      <p class="text-lg text-gray-600">
        Explore the latest news, updates, and insights from the Football Career team.
      </p>
    </div>

    <!-- Blog Posts List -->
    <div class="">
      <NuxtLink 
        v-for="post in posts" 
        :key="post._path" 
        :to="post._path"
        class="shadow-lg"
      >
      <div v-if="post.image" class="mt-8">
          <img :src="post.image" class="w-full h-56 object-cover rounded-t-lg" />
      </div>
        <div class="p-4 bg-white w-full items-center highlight space-y-2 border border-gray-200" :class="post.image ? 'rounded-b-xl' : 'rounded-xl'">
          <h2 class="text-3xl font-serif font-bold text-gray-900">{{ post.title }}</h2>
          <p class="text-gray-600">{{ post.description }}</p>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <time>{{ post.date }}</time>
            <span>•</span>
            <span>by {{ post.author }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-posts', () => queryContent('blog').find())

useHead({
  bodyAttrs: {
    class: 'uses_light_bg'
  }
})
</script> 

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