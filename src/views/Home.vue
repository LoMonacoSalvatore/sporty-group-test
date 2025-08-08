<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
import type { Leagues } from '@/types'
import SearchBar from '@/components/SearchBar.vue'
import Dropdown from '@/components/Dropdown.vue'
import Results from '@/components/Results.vue'

const url = ref('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
const { data, isLoading, error } = useFetch<Leagues>(url.value)

const query = ref('')
const selectedSport = ref('')

const sports = computed(() => {
  const leagues = data.value?.leagues ?? []
  const unique = new Set<string>()
  leagues.forEach((l) => {
    if (l.strSport) unique.add(l.strSport)
  })
  return Array.from(unique).sort()
})

const filteredLeagues = computed(() => {
  if (!data.value) return { leagues: [] }

  return {
    leagues: data.value.leagues.filter((l) => {
      const matchesQuery = l.strLeague.toLowerCase().includes(query.value.toLowerCase())
      const matchesSport = selectedSport.value ? l.strSport === selectedSport.value : true
      return matchesQuery && matchesSport
    }),
  }
})
</script>

<template>
  <div class="min-h-screen font-sans">
    <h1 class="text-4xl font-bold text-center text-red-800 mb-8">Sports Leagues Explorer</h1>

    <div v-if="isLoading">loading...</div>
    <div v-else-if="error">Error occurred</div>
    <div v-else>
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar v-model="query" />
        <Dropdown v-model="selectedSport" :options="sports" />
      </div>

      <div v-if="!filteredLeagues.leagues.length">No results</div>
      <Results v-else :leagues="filteredLeagues.leagues" />
    </div>
  </div>
</template>
