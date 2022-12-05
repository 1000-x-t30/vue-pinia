<script setup lang="ts">
import { computed, ref } from "vue"
import { useWeathersStore } from "@/stores/weathers"
import type { City } from '@/interfaces/City.d'

interface Props {
  id: number
}

const props = defineProps<Props>()
const msg = ref('Loading...')
const weathersStore = useWeathersStore()

weathersStore.actionWeatherInfo(props.id)
.then((result) => {
  if(!result) {
    console.error(`${result}`)
  }
})
.catch((error) => {
  msg.value = `Error!! \n ${error}`
})

const city = computed((): City => weathersStore.getCityById(props.id))
const description = computed((): string => weathersStore.getDescription)
const isLoading = computed((): boolean => weathersStore.isLoading)
</script>

<template>
  <div v-if="isLoading">{{ msg }}</div>
  <p v-else>
    都市IDが
    {{ id }}で
    {{ city.name }}の
    現在の天気は
    {{ description }}です
  </p>
  <RouterLink
    :to="{ name: 'CityList' }">
    閉じる
  </RouterLink>
</template>
