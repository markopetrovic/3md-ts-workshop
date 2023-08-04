import { restaurantStatusList, bookGenres } from '@/utils/constants'

export type Genre = (typeof bookGenres)[number]

export type RestaurantStatus = (typeof restaurantStatusList)[number]

type Nullable<T> = T | null

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: RestaurantStatus
}

export type Book = {
  id: string
  title: string
  author: string
  genre: Genre
  printRun: Nullable<number>
}
