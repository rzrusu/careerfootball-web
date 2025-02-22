<template>
  <footer class="w-full border-t border-gray-200 py-8 flex flex-col items-center justify-center space-y-4 mt-16">
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