<script setup lang="ts">
defineProps<{
    question: string, answer: string
}>()

const open = ref(false)

</script>

<template>
    <div @click="open = !open"  :class="{ 'boxeffect-active': open, 'boxeffect': !open }" class="flex flex-row items-start w-full py-4 px-3 hover:cursor-pointer space-x-4 bg-white border border-[#E5E5E5] rounded-lg">
        <div class="p-1.5 bg-[#85C003]/15 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 fill-[#85C003]">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
              </svg>              
        </div>
        <div class="flex flex-col space-y-2 w-full">
            <div class="flex flex-row items-center justify-between">
                <h3 class="font-bold text-xl font-work text-[#1F1F1F]">{{question}}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 fill-gray-400" v-if="!open">
                    <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 fill-gray-400" v-if="open">
                    <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                  
            </div>
            <p v-if="open" class="text-[#4D4D4D]">
                {{answer}}
            </p>
        </div>
        
    </div>
</template>

<style scoped>
    .boxeffect {
        box-shadow: 0px 6px 0px 0px #E5E5E5;
    }

    .boxeffect-active {
        box-shadow: 0px 6px 0px 0px #d7ebd3;
    }
</style>
