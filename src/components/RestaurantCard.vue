<script>
import { XMarkIcon } from "@heroicons/vue/24/outline";
export default {
  components: {
    XMarkIcon,
  },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete-restaurant"],
  computed: {
    statusColor() {
      switch (this.restaurant.status) {
        case "Want to Try":
          return "bg-yellow-100 text-yellow-800";
        case "Recommended":
          return "bg-green-100 text-green-800";
        case "Do Not Recommend":
          return "bg-red-100 text-red-800";
        default:
          return "";
      }
    },
  },
  methods: {
    deleteRestaurant() {
      this.$emit("delete-restaurant", this.restaurant);
    },
  },
};
</script>

<template>
  <div class="block hover:bg-gray-50 dark:hover:bg-gray-900">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-gray-700 text-md dark:text-white md:truncate">
          {{ restaurant.name }}
        </p>
        <div class="flex flex-shrink-0 ml-2">
          <p
            class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
            :class="statusColor"
          >
            {{ restaurant.status }}
          </p>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <p
            class="flex items-center font-light text-gray-500 text-md dark:text-gray-300"
          >
            {{ restaurant.address }}
          </p>
        </div>
      </div>
    </div>
    <XMarkIcon
      @click="deleteRestaurant"
      class="block h-6 w-6 cursor-pointer text-red-400 float-right -mt-6"
    />
  </div>
</template>
