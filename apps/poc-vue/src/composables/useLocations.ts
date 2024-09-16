import { useFetchData } from './useFetchData'

export const useLocations = () => {
  const { data, error, loading, fetchData } = useFetchData('https://openpdc.dronten.nl/wp-json/owc/pdc/v1/locations')

  return {
    locations: data,
    error,
    loading,
    fetchLocations: fetchData
  }
}
