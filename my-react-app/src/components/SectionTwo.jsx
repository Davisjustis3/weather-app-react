import { PopularLocations } from "./PopularLocations";
import { UpcomingEvents } from "./UpcomingEvents";

export function SectionTwo() {
  const popularLocations = [
    { city: 'Paris', image: '/assets/popularLocations/Paris.png' },
    { city: 'New York', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Tokyo', image: '/assets/popularLocations/Tokyo.png' },
    { city: 'Buenos Aires', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Lagos', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Beijing', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Toronto', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Mexico City', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Cape Town', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Vienna', image: '/assets/popularLocations/NewYok.png' },
    { city: 'Dubai', image: '/assets/popularLocations/NewYok.png' },
    { city: 'New Delhi', image: '/assets/popularLocations/NewYok.png' }]
  
  return (
    <div className="popular-city-section">
      {popularLocations.map((location, index) => (
        <PopularLocations key={location.city} location={location.city} image={location.image} />
      ))}
    </div>
  )
}