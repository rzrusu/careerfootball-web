import { defineNuxtPlugin } from 'nuxt/app'
import mediumZoom from 'medium-zoom'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return

  let zoomInstance: ReturnType<typeof mediumZoom> | null = null
  const selector = '.prose img:not([data-no-zoom])'

  const applyZoom = () => {
    const images = document.querySelectorAll(selector)
    if (images.length === 0) return

    if (!zoomInstance) {
      zoomInstance = mediumZoom(images, {
        background: 'rgba(0,0,0,0.85)'
      })
    } else {
      zoomInstance.detach()
      zoomInstance.attach(images)
    }
  }

  nuxtApp.hook('app:mounted', () => {
    // Ensure this runs after hydration is done
    setTimeout(() => applyZoom(), 0)
  })

  nuxtApp.hook('page:finish', () => {
    // Defer to avoid SSR hydration timing issues
    setTimeout(() => applyZoom(), 0)
  })
})


