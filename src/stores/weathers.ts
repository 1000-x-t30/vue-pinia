import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { City } from '@/interfaces/City'
import { getCityInfo } from '@/apis/getCityInfo'
import { getWeatherInfo } from '@/apis/getWeatherInfo'

export const useWeathersStore = defineStore('weathers', () => {
  const cityList = ref(new Map<number, City>)
  const weatherJSON = ref()
  const isLoading = ref(false)

  // getters
  const getCityById = computed(() => (id: number): City => cityList.value.get(id) as City)
  const getDescription = computed((): string => weatherJSON.value.weather[0].description)

  //actions
  const actionCityList = async (): Promise<void> => {
    isLoading.value = true
    const result = await getCityInfo()
    for(const key in result) {
      cityList.value.set(Number(key), result[key])
    }
    isLoading.value = false
  }
  const actionWeatherInfo = async (id: number): Promise<boolean> => {
    const city = cityList.value.get(id)
    if(city === undefined) {
      return false
    }
    isLoading.value = true
    weatherJSON.value = await getWeatherInfo(city.q)
    isLoading.value = false
    return true
  }

  return {
    cityList,
    weatherJSON,
    isLoading,
    getCityById,
    getDescription,
    actionCityList,
    actionWeatherInfo
  }
})