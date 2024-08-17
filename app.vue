<template>
  <div class="max-w-full px-16 2xl:px-0 2xl:max-w-7xl mx-auto py-2 space-y-2 2xl:space-y-4">
    <Nav />
    <NuxtPage />
  </div>
</template>

<style>

@media (min-width: 640px) { 
  body {
    background: url(./backgrounds/ball-bg.png);
    background-size: 120vw 100em;
    background-repeat: no-repeat;
    background-position: center top;
  }
}


@media (min-width: 1536px) { 
  body {
    background-size: 130vw 130em;
  }
}

</style>
