import { HourlyWeather } from "./HourlyWeather"
import { TodaysForecast } from "./TodaysForecast"

export const TodaysWeather = (props) => {
  const {hourlyWeather, dayTempAvg} = props
  return (
    <>
    <div className="todays-weather-container">
        <h1 className="title">Today's Weather</h1>
        <p className="your-location"><i className="fa-solid fa-location-dot"></i>Your Location</p>
        <div className="temp-circle">
          <h1 className="temp-num">{dayTempAvg}</h1>
        </div>
        {<TodaysForecast hourlyWeather={hourlyWeather} />}
    </div>
    </>
  )
}