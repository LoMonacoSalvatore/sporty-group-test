<script setup lang="ts">
import { ref } from 'vue'
import { useFetch } from '@/composables/useFetch'
import type { Leagues } from '@/types'

const url = ref('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')

const { data, error } = useFetch<Leagues>(url.value)
</script>

<template>
  <div>
    <div v-if="data">
      <div v-for="value in data.leagues">
        {{ value.strLeague }} - {{ value.strSport }} -
        {{ value.strLeagueAlternate }}
      </div>
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>
