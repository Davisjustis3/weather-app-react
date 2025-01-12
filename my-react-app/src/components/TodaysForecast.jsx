import { HourlyWeather } from "./HourlyWeather"

export function TodaysForecast(props) {
  const { weatherData, popularLocations} = props
  return (
    <div className="todays-forecast">
          <i className="fa-solid fa-chevron-left"></i>
            {< HourlyWeather
                weatherData={weatherData}
              />}
          <i className="fa-solid fa-chevron-right"></i>
    </div>
  )
}
