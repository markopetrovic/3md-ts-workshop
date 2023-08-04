import { restaurantStatusList, bookGenres } from "@/utils/constants";

export type RestaurantStatus = (typeof restaurantStatusList)[number];

export type Genre = (typeof bookGenres)[number];
