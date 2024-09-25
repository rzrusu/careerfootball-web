<template>
  <div class="w-full px-4 lg:px-16 2xl:px-0 2xl:max-w-7xl mx-auto py-2 space-y-2 2xl:space-y-4 h-auto">
    <Nav />
    <NuxtPage />
  </div>
</template>

<style>

@media (min-width: 0px) { 
  body {
    background: url(./backgrounds/ball-bg.png);
    background-size: 300vw 100em;
    background-repeat: no-repeat;
    background-position: center top;
  }
}


@media (min-width: 1536px) { 
  body {
    background-size: 130vw 130em;
  }
}

@media (min-width: 768px) {  }
@media (min-width: 1024px) {  }
@media (min-width: 1280px) {  }
</style>
