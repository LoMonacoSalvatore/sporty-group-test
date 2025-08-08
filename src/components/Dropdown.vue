<script setup lang="ts">
defineProps<{
  modelValue: string
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <select
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    class="flex-1 border border-red-300 p-3 rounded-lg shadow-sm focus:ring focus:ring-red-200 outline-none"
  >
    <option value="">All Sports</option>
    <option v-for="sport in options" :key="sport" :value="sport">
      {{ sport }}
    </option>
  </select>
</template>
