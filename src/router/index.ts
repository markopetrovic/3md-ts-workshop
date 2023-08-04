import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/books",
      name: "books",
      component: () => import("@/views/BooksPage.vue"),
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: () => import("@/views/RestaurantsPage.vue"),
    },
  ],
});

export default router;
