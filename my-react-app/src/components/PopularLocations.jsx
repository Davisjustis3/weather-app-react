import { useState, useEffect } from "react"
export function PopularLocations(props) {
  const [city, setCity] = useState('')
  
  const {location, image, popularLocations, weatherData} = props
  const currentWeather = weatherData.current

  const apiKey = '5b47535472ad45dbb5b00954251001'
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&hourly=1`

  useEffect(() => {
    const fetchHourlyData = () => {

  }
  })
  
  return (
    <>
      {weatherData && weatherData.current ? (
        popularLocations.map((location, index) => (
          <div key={index} className="popular-city" >
            <h4 className="pop-loc-title">{location.city}</h4>
            <div className="pop-city-temp">{Math.floor(currentWeather.temp_c)}</div>
            <p >Feels like: -5</p>
            <span>High: 3</span><span>Low: -4</span>
          </div>
      ))) :
        (<div className="popular-city">Loading</div>)}
      </>
  )
}