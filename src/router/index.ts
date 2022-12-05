import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import CityList from "@/views/CityList.vue"

const routesSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "List",
    component: CityList,
  },
  {
    path: "/CityList",
    name: "CityList",
    component: () => {
      return import("@/views/CityList.vue")
    },
  },
  {
    path: "/weather/:id",
    name: "WeatherInfo",
    component: () => {
      return import("@/views/WeatherInfo.vue")
    },
    props: (routes) => {
      const idNum = Number(routes.params.id)
      return {
        id: idNum,
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesSettings,
})

export default router
