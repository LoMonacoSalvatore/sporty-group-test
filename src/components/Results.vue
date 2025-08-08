<script setup lang="ts">
import type { League } from '@/types'

defineProps<{
  leagues: League[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="league in leagues"
      :key="league.idLeague"
      class="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all cursor-pointer border border-red-100"
    >
      <h2 class="text-lg font-semibold text-red-700 mb-2">{{ league.strLeague }}</h2>
      <p class="text-sm text-gray-600 mb-1">Sport: {{ league.strSport }}</p>
      <p v-if="league.strLeagueAlternate" class="text-sm italic text-gray-500">
        Alternate: {{ league.strLeagueAlternate }}
      </p>
    </div>
  </div>
</template>
