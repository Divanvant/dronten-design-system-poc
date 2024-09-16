import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (url !== null) {
      fetchData()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
