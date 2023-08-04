<script lang="ts" setup>
  import { bookGenres } from '@/utils/constants'
  import type { Book } from '@/types'

  const emit = defineEmits<{
    (e: 'add-new-book', newBook: Book): void
    (e: 'cancel-new-book'): void
  }>()

  const newBook: Book = {
    id: '',
    title: '',
    author: '',
    genre: '',
    printRun: null
  }

  const addNewBook = () => {
    emit('add-new-book', newBook)
  }
</script>

<template>
  <form @submit.prevent class="mb-4">
    <div class="input-wrapper flex flex-wrap">
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black">Title</label>
        <input
          v-model="newBook.title"
          type="text"
          class="border-form-stroke mr-3 text-body-color placeholder-body-color focus:border-primary active:border-primary py-1 rounded-lg border-[1.5px] px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
      </div>
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black"
          >Author</label
        >
        <input
          v-model="newBook.author"
          type="text"
          class="border-form-stroke mr-3 text-body-color placeholder-body-color focus:border-primary active:border-primary py-1 rounded-lg border-[1.5px] px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
      </div>
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black"
          >Print Run</label
        >
        <input
          v-model="newBook.printRun"
          type="text"
          placeholder="10000"
          class="border-form-stroke mr-3 text-body-color placeholder-body-color focus:border-primary active:border-primary py-1 rounded-lg border-[1.5px] px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
      </div>
      <div class="field mb-3 w-1/2">
        <label
          for="selectInput"
          class="mb-1 block text-base font-medium text-black"
          >Genre</label
        >
        <select
          id="selectInput"
          v-model="newBook.genre"
          name="selectInput"
          class="block w-full px-4 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-300">
          <option
            v-for="(genre, index) in bookGenres"
            :value="genre"
            :key="`option-${index}`">
            {{ genre }}
          </option>
        </select>
      </div>
    </div>
    <div class="field">
      <div class="buttons">
        <button
          @click="addNewBook()"
          class="px-4 py-0.5 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 mr-2">
          Create
        </button>
        <button
          @click="emit('cancel-new-book')"
          class="px-4 py-0.5 font-font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>
