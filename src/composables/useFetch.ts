import { ref } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)

  const fetchData = async () => {
    try {
      const res = await fetch(url)
      data.value = (await res.json()) as T
    } catch (err) {
      error.value = err as Error
    }
  }

  fetchData()

  return { data, error, fetchData }
}
