<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWeathersStore } from '@/stores/weathers'
import CityListItem from '@/components/CityListItem.vue'
import type { City } from '@/interfaces/City'

const msg = ref('Loading...')
const weathersStore = useWeathersStore()

weathersStore.actionCityList()
.catch((error) => {
    msg.value = `Error!! \n ${error}`
  }
)

const cityList = computed((): Map<number, City> => {
  return weathersStore.cityList
})

const isLoading = computed((): boolean => {
  return weathersStore.isLoading
})
</script>

<template>
  <h2>天気表示ポイントリスト</h2>
  <section>
    <div v-if="isLoading">{{ msg }}</div>
    <ul>
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <CityListItem :id="city.id" :name="city.name" />
      </li>
    </ul>
  </section>
</template>
