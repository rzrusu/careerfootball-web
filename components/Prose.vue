<template>
  <div class="prose dark:prose-invert max-w-none
    prose-h1:!text-gray-900 prose-h1:!font-bold prose-h1:text-4xl prose-h1:mt-6 prose-h1:mb-4
    prose-h2:!text-gray-900 prose-h2:!font-bold prose-h2:text-3xl prose-h2:mt-5 prose-h2:mb-4 prose-h2:a-none
    prose-h3:!text-gray-900 prose-h3:!font-bold prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-4 prose-h3:a-none
    prose-p:text-gray-600 prose-p:leading-7 prose-p:mb-4
    prose-strong:!text-gray-900 prose-strong:!font-bold
    prose-em:!text-gray-900 prose-em:italic
    prose-a:text-black prose-a:no-underline hover:prose-a:underline
    prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
    prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
    prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
    prose-li:text-gray-600 prose-li:mb-2
    prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:rounded
    prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg
    prose-img:rounded-lg prose-img:shadow-md prose-img:cursor-zoom-in
    prose-table:border-collapse prose-td:border prose-td:p-2 prose-th:border prose-th:p-2 prose-th:bg-gray-100
    prose-hr:border-gray-300 prose-hr:my-8">
    <slot></slot>
  </div>
</template>

<style>
  h2, h3 {
     text-decoration: none !important;
     color: #1F1F1F !important;
  }
</style>