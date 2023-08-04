<script lang="ts" setup>
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { formatCount } from '@/utils/format'
  import { Book } from '@/types'
  import { computed } from 'vue'

  const props = defineProps<{ book: Book }>()

  const emit = defineEmits<{
    (e: 'delete-book', book: Book): void
  }>()

  const statusColor = computed(() => {
    switch (props.book.genre) {
      case 'Fantasy':
        return 'bg-yellow-100 text-yellow-800'
      case 'Fiction':
        return 'bg-green-100 text-green-800'
      case 'Psychology':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-cyan-100 text-cyan-800'
    }
  })
  const deleteBook = () => {
    emit('delete-book', props.book)
  }
</script>

<template>
  <div class="block bg- hover:bg-gray-50 dark:hover:bg-gray-900">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-gray-700 text-md dark:text-white md:truncate text-xl">
          {{ book.title }}
        </h2>
        <div class="flex flex-shrink-0 ml-2">
          <p
            class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
            :class="statusColor">
            {{ book.genre }}
          </p>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <p
            class="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
            {{ book.author }}
          </p>
          <p
            v-if="book.printRun"
            class="flex items-center text-xs pt-1 font-light text-orange-300 ml-2">
            ({{ formatCount(book.printRun) }} copies)
          </p>
        </div>
      </div>
    </div>
    <XMarkIcon
      @click="deleteBook"
      class="block h-6 w-6 cursor-pointer text-red-400 float-right -mt-6" />
  </div>
</template>
