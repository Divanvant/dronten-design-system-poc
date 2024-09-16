import { useFetchData } from './useFetchData'

export const useNieuwsItems = () => {
  const { data, error, loading, fetchData } = useFetchData('https://openpub.dronten.nl/wp-json/owc/openpub/v1/items')

  return {
    nieuwsPosts: data,
    error,
    loading,
    fetchNieuwsPosts: fetchData
  }
}
