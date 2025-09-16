<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type CarouselImage = string | { src: string; alt?: string; caption?: string }

const props = withDefaults(defineProps<{
  images?: CarouselImage[]
  initialIndex?: number
  loop?: boolean
  autoplay?: boolean
  intervalMs?: number
  showArrows?: boolean
  showIndicators?: boolean
}>(), {
  images: () => [],
  initialIndex: 0,
  loop: true,
  autoplay: false,
  intervalMs: 5000,
  showArrows: true,
  showIndicators: true
})

const currentIndex = ref(props.initialIndex)
const isHovering = ref(false)
const containerRef = ref<HTMLElement | null>(null)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const normalizedImages = computed<CarouselImage[]>(() => {
  const input: unknown = (props as any).images
  if (Array.isArray(input)) return input as CarouselImage[]
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input)
      return Array.isArray(parsed) ? (parsed as CarouselImage[]) : []
    } catch {
      return []
    }
  }
  if (input && typeof input === 'object') return [input as CarouselImage]
  return []
})

const slides = computed(() => {
  return normalizedImages.value.map((img) => {
    if (typeof img === 'string') return { src: img, alt: '' }
    return { src: img.src, alt: img.alt || '', caption: (img as any).caption }
  })
})

const slidesCount = computed(() => slides.value.length)

function goTo(index: number) {
  if (slidesCount.value === 0) return
  if (props.loop) {
    const mod = (index % slidesCount.value + slidesCount.value) % slidesCount.value
    currentIndex.value = mod
  } else {
    currentIndex.value = Math.max(0, Math.min(index, slidesCount.value - 1))
  }
}

function next() {
  goTo(currentIndex.value + 1)
}

function prev() {
  goTo(currentIndex.value - 1)
}

function startAutoplay() {
  if (!props.autoplay || slidesCount.value <= 1) return
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (!isHovering.value) next()
  }, props.intervalMs)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

// Basic swipe support
let pointerDownX = 0
let pointerDown = false

function onPointerDown(e: PointerEvent | TouchEvent | MouseEvent) {
  pointerDown = true
  const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
  pointerDownX = x
}

function onPointerUp(e: PointerEvent | TouchEvent | MouseEvent) {
  if (!pointerDown) return
  pointerDown = false
  const x = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as MouseEvent).clientX
  const delta = x - pointerDownX
  const threshold = 40
  if (Math.abs(delta) > threshold) {
    if (delta < 0) next()
    else prev()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  startAutoplay()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  stopAutoplay()
})

watch(() => props.autoplay, () => startAutoplay())
watch(slidesCount, () => startAutoplay())
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @mousedown.passive="onPointerDown"
    @mouseup.passive="onPointerUp"
    @touchstart.passive="onPointerDown"
    @touchend.passive="onPointerUp"
  >
    <div class="relative overflow-hidden rounded-lg pb-6">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full shrink-0 select-none"
        >
          <img
            :src="slide.src"
            :alt="slide.alt || ''"
            class="w-full h-auto object-contain cursor-zoom-in"
            data-no-zoom
            draggable="false"
          />
          <div v-if="slide.caption" class="text-center text-sm text-gray-600 mt-2">
            {{ slide.caption }}
          </div>
        </div>
      </div>

      <button
        v-if="showArrows && slidesCount > 1"
        type="button"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow cursor-pointer"
        aria-label="Previous slide"
        @click="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>

      <button
        v-if="showArrows && slidesCount > 1"
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow cursor-pointer"
        aria-label="Next slide"
        @click="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>

    <div v-if="showIndicators && slidesCount > 1" class="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2">
      <button
        v-for="(_, i) in slidesCount"
        :key="i"
        type="button"
        class="h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400"
        :class="i === currentIndex ? 'w-6 bg-gray-600' : 'w-2'"
        :aria-label="`Go to slide ${i + 1}`"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
</style>


