<template>
  <div class="w-full h-auto flex flex-col items-center">
    <Nav />
    <NuxtPage />
  </div>
</template>

<style>

@media (min-width: 0px) { 
  body {
    background: url(/backgrounds/ball-bg.webp);
    background-size: 200vw 100em;
    background-repeat: no-repeat;
    background-position: center top;
  }
}


@media (min-width: 1536px) { 
  body {
    background-size: 130vw 120em;
  }
}

@media (min-width: 768px) {  }
@media (min-width: 1024px) {  }
@media (min-width: 1280px) {  }
</style>
