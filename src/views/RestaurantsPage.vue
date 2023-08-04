<script>
  import NewRestaurantForm from '@/components/NewRestaurantForm.vue'
  import RestaurantCard from '@/components/RestaurantCard.vue'
  import { PlusIcon } from '@heroicons/vue/24/outline'

  export default {
    components: {
      NewRestaurantForm,
      RestaurantCard,
      PlusIcon
    },
    data: () => ({
      filterText: '',
      restaurantList: [
        {
          id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
          name: 'Sweet & Salty',
          address: 'Antifašističke borbe 23d',
          website: 'www.sweetandsalty.rs',
          status: 'Do Not Recommend'
        },
        {
          id: 'ae62a3da-791b-4f44-99a1-4be1b0ec30b8',
          name: 'Dollt Bell',
          address: 'Bulevar Mihajla Pupina 165b',
          website: 'www.dollybell.com',
          status: 'Recommende'
        },
        {
          id: '9b361dae-2d44-4499-9940-97e188d41a32',
          name: 'Franš',
          address: 'Bulevar Oslobođenja 18a',
          website: 'www.frans.rs',
          status: 'Do Not Recommend'
        }
      ],
      showNewForm: false
    }),
    computed: {
      filteredRestaurantList() {
        return this.restaurantList.filter((restaurant) => {
          if (restaurant.name) {
            return restaurant.name
              .toLowerCase()
              .includes(this.filterText.toLowerCase())
          } else {
            return this.restaurantList
          }
        })
      },
      numberOfRestaurants() {
        return this.filteredRestaurantList.length
      }
    },
    methods: {
      addRestaurant(payload) {
        this.restaurantList.push(payload)
        this.hideForm()
      },
      deleteRestaurant(payload) {
        this.restaurantList = this.restaurantList.filter((restaurant) => {
          return restaurant.id !== payload.id
        })
      },
      hideForm() {
        this.showNewForm = false
      }
    },
    mounted() {
      if (this.$route.query.new) {
        this.showNewForm = true
      }
    }
  }
</script>

<template>
  <div class="container-small">
    <div class="mt-6 sm:flex jusitfy-start mb-12 max-w-5xl">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 mr-4"
        @click="showNewForm = true">
        + New Restaurant
      </button>
      <input
        v-model="filterText"
        type="text"
        class="rounded-lg border-gray-200 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        placeholder="Search restaurant..." />
    </div>

    <!-- New Restaurant Form -->
    <NewRestaurantForm
      v-show="showNewForm"
      @add-new-restaurant="addRestaurant"
      @cancel-new-restaurant="hideForm" />
    <h1 class="title text-2xl mb-2">
      Restaurants <span class="ml-1.5">({{ numberOfRestaurants }})</span>
    </h1>
    <div class="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li v-for="item in filteredRestaurantList" :key="item.id">
          <RestaurantCard
            :restaurant="item"
            @delete-restaurant="deleteRestaurant" />
        </li>
      </ul>
    </div>
  </div>
</template>
