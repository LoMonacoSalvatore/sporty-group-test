<script setup lang="ts">
defineProps<{ modelValue: string }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    placeholder="Search leagues..."
    class="flex-1 border border-red-300 p-3 rounded-lg shadow-sm focus:ring focus:ring-red-200 outline-none"
  />
</template>
