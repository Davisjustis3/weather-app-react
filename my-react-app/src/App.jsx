import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TodaysWeather } from './components/TodaysWeather';
import axios from 'axios';
import { SectionTwo } from './components/SectionTwo';
import { useEffect, useState } from "react"

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [location, setLocation] = useState('Warsaw')
  
  const apiKey = '5b47535472ad45dbb5b00954251001'
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&hourly=1`
  const popularLocations = [
    { city: 'Paris', image: 'assets/popular-locations/Paris.jpg'},
    { city: 'New York', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Tokyo', image: 'assets/popular-locations/Tokyo.jpg' },
    { city: 'Buenos Aires', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Lagos', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Beijing', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Toronto', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Mexico City', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Cape Town', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Vienna', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'Dubai', image: 'assets/popular-locations/NewYork.jpg' },
    { city: 'New Delhi', image: 'assets/popular-locations/NewYork.jpg' }]
console.log(weatherData)
  return (
    <>
      <Navbar />
      <Hero
        popularLocations={popularLocations}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        changeLocation={changeLocation}
        apiURL={apiURL}
        apiKey={apiKey}
         />
      <SectionTwo
        changeLocation={changeLocation}
        weatherData={weatherData}
        popularLocations={popularLocations} />
    </>
  )
}

export default App
