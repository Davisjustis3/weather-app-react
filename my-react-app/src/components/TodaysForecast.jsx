import { HourlyWeather } from "./HourlyWeather"

export function TodaysForecast(props) {
  const {hourlyWeather} = props
  return (
    <div className="todays-forecast">
          <i className="fa-solid fa-chevron-left"></i>
            {hourlyWeather.map((data, index) =>
              < HourlyWeather
                key={index}
                hour={data.hour}
                deg={data.deg}
                icon={data.icon}
                prep={data.prep}
              />)}
          <i className="fa-solid fa-chevron-right"></i>
    </div>
  )
}