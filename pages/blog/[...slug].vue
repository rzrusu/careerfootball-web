
<script setup>

useHead({
  bodyAttrs: {
    class: 'uses_light_bg'
  }
})

</script>

<template>
  <main>
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Blog</h1>
        <p class="text-gray-500">Stay up to date with the latest news and updates from the team.</p>
      </div>
      
    </div>
    <ContentDoc />
  </main>
</template>

<style>
  @media (min-width: 0px) { 
  .uses_light_bg {
    background: url(/backgrounds/ball-bg-light.png);
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