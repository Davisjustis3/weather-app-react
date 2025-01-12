import { TodaysWeather } from "./TodaysWeather"

export const Hero = (props) => {
  const { changeLocation, apiKey, apiURL, setWeatherData, weatherData, popularLocations, hourlyWeather, dayTempAvg } = props
  return (
    <div className="hero">
      {<TodaysWeather
        changeLocation={changeLocation}
        apiKey={apiKey}
        apiURL={apiURL}
        setWeatherData={setWeatherData}
        weatherData={weatherData}
        popularLocations={popularLocations}
        hourlyWeather={hourlyWeather}
        dayTempAvg={dayTempAvg} />}
    </div>
  )
}