import { PopularLocations } from "./PopularLocations";
import { UpcomingEvents } from "./UpcomingEvents";

export function SectionTwo(props) {
  const {changeLocation, weatherData, popularLocations} = props
  
  
  return (
    <div className="popular-city-section">
      {<PopularLocations
          changeLocation={changeLocation}
          key={location.city}
          popularLocations={popularLocations}
          location={location.city}
          image={location.image}
          weatherData={weatherData}/>}
    </div>
  )
}