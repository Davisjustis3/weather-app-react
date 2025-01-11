import { TodaysWeather } from "./TodaysWeather"

export const Hero = (props) => {
  const { hourlyWeather, dayTempAvg } = props
  return (
    <div className="hero">
      {<TodaysWeather hourlyWeather={hourlyWeather} dayTempAvg={dayTempAvg} />}
    </div>
  )
}