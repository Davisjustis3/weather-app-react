export function PopularLocations(props) {
  const {location, image} = props
  
  return (
    <div className="popular-city" >
      <h4>{location}</h4>
      <div className="pop-city-temp">2</div>
      <p>Feels like: -5</p>
      <span>High: 3</span><span>Low: -4</span>
    </div>
  )
}