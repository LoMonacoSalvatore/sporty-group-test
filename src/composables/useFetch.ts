import { ref, watchEffect, toValue } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const isLoading = ref(true)

  watchEffect(async () => {
    data.value = null
    error.value = null
    isLoading.value = true

    const urlValue = toValue(url)

    try {
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = e as Error
    } finally {
      isLoading.value = false
    }
  })

  return { data, error, isLoading }
}
