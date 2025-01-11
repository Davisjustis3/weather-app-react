import { HourlyWeather } from "./HourlyWeather"
import { TodaysForecast } from "./TodaysForecast"
import axios from "axios"
import { useEffect, useState } from "react"

export const TodaysWeather = (props) => {
  const {hourlyWeather, dayTempAvg} = props
  const [ location, setLocation ] = useState('Warsaw')
  const [ weatherData, setWeatherData ] = useState({})
  const [ error, setError ] = useState('')
  
  const apiKey = '5b47535472ad45dbb5b00954251001'

  const fetchWeather = async () => {

    const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&hour=1`
    try {
      const response = await axios.get(apiURL)
      console.log('Weather Data:', response.data)
      // const hourlyData = response.data.forecast[location].hourly;
      // console.log('Hourly data:', hourlyData)
      setWeatherData(response.data)
      setError('')
    } catch (err) {
      console.error('Problem retrieving data:', err)
      setError('Error retreiving weather data. Please try again.');
      setWeatherData(null);
    }
  }
  useEffect(() => {
    fetchWeather()
  }, [])
  return (
    <>
    <div className="todays-weather-container">
        <h1 className="title">Today's Weather</h1>
        {weatherData && weatherData.location ?
          <p className="your-location"><i className="fa-solid fa-location-dot"></i>
            {weatherData.location.name} 
          </p> :
          <p className="loading-data-location loading">Loading weather data...</p>
          }
        <div className="temp-circle">
          {
            weatherData && weatherData.current ? 
            <h1 className="temp-num">
              {Math.floor(weatherData.current.temp_c)}
            </h1> :
              <p className="loading-data-temp loading">Loading weather data...</p>
          }
        </div>
        {<TodaysForecast hourlyWeather={hourlyWeather} weatherData={weatherData} />}
    </div>
    </>
  )
}