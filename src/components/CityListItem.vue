<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { useWeathersStore } from '@/stores/weathers'
import type { City } from "@/interfaces/City.d"

interface Props {
  id: number
  name: string
}

defineProps<Props>()
</script>

<template>
  <div>
    都市IDが{{id}}の{{name}}の天気を
    <RouterLink
      :to="{
        name:'WeatherInfo',
        params:{ id: id }}" >
      表示
    </RouterLink>
  </div>
</template>