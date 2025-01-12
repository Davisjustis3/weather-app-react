export function HourlyWeather(props) {
  const { weatherData} = props
  const hourlyForecast = weatherData && weatherData.forecast && 
    weatherData.forecast.forecastday[0] ? 
    weatherData.forecast.forecastday[0].hour : 
    [];
  return (
    <>
      {hourlyForecast.length > 0 ? (
        hourlyForecast.map((hour, index) => (
          < div key={index} className="card-wrapper" >
            <span>{hour.time.split(" ")[1]}</span>
            {/* icon */}
            <span>{Math.floor(hour.temp_c)} deg</span>
            <div>
              <span><i className='fa-solid fa-droplet'></i></span>
              <span>{hour.chance_of_snow}%</span>
            </div>
          </div >))
  ) :
      (<div className="card-wrapper">...</div>)}
    </>
  );
}