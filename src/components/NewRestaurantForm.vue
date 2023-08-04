<script>
  import { v4 as uuidv4 } from 'uuid'
  import { restaurantStatusList } from '@/utils/constants'
  export default {
    emits: ['add-new-restaurant', 'cancel-new-restaurant'],
    data: () => ({
      newRestaurant: {
        id: uuidv4(),
        name: '',
        address: '',
        website: '',
        status: 'Want to Try'
      },
      restaurantStatusList
    })
  }
</script>

<template>
  <form @submit.prevent class="mb-4">
    <div class="input-wrapper flex flex-wrap">
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black">Name</label>
        <input
          v-model="newRestaurant.name"
          type="text"
          class="border-form-stroke mr-3 text-body-color placeholder-body-color focus:border-primary active:border-primary py-1 rounded-lg border-[1.5px] px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
      </div>
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black"
          >Website</label
        >
        <div class="flex items-center">
          <span
            class="h-full rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-1 px-2 text-base text-gray-400">
            https://
          </span>
          <input
            type="text"
            v-model="newRestaurant.website"
            class="rounded-br-md rounded-tr-md border border-form-stroke p-1 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]" />
        </div>
      </div>
      <div class="field mb-3 w-1/2">
        <label class="mb-1 block text-base font-medium text-black"
          >Address</label
        >
        <input
          v-model="newRestaurant.address"
          type="text"
          class="border-form-stroke mr-3 text-body-color placeholder-body-color focus:border-primary active:border-primary py-1 rounded-lg border-[1.5px] px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
      </div>
      <div class="field mb-3 w-1/2">
        <label
          for="selectInput"
          class="mb-1 block text-base font-medium text-black"
          >Status</label
        >
        <select
          id="selectInput"
          v-model="newRestaurant.status"
          name="selectInput"
          class="block px-4 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-300">
          <option
            v-for="(status, index) in restaurantStatusList"
            :value="status"
            :key="`option-${index}`">
            {{ status }}
          </option>
        </select>
      </div>
    </div>
    <div class="field">
      <div class="buttons">
        <button
          @click="$emit('add-new-restaurantt', newRestaurant)"
          class="px-4 py-0.5 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 mr-2">
          Create
        </button>
        <button
          @click="$emit('cancel-new-restaurant')"
          class="px-4 py-0.5 font-font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>
