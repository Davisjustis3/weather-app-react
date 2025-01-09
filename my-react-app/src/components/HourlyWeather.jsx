export function HourlyWeather(props) {
  const {hour, deg, icon, prep} = props

  return (
    <div className="card-wrapper">
        <span>{hour}</span>
        <i className={icon}></i>
        <span>{deg} deg</span>
        <div>
          <span><i className='fa-solid fa-droplet'></i></span>
          <span>{prep}%</span>
        </div>
      </div>
  )
}