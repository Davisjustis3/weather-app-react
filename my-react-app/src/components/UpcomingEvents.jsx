import { useState, useEffect } from "react"

export function UpcomingEvents() {
  const [concerts, setConcerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const api = '08fd0d69-2832-4fb2-b862-d079451ae7b8'
  const apiURL = `https://api.jambase.com/events?apikey=${api}`

  useEffect(() => {
    const getConcerts = async () => {
      try {
        const response = await fetch(apiURL)
        if (!response.ok) {
          throw new Error('Response was not ok...')
        } 
        const data = await response.json()
        console.log('Concert Data:', response.data)
        setConcerts(data.Events)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    } 
    getConcerts()
  }, [apiURL])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>;

  return (
    < div className="news-box" >
      
    </div >
  )
}