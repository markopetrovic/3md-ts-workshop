import { restaurantStatusList, bookGenres } from '@/utils/constants'

export type Genre = (typeof bookGenres)[number]

export type RestaurantStatus = (typeof restaurantStatusList)[number]

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: RestaurantStatus
}
